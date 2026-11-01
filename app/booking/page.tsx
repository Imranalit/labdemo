import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Lab Test — HealthPlus Labs",
};

export default function BookingPage() {
  return (
    <main className="bg-[#f9fafc]">
      <div className="mx-auto flex flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:items-start lg:justify-center lg:px-20">
        <div className="max-w-xl">
          <h1 className="text-[46px] leading-[57px] tracking-[-1px]">
            Book Your <span className="text-[#e31b23]">Lab Test</span>
          </h1>
          <p className="mt-4 text-[20px] leading-[30px] text-[#111827]/70">
            Choose home sample collection or a visit to one of our 100+
            collection centres. Free cancellation up to 2 hours before your
            slot, and reports delivered within 24 hours.
          </p>
          <ul className="mt-10 flex flex-col gap-5">
            {[
              ["🕐", "Flexible slots", "Daily slots from 7 AM to 12 PM for home visits and walk-ins."],
              ["💳", "Pay after service", "Pay by card, cash or insurance — invoice with every report."],
              ["🔒", "Your data stays private", "Results are shared only through secure, verified links."],
            ].map(([icon, title, desc]) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  {icon}
                </span>
                <div>
                  <p className="font-semibold text-[#111827]">{title}</p>
                  <p className="text-sm text-[rgba(17,24,39,0.5)]">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-[500px]">
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
