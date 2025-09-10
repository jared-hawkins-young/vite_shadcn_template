// src/pages/booking-cancelled.tsx
import { Helmet } from "react-helmet";
import { BookingCancelledSection } from "@/components/sections/BookingCancelledSection";

export default function BookingCancelledPage() {
  return (
    <>
      <Helmet>
        <title>Booking Cancelled - Demo Template</title>
        <meta
          name="description"
          content="Your booking was cancelled. You can try again or return to our homepage to explore other options."
        />
        <link rel="canonical" href="https://demo-template.com/booking/cancelled" />
        <meta property="og:title" content="Booking Cancelled - Demo Template" />
        <meta property="og:description" content="Your booking was cancelled. You can try again or return to our homepage to explore other options." />
        <meta property="og:url" content="https://demo-template.com/booking/cancelled" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&q=80&auto=format&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <BookingCancelledSection tryAgainHref="/book-now" homeHref="/" />
    </>
  );
}