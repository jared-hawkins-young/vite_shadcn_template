// src/lib/supabaseEdge.ts
import type { TripOption, AvailabilityData } from "./bookingTypes";

export type EdgeEnv = {
  tenantId: string;
  supabaseUrl: string;       // VITE_SUPABASE_URL
  supabaseAnonKey: string;   // VITE_SUPABASE_ANON_KEY
};

function assertEnv(env: EdgeEnv) {
  if (!env?.supabaseUrl) throw new Error("Missing supabaseUrl");
  if (!env?.supabaseAnonKey) throw new Error("Missing supabaseAnonKey");
  if (!env?.tenantId) throw new Error("Missing tenantId");
}

function functionsUrl(env: EdgeEnv) {
  return `${env.supabaseUrl.replace(/\/$/, "")}/functions/v1`;
}

async function post<T>(env: EdgeEnv, path: string, body: unknown): Promise<T> {
  assertEnv(env);
  const res = await fetch(`${functionsUrl(env)}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.supabaseAnonKey}`,
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) {
    const msg = json?.error || `Edge call failed: ${path}`;
    throw new Error(msg);
  }
  return json as T;
}

/** Catalog (Stripe products) */
export async function listCatalog(env: EdgeEnv): Promise<TripOption[]> {
  type CatalogResponse = { items: any[] };
  const result = await post<CatalogResponse>(env, "list-catalog", { tenantId: env.tenantId });
  const items = (result.items || []).map((it: any): TripOption => ({
    id: it.product_id,
    title: it.title,
    duration_hr: typeof it.duration_hr === "number" ? it.duration_hr : Number(it.duration_hr || 0),
    start_time: it.start_time,
    start_times: it.start_time,
    price: (it.price_cents ?? 0) / 100,
    price_id: it.price_id,
    currency: it.currency || "usd",
    category: it.category || "Uncategorized",
    is_popular: !!it.is_popular,
    stripe_payment_link: "",
  }));
  return items;
}

/** Availability for a month range (Google Calendar behind the scenes) */
export async function checkAvailabilityRange(
  env: EdgeEnv,
  startDate: string,
  endDate: string
): Promise<AvailabilityData> {
  type AvailabilityResponse = { availability: AvailabilityData };
  const result = await post<AvailabilityResponse>(env, "check-availability", {
    tenantId: env.tenantId,
    startDate,
    endDate,
  });
  return result.availability || {};
}

/** Availability for a specific date + product */
export async function checkAvailabilityDay(
  env: EdgeEnv,
  dateISO: string,
  tripOptionId: string
): Promise<boolean> {
  type DayAvailResponse = { available: boolean };
  const result = await post<DayAvailResponse>(env, "check-availability", {
    tenantId: env.tenantId,
    date: dateISO,
    tripOptionId,
  });
  return !!result.available;
}

/** Stripe Checkout */
export async function createCheckoutSession(env: EdgeEnv, payload: {
  productId: string;
  priceId: string;
  bookingDate: string; // YYYY-MM-DD
  startTime: string;   // HH:mm:ss
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
}): Promise<{ success: boolean; checkoutUrl?: string }> {
  type Resp = { success: boolean; checkoutUrl?: string; error?: string };
  const result = await post<Resp>(env, "create-checkout-session", {
    tenantId: env.tenantId,
    ...payload,
  });
  return result;
}

/* ─────────────────────────────────────────────────────────────────────────────
  DUMMY DATA (commented-out examples)
───────────────────────────────────────────────────────────────────────────────

import { TripOption } from "./bookingTypes";

export const DUMMY_TRIPS: TripOption[] = [
  { id: "prod_half_day", title: "Half-Day Charter", duration_hr: 4, start_time: "07:00:00", start_times: "07:00:00,13:00:00", price: 450, price_id: "price_half_day", currency: "usd", category: "Nearshore Fishing", is_popular: true },
  { id: "prod_full_day", title: "Full-Day Offshore", duration_hr: 8, start_time: "06:00:00", start_times: "06:00:00", price: 850, price_id: "price_full_day", currency: "usd", category: "Offshore Fishing", is_popular: false },
  { id: "prod_sunset", title: "Sunset Cruise", duration_hr: 2, start_time: "18:00:00", start_times: "18:00:00", price: 180, price_id: "price_sunset", currency: "usd", category: "Sunset Cruise", is_popular: false },
];

export function makeDummyBookingsForMonth(date: Date): Booking[] {
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
*/