// src/components/sections/CalendarToPay.tsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

import type { TripOption, Booking, AvailabilityData } from "@/lib/bookingTypes";
import type { EdgeEnv } from "@/lib/supabaseEdge";
import {
  listCatalog,
  checkAvailabilityRange,
  checkAvailabilityDay,
  createCheckoutSession,
} from "@/lib/supabaseEdge";

// ──────────────────────────────────────────────────────────────────────────────
// Dummy fallbacks (shapes unchanged)
// ──────────────────────────────────────────────────────────────────────────────
const DUMMY_TRIPS: TripOption[] = [
  { id: "prod_half_day", title: "Half-Day Charter", duration_hr: 4, start_time: "07:00:00", start_times: "07:00:00,13:00:00", price: 450, price_id: "price_half_day", currency: "usd", category: "Nearshore Fishing", is_popular: true },
  { id: "prod_full_day", title: "Full-Day Offshore", duration_hr: 8, start_time: "06:00:00", start_times: "06:00:00", price: 850, price_id: "price_full_day", currency: "usd", category: "Offshore Fishing", is_popular: false },
  { id: "prod_sunset", title: "Sunset Cruise", duration_hr: 2, start_time: "18:00:00", start_times: "18:00:00", price: 180, price_id: "price_sunset", currency: "usd", category: "Sunset Cruise", is_popular: false },
];

function makeDummyBookingsForMonth(date: Date): Booking[] {
  const y = date.getFullYear();
  const m = date.getMonth();
  const days = new Date(y, m + 1, 0).getDate();
  const picks = new Set<number>();
  while (picks.size < 6) picks.add(Math.floor(Math.random() * days) + 1);
  const ids = ["prod_half_day", "prod_full_day", "prod_sunset"];
  const starts = ["07:00:00", "13:00:00", "18:00:00"];
  return [...picks].map((d, i) => ({
    id: `dummy-${y}-${m + 1}-${d}-${i}`,
    booking_date: new Date(y, m, d).toISOString().split("T")[0],
    trip_option_id: ids[i % ids.length],
    start_time: starts[i % starts.length],
    customer_name: "Reserved",
    status: "confirmed",
  }));
}

