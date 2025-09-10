// src/pages/booking-success.tsx
import { Helmet } from "react-helmet";
import { BookingSuccessSection } from "@/components/sections/BookingSuccessSection";

export default function BookingSuccessPage() {
  return (
    <>
      <Helmet>
        <title>Booking Confirmed - Demo Template Success</title>
        <meta
          name="description"
          content="Your booking has been successfully confirmed. Thank you for choosing our demo template booking system."
        />
        <link rel="canonical" href="https://demo-template.com/booking/success" />
        <meta property="og:title" content="Booking Confirmed - Demo Template Success" />
        <meta property="og:description" content="Your booking has been successfully confirmed. Thank you for choosing our demo template booking system." />
        <meta property="og:url" content="https://demo-template.com/booking/success" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?w=1200&h=630&q=80&auto=format&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <BookingSuccessSection
        // optional overrides; otherwise it reads from import.meta.env and the URL
        onBookAnotherHref="/book-now"
        onHomeHref="/"
      />
    </>
  );
}