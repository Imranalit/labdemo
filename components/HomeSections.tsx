import Link from "next/link";
import { PROCESS_STEPS, FAQS, PACKAGES } from "@/lib/data";

export function PackagesSection() {
  return (
    <section className="px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2 className="text-[46px] leading-[57px] tracking-[-1px]">
            Popular <span className="text-[#e31b23]">Health Package</span>
          </h2>
          <p className="mt-4 text-[20px] leading-[30px] text-[#111827]/70">
            Transparent pricing, doctor-curated tests — company savings
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col rounded-2xl p-6 ${
                p.featured
                  ? "border-2 border-[#e31b23] bg-[#fff7f7] shadow-lg"
                  : "border border-[#e5e7eb] bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#111827]">{p.name}</h3>
                  <p className="mt-1 text-sm text-[rgba(17,24,39,0.5)]">{p.description}</p>
                </div>
                <span className="text-3xl">{p.icon}</span>              </div>
              <div className="mt-6 flex items-end gap-3">
                <p className="text-[32px] font-bold leading-9 text-[#111827]">AED {p.price}</p>
                <p className="pb-1 text-sm text-[rgba(17,24,39,0.5)]">
                  {p.testsIncluded} tests
                </p>
              </div>
              {p.tag && (
                <span className="mt-2 w-fit rounded-full bg-[#e31b23] px-3 py-1 text-[10px] font-medium tracking-[0.64px] text-white">
                  {p.tag}
                </span>
              )}
              <ul className="mt-5 flex flex-col gap-2">
                {p.tests.slice(0, 4).map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#fef2f2]">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#e31b23" strokeWidth="2">
                        <path d="M2 6.5 4.5 9 10 3.5" />
                      </svg>
                    </span>
                    <span className="text-sm text-[rgba(17,24,39,0.5)]">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="flex-1" />
              <Link
                href="/booking"
                className={`mt-6 flex h-[46px] w-full items-center justify-center rounded-xl text-sm font-medium ${
                  p.featured
                    ? "bg-[#e31b23] text-white"
                    : "border border-[#e5e7eb] bg-white text-[#111827] hover:bg-[#f9fafc]"
                }`}
              >
                See Package →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-[#f9fafc] px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-[40px] font-semibold tracking-[-1px]">
          Our Laboratory <span className="text-[#e31b23]">Process</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[#111827]/60">
          From booking your appointment to receiving your report — every step is
          designed for accuracy, safety, and speed.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                {s.icon}
              </div>
              <span className="absolute -top-2 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#e31b23] text-xs font-semibold text-white">
                {i + 1}
              </span>
              <h4 className="mt-5 text-base font-semibold text-[#111827]">{s.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[rgba(17,24,39,0.5)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="mx-auto px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="text-center text-[40px] font-semibold tracking-[-1px]">
          Frequently <span className="text-[#e31b23]">asked questions</span>
        </h2>
        <p className="mt-4 text-center text-[#111827]/60">
          Can&apos;t find what you&apos;re looking for? Ask our support team.
        </p>
        <div className="mt-10 flex flex-col gap-4">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl border border-[#e5e7eb] bg-white px-6 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-[#111827]">
                {f.q}
                <span className="text-[#e31b23] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-[rgba(17,24,39,0.5)]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="px-6 pb-20 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 rounded-3xl bg-[#e31b23] px-8 py-12 text-white lg:flex-row lg:px-16">
        <div>
          <h2 className="text-[36px] font-semibold leading-tight tracking-[-1px]">
            Ready to <span className="font-bold">Book Your Lab Test?</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/80">
            Book lab appointments online in under two minutes — with accurate
            results delivered within 24 hours to patients across the GCC.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#e31b23]"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-medium text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <ul className="flex flex-col gap-4 text-sm">
          {[
            "Home sample collection",
            "Certified labs & pathologists",
            "24-hour report delivery",
            "Free cancellation up to 2 hours",
          ].map((t) => (
            <li key={t} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