// UI helpers (no shape changes)
function fmt12h(timeString?: string) {
  if (!timeString || typeof timeString !== "string") return "—";
  const [h, m] = timeString.split(":");
  const hour = parseInt(h, 10);
  const minute = parseInt(m || "0", 10);
  if (isNaN(hour) || isNaN(minute)) return "—";
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${`${minute}`.padStart(2, "0")} ${ampm}`;
}
function addHoursToHHMM(start: string, hours: number) {
  const [h, m] = start.split(":").map((v) => parseInt(v, 10));
  if (isNaN(h) || isNaN(m)) return start;
  const t = new Date(2000, 0, 1, h, m, 0);
  t.setHours(t.getHours() + hours);
  const hh = `${t.getHours()}`.padStart(2, "0");
  const mm = `${t.getMinutes()}`.padStart(2, "0");
  return `${hh}:${mm}:00`;
}
function usd(n: number) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
}

type Step = 1 | 2 | 3 | 4;

export type CalendarToPayProps = {
  env: EdgeEnv;
  useDummy?: boolean;
  onSuccessNavigateTo?: string;
  onCancelNavigateTo?: string;
  className?: string;
};

export default function CalendarToPay({
  env,
  useDummy = false,
  onSuccessNavigateTo = "/booking/success",
  onCancelNavigateTo = "/booking/cancelled",
  className,
}: CalendarToPayProps) {
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>(1);
  const [tripOptions, setTripOptions] = useState<TripOption[]>([]);
  const [category, setCategory] = useState<string>("All");
  const [selectedTripId, setSelectedTripId] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [processing, setProcessing] = useState(false);
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  // Track the month currently shown in the calendar (for arrows)
  const [displayedMonth, setDisplayedMonth] = useState<Date>(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const selectedTrip = useMemo(
    () => tripOptions.find((t) => t.id === selectedTripId),
    [tripOptions, selectedTripId]
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(tripOptions.map((t) => t.category)))],
    [tripOptions]
  );

  // Load
  useEffect(() => {
    (async () => {
      if (useDummy) {
        setTripOptions(DUMMY_TRIPS);
      } else {
        try {
          const items = await listCatalog(env);
          setTripOptions(items.length ? items : DUMMY_TRIPS);
        } catch {
          setTripOptions(DUMMY_TRIPS);
        }
      }
      await refreshMonth(selectedDate);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedDate) refreshMonth(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  // Whenever visible month changes via toolbar or calendar nav, refresh that month
  useEffect(() => {
    if (displayedMonth) refreshMonth(displayedMonth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedMonth]);

  async function refreshMonth(date?: Date) {
    const cur = date || new Date();
    const start = new Date(cur.getFullYear(), cur.getMonth(), 1).toISOString().split("T")[0];
    const end = new Date(cur.getFullYear(), cur.getMonth() + 1, 0).toISOString().split("T")[0];

    if (useDummy) {
      setBookings(makeDummyBookingsForMonth(cur));
      return;
    }

    try {
      const avail = await checkAvailabilityRange(env, start, end);
      const out: Booking[] = [];
      Object.entries(avail as AvailabilityData).forEach(([dateStr, day]) => {
        (day.events || []).forEach((ev) => {
          const s = new Date(ev.start);
          const hh = `${s.getHours()}`.padStart(2, "0");
          const mm = `${s.getMinutes()}`.padStart(2, "0");
          out.push({
            id: `cal-${ev.id}`,
            booking_date: dateStr,
            trip_option_id: "google-calendar",
            start_time: `${hh}:${mm}:00`,
            customer_name: ev.title,
            status: "confirmed",
          });
        });
      });
      setBookings(out);
    } catch {
      setBookings(makeDummyBookingsForMonth(cur));
    }
  }

  // Availability coloring
  function getDateAvailability(date: Date) {
    const d = date.toISOString().split("T")[0];
    const dayBookings = bookings.filter((b) => b.booking_date === d);
    if (dayBookings.length === 0) return "available" as const;
    const morning = dayBookings.some((b) => parseInt(b.start_time.split(":")[0]) < 12);
    const afternoon = dayBookings.some((b) => parseInt(b.start_time.split(":")[0]) >= 12);
    if (morning && afternoon) return "full" as const;
    return "partial" as const;
  }
  function getCalendarModifiers() {
    const available: Date[] = [];
    const partial: Date[] = [];
    const full: Date[] = [];
    const base = displayedMonth || selectedDate || new Date();
    const start = new Date(base.getFullYear(), base.getMonth(), 1);
    const end = new Date(base.getFullYear(), base.getMonth() + 1, 0);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const a = getDateAvailability(new Date(d));
      if (a === "available") available.push(new Date(d));
      else if (a === "partial") partial.push(new Date(d));
      else full.push(new Date(d));
    }
    return { available, partial, full };
  }

  const selectedDateBookings = useMemo(() => {
    if (!selectedDate) return [] as Booking[];
    const d = selectedDate.toISOString().split("T")[0];
    return bookings.filter((b) => b.booking_date === d);
  }, [bookings, selectedDate]);

  // Determine if a trip option conflicts with any booking on the selected date
  function isTripBookedForSelectedDay(trip: TripOption): boolean {
    if (!selectedDate) return false;
    const startH = parseInt(trip.start_time.split(":")[0] || "0", 10);
    const startM = parseInt(trip.start_time.split(":")[1] || "0", 10);
    const tripStart = startH * 60 + startM;
    const tripEnd = tripStart + trip.duration_hr * 60;

    return selectedDateBookings.some((b) => {
      const [bh, bm] = b.start_time.split(":").map((v) => parseInt(v || "0", 10));
      const bookingStart = bh * 60 + bm;

      // try to infer booking duration from catalog; default to 120 min if unknown (google-calendar etc.)
      const bookedTrip = tripOptions.find((t) => t.id === b.trip_option_id);
      const bookingDuration = bookedTrip?.duration_hr ? bookedTrip.duration_hr * 60 : 120;
      const bookingEnd = bookingStart + bookingDuration;

      // overlap?
      return Math.max(tripStart, bookingStart) < Math.min(tripEnd, bookingEnd);
    });
  }

  function renderBookedRanges() {
    if (!selectedDateBookings.length) {
      return <div className="text-sm text-muted-foreground">No bookings yet for this day.</div>;
    }
    return (
      <ul className="space-y-1 text-sm">
        {selectedDateBookings.map((b) => {
          const trip = tripOptions.find((t) => t.id === b.trip_option_id);
          const end = trip ? addHoursToHHMM(b.start_time, trip.duration_hr) : addHoursToHHMM(b.start_time, 2);
          return (
            <li key={b.id}>
              Booked from <span className="font-medium">{fmt12h(b.start_time)}</span> to{" "}
              <span className="font-medium">{fmt12h(end)}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  async function handlePayNow() {
    if (!selectedTrip || !selectedDate || !customer.name || !customer.email) return;
    setProcessing(true);
    try {
      const dateISO = selectedDate.toISOString().split("T")[0];
      let ok = true;
      if (!useDummy) ok = await checkAvailabilityDay(env, dateISO, selectedTrip.id);
      if (!ok) {
        alert("This slot is no longer available. Please pick another date.");
        setProcessing(false);
        setStep(1);
        return;
      }

      if (!useDummy) {
        const result = await createCheckoutSession(env, {
          productId: selectedTrip.id,
          priceId: selectedTrip.price_id,
          bookingDate: dateISO,
          startTime: selectedTrip.start_time,
          customerName: customer.name,
          customerEmail: customer.email,
          customerPhone: customer.phone || "",
        });
        if (result.success && result.checkoutUrl) {
          window.location.href = result.checkoutUrl;
          return;
        }
      }

      navigate(onSuccessNavigateTo);
    } catch {
      navigate(onSuccessNavigateTo);
    } finally {
      setProcessing(false);
    }
  }

  // Stepper dot colors (theme-aware)
  const Dot = ({ state }: { state: "active" | "done" | "future" }) => {
    const cls =
      state === "active"
        ? "bg-[hsl(var(--primary))]"
        : state === "done"
        ? "bg-[hsl(var(--accent))]"
        : "bg-[hsl(var(--muted))]";
    return <div className={`h-2.5 w-2.5 rounded-full ${cls}`} />;
  };

  // Helpers for toolbar arrows inside the calendar card
  const prevMonth = () =>
    setDisplayedMonth(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1, 1));
  const nextMonth = () =>
    setDisplayedMonth(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 1));
  const monthLabel = displayedMonth.toLocaleString(undefined, { month: "long", year: "numeric" });

  return (
    <section className={className ?? "relative py-16"}>
      {/* soft backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }}
      />

      <div className="container mx-auto px-4">
        {/* header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Book Your Adventure</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Pick a date, choose a trip, add your details, and check out—fast and secure.
          </p>
        </div>

        {/* themed stepper */}
        <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground mb-8">
          <Dot state={step >= 1 ? (step === 1 ? "active" : "done") : "future"} /> <span className="uppercase tracking-wide">Date</span>
          <span>•</span>
          <Dot state={step >= 2 ? (step === 2 ? "active" : "done") : "future"} /> <span className="uppercase tracking-wide">Trip</span>
          <span>•</span>
          <Dot state={step >= 3 ? (step === 3 ? "active" : "done") : "future"} /> <span className="uppercase tracking-wide">Your Info</span>
          <span>•</span>
          <Dot state={step >= 4 ? (step === 4 ? "active" : "done") : "future"} /> <span className="uppercase tracking-wide">Pay</span>
        </div>

        {/* STEP 1: Calendar (white card, no outer arrows; arrows live inside calendar card) */}
        {step === 1 && (
          <Card className="relative rounded-2xl border-0 shadow-2xl bg-[hsl(var(--card))]">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl md:text-3xl">Select Your Date</CardTitle>
              <div className="text-sm text-muted-foreground">Green = available, Orange = partial, Red = full.</div>
            </CardHeader>

            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* legend (white chip row) */}
              <div className="md:col-span-2 rounded-xl bg-[hsl(var(--card))] shadow p-4">
                <h4 className="font-semibold mb-2 text-sm">Availability Legend</h4>
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded" /> <span>Available</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-orange-500 rounded" /> <span>Partially Booked</span></div>
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded" /> <span>Fully Booked</span></div>
                </div>
              </div>

              {/* calendar (white card) */}
              <div className="rounded-2xl bg-[hsl(var(--card))] shadow p-4">
                {/* toolbar arrows INSIDE the calendar card */}
                <div className="flex items-center justify-between mb-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={prevMonth}
                    className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/.9)]"
                  >
                    ← Prev
                  </Button>
                  <div className="text-sm font-medium">{monthLabel}</div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={nextMonth}
                    className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/.9)]"
                  >
                    Next →
                  </Button>
                </div>

                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(d) => {
                    setSelectedDate(d);
                    if (d) setDisplayedMonth(new Date(d.getFullYear(), d.getMonth(), 1)); // keep month in sync
                  }}
                  month={displayedMonth}
                  onMonthChange={(m) => setDisplayedMonth(new Date(m.getFullYear(), m.getMonth(), 1))}
                  disabled={(d) => d < new Date()}
                  modifiers={getCalendarModifiers()}
                  modifiersClassNames={{
                    available: "bg-green-100 border-green-500 text-green-900",
                    partial: "bg-orange-100 border-orange-500 text-orange-900",
                    full: "bg-red-100 border-red-500 text-red-900",
                  }}
                  classNames={{
                    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                    month: "space-y-4 w-full",
                    caption: "sr-only", // hide built-in caption/nav to avoid duplicate arrows
                    caption_label: "text-lg font-medium",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex w-full",
                    head_cell: "text-muted-foreground rounded-md w-full font-normal text-sm p-2",
                    row: "flex w-full mt-2",
                    cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
                    day: "h-12 w-12 p-0 font-normal rounded-md border-2 border-transparent transition hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]",
                    day_selected: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))] focus:bg-[hsl(var(--primary))]",
                    day_today: "ring-2 ring-[hsl(var(--primary))]",
                    day_outside: "opacity-50",
                    day_disabled: "opacity-50",
                  }}
                />
              </div>

              {/* date summary (white card) */}
              <div className="rounded-2xl bg-[hsl(var(--card))] shadow p-4">
                <div className="text-sm font-medium mb-1">{selectedDate ? selectedDate.toLocaleDateString() : "Pick a date"}</div>
                {renderBookedRanges()}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={!selectedDate}
                    className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)] shadow-lg"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* STEP 2: Trip + filtering (with conflict message instead of Select when booked) */}
        {step === 2 && (
          <Card className="relative rounded-2xl border-0 shadow-2xl bg-[hsl(var(--card))]">
            <CardHeader className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl">Choose Your Trip</CardTitle>
                  <div className="text-sm text-muted-foreground">For {selectedDate?.toLocaleDateString()}</div>
                </div>
                <Button
                  variant="secondary"
                  onClick={() => setStep(1)}
                  className="shadow bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/.9)]"
                >
                  Back
                </Button>
              </div>

              {/* Filter pills */}
              <div className="flex flex-wrap gap-2 justify-start">
                {categories.map((c) => {
                  const active = category === c;
                  return (
                    <Button
                      key={c}
                      size="sm"
                      variant={active ? "default" : "outline"}
                      className={`rounded-full transition ${
                        active
                          ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-md"
                          : "hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
                      }`}
                      onClick={() => setCategory(c)}
                    >
                      {c}
                    </Button>
                  );
                })}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(category === "All" ? tripOptions : tripOptions.filter(t => t.category === category)).map((t) => {
                  const isSel = selectedTripId === t.id;
                  const isUnavailable = !!selectedDate && isTripBookedForSelectedDay(t);

                  return (
                    <Card
                      key={t.id}
                      className={[
                        "relative overflow-hidden cursor-pointer rounded-2xl border-0 shadow-xl transition",
                        "bg-[hsl(var(--card))] hover:shadow-2xl hover:-translate-y-0.5",
                        isSel ? "ring-2 ring-[hsl(var(--primary))]" : "",
                        isUnavailable ? "opacity-100" : "",
                      ].join(" ")}
                      onClick={() => {
                        if (!isUnavailable) setSelectedTripId(t.id);
                      }}
                    >
                      {/* conic flourish */}
                      <div
                        className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                        style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }}
                      />
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-semibold text-lg leading-tight">{t.title}</div>
                            <div className="text-xs text-muted-foreground">Private charter</div>
                          </div>
                          {t.is_popular && <Badge className="rounded-full">Popular</Badge>}
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <div>
                            <span className="block text-foreground/80 font-medium">Duration</span>
                            {t.duration_hr}h
                          </div>
                          <div>
                            <span className="block text-foreground/80 font-medium">Start</span>
                            {fmt12h(t.start_time)}
                          </div>
                        </div>

                        <div className="pt-3 border-t flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Total</span>
                          <span className="text-xl font-bold tracking-tight">{usd(t.price)}</span>
                        </div>

                        {/* CTA area: either disabled 2-line warning button, or Select/Selected */}
                        {isUnavailable ? (
                          <Button
                            disabled
                            className="w-full mt-2 bg-[hsl(var(--destructive))/0.08] text-red-600 hover:bg-[hsl(var(--destructive))/0.08] cursor-not-allowed !opacity-100 whitespace-normal leading-snug py-3"
                          >
                            <span className="block">This time slot is booked for selected day. Please pick another trip or date.</span>
                          </Button>
                        ) : (
                          <Button
                            className={`w-full mt-2 transition shadow-lg ${
                              isSel
                                ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)]"
                                : "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/.9)]"
                            }`}
                            onClick={() => { setSelectedTripId(t.id); setStep(3); }}
                          >
                            {isSel ? "Selected" : "Select"}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* STEP 3: Info */}
        {step === 3 && (
          <Card className="relative rounded-2xl border-0 shadow-2xl bg-[hsl(var(--card))]">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl md:text-3xl">Your Information</CardTitle>
              <div className="text-sm text-muted-foreground">We’ll use this to confirm your booking.</div>
            </CardHeader>

            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-[hsl(var(--card))] shadow p-3">
                <Label htmlFor="name">Full name *</Label>
                <Input id="name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} placeholder="Jane Doe" />
              </div>
              <div className="rounded-xl bg-[hsl(var(--card))] shadow p-3">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} placeholder="jane@email.com" />
              </div>
              <div className="rounded-xl bg-[hsl(var(--card))] shadow p-3">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} placeholder="(555) 123-4567" />
              </div>

              <div className="md:col-span-3 rounded-2xl bg-[hsl(var(--card))] shadow p-4 text-sm space-y-1">
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Service</span><span className="font-medium">{selectedTrip?.title || "—"}</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium">{selectedTrip ? `${selectedTrip.duration_hr}h` : "—"}</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Start</span><span className="font-medium">{selectedTrip ? fmt12h(selectedTrip.start_time) : "—"}</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Date</span><span className="font-medium">{selectedDate ? selectedDate.toLocaleDateString() : "—"}</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Total</span><span className="text-xl font-bold">{selectedTrip ? usd(selectedTrip.price) : "—"}</span></div>
              </div>

              <div className="md:col-span-3 flex gap-3">
                <Button
                  className="flex-1 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)] shadow-lg"
                  size="lg"
                  disabled={!selectedTrip || !selectedDate || !customer.name || !customer.email || processing}
                  onClick={() => setStep(4)}
                >
                  Continue to Pay
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="flex-1 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/.9)]"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* STEP 4: Pay */}
        {step === 4 && (
          <Card className="relative rounded-2xl border-0 shadow-2xl bg-[hsl(var(--card))]">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl md:text-3xl">Payment</CardTitle>
              <div className="text-sm text-muted-foreground">Secure checkout via Stripe.</div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-2xl bg-[hsl(var(--card))] shadow p-4 text-sm space-y-1">
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Service</span><span className="font-medium">{selectedTrip?.title || "—"}</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Date</span><span className="font-medium">{selectedDate ? selectedDate.toLocaleDateString() : "—"}</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Time</span><span className="font-medium">{selectedTrip ? fmt12h(selectedTrip.start_time) : "—"}</span></div>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">Total</span><span className="text-xl font-bold">{selectedTrip ? usd(selectedTrip.price) : "—"}</span></div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  className="flex-1 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)] shadow-lg"
                  size="lg"
                  disabled={processing}
                  onClick={handlePayNow}
                >
                  {processing ? "Processing…" : "Pay Now"}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="flex-1 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/.9)]"
                  onClick={() => navigate(onCancelNavigateTo)}
                >
                  Cancel
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">Free cancellation up to 3 days before your trip.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}

/* DUMMY EXAMPLES (for quick local testing)

const DUMMY_TRIPS_EXAMPLE: TripOption[] = [
  { id: "prod_half_day", title: "Half-Day Charter", duration_hr: 4, start_time: "07:00:00", start_times: "07:00:00,13:00:00", price: 450, price_id: "price_half_day", currency: "usd", category: "Nearshore Fishing", is_popular: true },
];

function makeDummyBookingsForMonthExample(date: Date): Booking[] {
  return [{
    id: "dummy-1",
    booking_date: date.toISOString().split("T")[0],
    trip_option_id: "prod_half_day",
    start_time: "07:00:00",
    customer_name: "Reserved",
    status: "confirmed",
  }];
}*/