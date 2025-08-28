// src/pages/BookingInline.tsx
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
    <div className="min-h-screen bg-background">
      <CalendarToPay
        env={env}
        useDummy={useDummy}                      // remove or set to false once keys are set
        onSuccessNavigateTo="/booking/success"   // existing success page
        onCancelNavigateTo="/booking/cancelled"  // existing cancel page
      />
    </div>
  );
}