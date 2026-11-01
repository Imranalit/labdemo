import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — HealthPlus Labs",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f9fafc]">
      <section className="mx-auto grid max-w-[1100px] gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <h1 className="text-[46px] leading-[57px] tracking-[-1px]">
            Contact <span className="text-[#e31b23]">Us</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-[rgba(17,24,39,0.6)]">
            Questions about tests, reports, or corporate screening? Our care
            team responds within one business hour.
          </p>
          <div className="mt-10 flex flex-col gap-6">
            {[
              ["📞", "Call us", "+971 4 555 0123 · 24/7"],
              ["✉️", "Email", "care@healthpluslabs.ae"],
              ["📍", "Head office", "Sheikh Zayed Road, Dubai, UAE"],
              ["🕐", "Lab hours", "Mon–Sun · 6:00 AM – 11:00 PM"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  {icon}
                </span>
                <div>
                  <p className="font-semibold text-[#111827]">{title}</p>
                  <p className="text-sm text-[rgba(17,24,39,0.5)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="flex h-fit flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm">
          <label className="flex flex-col gap-2 text-sm">
            Full Name
            <input required className="h-[46px] rounded-lg border border-[#e5e7eb] px-4 text-sm outline-none focus:border-[#e31b23]" placeholder="Enter your name" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Email
            <input required type="email" className="h-[46px] rounded-lg border border-[#e5e7eb] px-4 text-sm outline-none focus:border-[#e31b23]" placeholder="you@example.com" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Phone
            <input type="tel" className="h-[46px] rounded-lg border border-[#e5e7eb] px-4 text-sm outline-none focus:border-[#e31b23]" placeholder="+971 50 123 4567" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Message
            <textarea required rows={5} className="rounded-lg border border-[#e5e7eb] p-4 text-sm outline-none focus:border-[#e31b23]" placeholder="How can we help?" />
          </label>
          <button type="submit" className="h-12 rounded-lg bg-[#e31b23] text-base font-medium text-white opacity-90 hover:opacity-100">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
