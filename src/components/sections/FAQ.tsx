// src/components/sections/FAQ.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import type { ComponentType, SVGProps } from "react";

export type IconName = keyof typeof Icons | string;

export type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

type FAQProps = {
  heading?: string;
  supportLinkHref?: string;
  items: FAQItem[];
};

function DynamicIcon({ name, className }: { name: IconName; className?: string }) {
  // normalize: "clock" | "Clock" → "Clock"
  const key =
    typeof name === "string" && name.length
      ? (name.slice(0, 1).toUpperCase() + name.slice(1)) as keyof typeof Icons
      : ("HelpCircle" as keyof typeof Icons);

  // Safely index into Icons and coerce to a React component
  const MaybeIcon =
    ((Icons as unknown) as Record<string, ComponentType<SVGProps<SVGSVGElement>>>)[key as string] ??
    (Icons as unknown as Record<string, ComponentType<SVGProps<SVGSVGElement>>>).HelpCircle;

  return <MaybeIcon className={className} aria-hidden="true" />;
}

export function FAQ({
  heading = "Frequently Asked Questions",
  supportLinkHref = "/contact",
  items,
}: FAQProps) {
  return (
    <section className="relative py-24">
      {/* soft theme glow behind the section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[80vw] h-[40vw] rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, hsl(var(--primary)/.22), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {/* Left sticky intro */}
          <div className="md:w-1/3">
            <div className="md:sticky md:top-24">
              <h2 className="mt-4 text-3xl font-bold text-foreground">{heading}</h2>
              <p className="text-muted-foreground mt-4">
                Can&apos;t find what you&apos;re looking for? Contact our{" "}
                <Link to={supportLinkHref} className="text-primary font-medium hover:underline">
                  customer support team
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right accordion */}
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((item) => (
                <ShinyItem key={item.id} item={item} />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShinyItem({ item }: { item: FAQItem }) {
  return (
    <div className="group relative">
      {/* gradient ring wrapper for pop */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)/.55), hsl(var(--accent)/.45))",
        }}
      />
      {/* card container with lift + shadow */}
      <div className="relative rounded-2xl bg-card/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
        {/* accent rail */}
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-primary to-accent" />

        {/* subtle sheen on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,.10), transparent 40%)",
          }}
        />

        {/* inner radial glow */}
        <div
          className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "conic-gradient(from 180deg, hsl(var(--primary)/.30), hsl(var(--accent)/.30))",
          }}
        />

        {/* the actual accordion item */}
        <AccordionItem value={item.id} className="border-0">
          <AccordionTrigger className="px-6 py-5 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <span
                className="w-8 h-8 rounded-xl grid place-items-center text-primary-foreground shadow"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                }}
              >
                <DynamicIcon name={item.icon} className="size-4" />
              </span>
              <span className="text-base font-medium text-foreground">{item.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="pl-6 pr-6 md:pl-17">
              <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </div>
    </div>
  );
}