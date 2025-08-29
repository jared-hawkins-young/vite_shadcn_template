// src/pages/booking-success.tsx
import { BookingSuccessSection } from "@/components/sections/BookingSuccessSection";
export default function BookingSuccessPage() {
  return (
    <BookingSuccessSection
      // optional overrides; otherwise it reads from import.meta.env and the URL
      onBookAnotherHref="/book-now"
      onHomeHref="/"
    />
  );
}