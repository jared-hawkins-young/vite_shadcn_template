import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Booking = {
  id: string;
  booking_date: string; // YYYY-MM-DD
  start_time: string;   // HH:mm:ss
  customer_name: string;
  customer_email: string;
  customer_phone?: string | null;
  status: string;
  total_amount: number;
  currency: string;
  trip_option_id: string;
};

type CompleteBookingResponse =
  | {
      success: true;
      booking: Booking;
      calendarEventCreated?: boolean;
      calendarEventId?: string | null;
      message?: string;
    }
  | { error: string };

export type BookingSuccessSectionProps = {
  /** If not provided, reads from import.meta.env */
  supabaseUrl?: string;
  supabaseAnonKey?: string;
  /** Optionally override session & tenant; otherwise read from querystring */
  sessionId?: string | null;
  tenantId?: string | null;
  /** Optional CTA overrides */
  onBookAnotherHref?: string;
  onHomeHref?: string;
  /** Extra class for outer section */
  className?: string;
};

export function BookingSuccessSection({
  supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string,
  supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  sessionId: sessionIdProp,
  tenantId: tenantIdProp,
  onBookAnotherHref = "/book-now",
  onHomeHref = "/",
  className,
}: BookingSuccessSectionProps) {
  const [state, setState] = useState<
    | { status: "idle" | "loading" }
    | { status: "error"; message: string }
    | { status: "done"; data: Extract<CompleteBookingResponse, { success: true }> }
  >({ status: "idle" });

  const sessionId = useMemo(() => {
    if (sessionIdProp !== undefined) return sessionIdProp;
    const p = new URLSearchParams(window.location.search);
    return p.get("session_id") || p.get("sessionId");
  }, [sessionIdProp]);

  const tenantId = useMemo(() => {
    if (tenantIdProp !== undefined) return tenantIdProp;
    const p = new URLSearchParams(window.location.search);
    return p.get("tenant_id") || p.get("tenantId");
  }, [tenantIdProp]);

  useEffect(() => {
    if (!sessionId) {
      setState({ status: "error", message: "Missing session_id in URL." });
      return;
    }
    const run = async () => {
      try {
        setState({ status: "loading" });
        const res = await fetch(`${supabaseUrl}/functions/v1/complete-booking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabaseAnonKey}`,
          },
          body: JSON.stringify({ sessionId, tenantId }),
        });
        const json: CompleteBookingResponse = await res.json();
        if (!res.ok || "error" in json) {
          const message =
            "error" in json ? json.error : `Failed to complete booking (HTTP ${res.status}).`;
          setState({ status: "error", message });
          return;
        }
        setState({ status: "done", data: json });
      } catch (err: any) {
        setState({
          status: "error",
          message: err?.message || "Unexpected error completing booking.",
        });
      }
    };
    run();
  }, [sessionId, tenantId, supabaseUrl, supabaseAnonKey]);

  const formatMoney = (amount: number, currency: string) => {
    try {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: (currency || "USD").toUpperCase(),
        maximumFractionDigits: 0,
      }).format(amount);
    } catch {
      return `$${amount}`;
    }
  };
  const formatDate = (yyyyMmDd: string) => {
    const d = new Date(`${yyyyMmDd}T12:00:00`);
    return d.toLocaleDateString();
  };
  const formatTime = (hhmmss: string) => {
    const [h, m] = hhmmss.split(":");
    const date = new Date();
    date.setHours(parseInt(h, 10), parseInt(m, 10), 0, 0);
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  return (
    <section className={className ?? "relative py-24"}>
      {/* soft themed band */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }}
      />

      <div className="container mx-auto px-4 max-w-3xl">
        {/* glossy card shell with gradient ring + conic flourish like trip cards */}
        <div className="relative group">
          <div
            className="absolute -inset-[1px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)/.55), hsl(var(--accent)/.45))" }}
          />
          <Card className="relative rounded-2xl border-0 bg-[hsl(var(--card))] shadow-2xl overflow-hidden">
            {/* top rail */}
            <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />
            {/* conic flourish */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30"
              style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }}
            />

            {state.status === "loading" && (
              <CardContent className="p-10 text-center space-y-3">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto"
                     style={{ borderColor: "hsl(var(--primary))" }} />
                <h1 className="text-2xl font-bold">Finalizing your booking…</h1>
                <p className="text-muted-foreground">
                  Please don’t refresh. We’re confirming payment and adding your trip to the calendar.
                </p>
              </CardContent>
            )}

            {state.status === "error" && (
              <CardContent className="p-10 text-center space-y-4">
                <h1 className="text-2xl font-bold text-red-600">We couldn’t finalize your booking</h1>
                <p className="text-muted-foreground whitespace-pre-wrap">{state.message}</p>
                <div className="mt-2 flex gap-3 justify-center">
                  <a href={onBookAnotherHref}>
                    <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)]">
                      Try Again
                    </Button>
                  </a>
                  <a href="/contact">
                    <Button variant="outline">Contact Us</Button>
                  </a>
                </div>
              </CardContent>
            )}

            {state.status === "done" && (
              <>
                <CardHeader className="pb-0 text-center">
                  <h1 className="text-3xl md:text-4xl font-bold">🎉 Booking Confirmed!</h1>
                  <p className="text-muted-foreground mt-2">
                    {state.data.message || "Your payment has been received and your trip is booked."}
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InfoBox label="Name" value={state.data.booking.customer_name} />
                      <InfoBox label="Email" value={state.data.booking.customer_email} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <InfoBox label="Date" value={formatDate(state.data.booking.booking_date)} />
                      <InfoBox label="Start Time" value={formatTime(state.data.booking.start_time)} />
                      <InfoBox label="Status" value={state.data.booking.status} cap />
                    </div>

                    <InfoBox
                      label="Total"
                      value={formatMoney(state.data.booking.total_amount, state.data.booking.currency)}
                      prominent
                    />

                    {state.data.calendarEventCreated ? (
                      <Callout tone="success" text="Added to calendar successfully." />
                    ) : (
                      <Callout
                        tone="warn"
                        text="Calendar wasn’t updated automatically. Your booking is confirmed in our system."
                      />
                    )}
                  </div>

                  <div className="mt-8 flex gap-3 justify-center">
                    <a href={onHomeHref}>
                      <Button variant="outline">Back to Home</Button>
                    </a>
                    <a href={onBookAnotherHref}>
                      <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)]">
                        Book Another Trip
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

function InfoBox({
  label,
  value,
  cap,
  prominent,
}: {
  label: string;
  value: string;
  cap?: boolean;
  prominent?: boolean;
}) {
  return (
    <div className="p-4 rounded-xl bg-[hsl(var(--card))] border border-border shadow-sm">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className={prominent ? "font-bold text-xl" : "font-semibold"}>
        {cap ? value.charAt(0).toUpperCase() + value.slice(1) : value}
      </div>
    </div>
  );
}

function Callout({ tone, text }: { tone: "success" | "warn"; text: string }) {
  const styles =
    tone === "success"
      ? "bg-green-50 border-green-200 text-green-800"
      : "bg-yellow-50 border-yellow-200 text-yellow-800";
  return <div className={`p-4 rounded-xl border ${styles}`}>✅ {text}</div>;
}