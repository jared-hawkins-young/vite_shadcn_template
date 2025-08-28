// src/lib/bookingTypes.ts

export interface TripOption {
  id: string;                 // product_id from Stripe
  title: string;
  duration_hr: number;
  start_time: string;         // first start time (UI compatibility)
  start_times?: string;       // all start times from metadata
  price: number;              // dollars (UI)
  price_id: string;           // Stripe price id
  currency: string;
  category: string;
  is_popular: boolean;
  stripe_payment_link?: string;
}

export interface Booking {
  id: string;
  booking_date: string;       // YYYY-MM-DD
  trip_option_id: string;     // product id OR "google-calendar"
  start_time: string;         // HH:mm:ss
  customer_name: string;
  status: string;             // confirmed | pending_payment
}

export interface CalendarEvent { id: string; title: string; start: string; end?: string }
export interface DayData { events?: CalendarEvent[] }
export interface AvailabilityData { [dateString: string]: DayData }