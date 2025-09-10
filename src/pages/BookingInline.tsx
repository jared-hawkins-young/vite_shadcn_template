// src/pages/BookingInline.tsx
import { Helmet } from "react-helmet";
import CalendarToPay from "@/components/sections/CalendarToPay"; // you named it CalendarToPay.tsx
import type { EdgeEnv } from "@/lib/supabaseEdge";

export default function BookingInline() {
  // Single “door” env passed into the section
  const env: EdgeEnv = {
    tenantId: import.meta.env.VITE_TENANT_ID as string,
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL as string,
    supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  };

  // If keys aren’t wired, auto-fallback to dummy data so the page still works
  const useDummy =
    !env.supabaseUrl || !env.supabaseAnonKey || env.supabaseUrl === "" || env.supabaseAnonKey === "";

  return (
    <>
      <Helmet>
        <title>Book Now - Demo Template Booking System</title>
        <meta
          name="description"
          content="Book your appointment using our integrated booking system. Powered by our React TypeScript template with calendar scheduling functionality."
        />
        <link rel="canonical" href="https://demo-template.com/book-now" />
        <meta property="og:title" content="Book Now - Demo Template Booking System" />
        <meta property="og:description" content="Book your appointment using our integrated booking system. Powered by our React TypeScript template with calendar scheduling functionality." />
        <meta property="og:url" content="https://demo-template.com/book-now" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&q=80&auto=format&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <CalendarToPay
          env={env}
          useDummy={useDummy}                      // remove or set to false once keys are set
          onSuccessNavigateTo="/booking/success"   // existing success page
          onCancelNavigateTo="/booking/cancelled"  // existing cancel page
        />
      </div>
    </>
  );
}