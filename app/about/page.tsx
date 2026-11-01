import type { Metadata } from "next";
import { STATS, WHY_POINTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — HealthPlus Labs",
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-20">
        <h1 className="text-[46px] leading-[57px] tracking-[-1px]">
          Why <span className="text-[#e31b23]">HealthPlus Labs?</span>
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[rgba(17,24,39,0.6)]">
          Serving 500,000 patients annually across 100+ collection centres, labs,
          and clinics — our services are delivered by a highly trained medical
          team: experienced doctors, nurses, pharmacists, radiographers,
          midwives, and phlebotomists. Our healthcare professionals provide
          comprehensive, advanced diagnostic services for adults as well as
          children, ensuring patient-focused care that meets the highest
          international standards.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-[#f9fafc] p-6 text-center">
              <p className="text-[40px] font-bold text-[#e31b23]">{s.value}</p>
              <p className="mt-2 text-sm text-[rgba(17,24,39,0.5)]">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map((p) => (
            <div key={p.label} className="rounded-2xl border border-[#e5e7eb] p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdecee] text-xl">
                {p.icon}
              </span>
              <p className="mt-4 font-medium text-[#111827]">{p.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-8 rounded-2xl bg-[#111827] p-8">
          <p className="text-lg font-medium text-white">Internationally accredited by</p>
          <span className="rounded bg-white px-4 py-2 text-sm font-semibold text-[#111827]">
            CAP
          </span>
          <span className="rounded bg-white px-4 py-2 text-sm font-semibold text-[#111827]">
            ISO 15189
          </span>
          <span className="rounded bg-white px-4 py-2 text-sm font-semibold text-[#111827]">
            FDA Assured
          </span>
        </div>
      </section>
    </main>
  );
}
