// src/components/sections/ContactForm.tsx
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ServiceOption = { value: string; label: string };

type Props = {
  heading?: string;
  subheading?: string;
  emailTo?: string;        // used for mailto fallback
  subjectPrefix?: string;  // used for mailto fallback
  services?: ServiceOption[]; // MUST NOT contain empty values
  onSubmit?: (data: {
    name: string;
    email: string;
    phone: string;
    service: string | undefined;
    message: string;
  }) => Promise<void> | void;
};

export function ContactForm({
  heading = "Send us a message",
  subheading = "We’ll get back within 1 business day",
  emailTo = "hello@example.com",
  subjectPrefix = "Website Inquiry",
  services,
  onSubmit,
}: Props) {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "error">(null);

  // Keep the Select controlled so we can post its value + avoid empty options
  const [service, setService] = useState<string | undefined>(undefined);

  const serviceOptions = useMemo<ServiceOption[]>(
    () =>
      services ?? [
        { value: "website", label: "Website Design & Hosting" },
        { value: "ai-email", label: "AI Email Agents" },
        { value: "ai-voice", label: "AI Voice Agents" },
        { value: "automation", label: "Business Automation" },
        { value: "marketing", label: "Digital Marketing Setup" },
        { value: "custom-software", label: "Custom Software Development" },
        { value: "database", label: "Database Management" },
        { value: "support", label: "Technical Support" },
        { value: "consultation", label: "General Consultation" },
      ],
    [services]
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(null);

    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const serviceVal = (fd.get("service") || "").toString() || service;
    const message = (fd.get("message") || "").toString().trim();
    const honey = (fd.get("company") || "").toString(); // honeypot

    if (!name || !email || !message) {
      setSent("error");
      return;
    }
    if (honey) return;

    const payload = { name, email, phone, service: serviceVal, message };

    try {
      setBusy(true);
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // mailto fallback
        const chosen =
          serviceOptions.find((s) => s.value === serviceVal)?.label || "General Inquiry";
        const subject = `${subjectPrefix} - ${chosen}`;
        const body = `Hello,

I'm interested in learning more about your services.

Name: ${name}
Email: ${email}
Phone: ${phone || "(not provided)"}
Service of Interest: ${chosen}

Message:
${message}

Best,
${name}`;
        const href = `mailto:${encodeURIComponent(emailTo)}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = href;
      }
      setSent("ok");
      (e.target as HTMLFormElement).reset();
      setService(undefined);
    } catch {
      setSent("error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="relative py-24">
      {/* soft gradient backdrop tied to theme */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden rounded-2xl border-0 bg-card/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md shadow-xl">
            {/* conic flourish */}
            <div
              className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30"
              style={{
                background:
                  "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))",
              }}
            />
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">
                {heading}
              </CardTitle>
              {subheading && (
                <p className="mt-2 text-muted-foreground">{subheading}</p>
              )}
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input name="company" autoComplete="off" className="hidden" tabIndex={-1} />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@email.com" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(919) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label>Service of Interest</Label>
                    {/* Hidden input to include the Select value in form data */}
                    <input type="hidden" name="service" value={service ?? ""} />
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>

                      {/* SOLID + SCROLLABLE dropdown for readability */}
                      <SelectContent className="bg-white dark:bg-slate-900 text-foreground dark:text-white max-h-60 overflow-y-auto shadow-xl border">
                        {serviceOptions.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value} // no empty values
                            className="focus:bg-accent focus:text-accent-foreground"
                          >
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project..."
                    className="resize-y"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Button type="submit" disabled={busy} className="shadow">
                    {busy ? "Sending..." : "Send Message"}
                  </Button>
                  {sent === "ok" && (
                    <span className="text-sm text-primary">Thanks! We’ll be in touch.</span>
                  )}
                  {sent === "error" && (
                    <span className="text-sm text-destructive">
                      Please complete required fields and try again.
                    </span>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------
   Example usage (copy into a page)
----------------------------------

import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <>
      <ContactForm
        heading="Get Your Free Consultation"
        subheading="Tell us what you need—responses within 1 business day."
        emailTo="Jahy81802@gmail.com"
        subjectPrefix="Lost Star Inquiry"
      />
    </>
  );
}

*/