import Image from "next/image";
import { WHY_CARDS, WHY_POINTS } from "@/lib/data";

export function WhyStandOut() {
  return (
    <section className="mx-auto px-6 py-16 lg:px-20">
      <h2 className="text-[40px] font-semibold leading-tight tracking-[-1px] text-[#111827]">
        What Makes Us <span className="text-[#e31b23]">Stand Out</span>
      </h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CARDS.map((c) => (
          <div key={c.title} className="flex flex-col gap-6">
            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#fdecee] text-2xl">
              {c.icon}
            </span>
            <div>
              <h5 className="text-xl font-semibold text-[#111827]">{c.title}</h5>
              <p className="mt-2 max-w-[269px] text-sm leading-[27px] text-[rgba(17,24,39,0.5)]">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutHealthPlus() {
  return (
    <section className="mx-auto flex flex-col gap-8 px-6 py-16 lg:flex-row lg:px-20">
      <div className="relative min-h-[630px] flex-1 overflow-hidden rounded-2xl">
        <Image src="/images/hero-bg.png" alt="Scientist in Laboratory" fill className="object-cover" />
      </div>
      <div className="flex-[1.7] rounded-2xl bg-[#f9fafc] p-8">
        <h2 className="text-[40px] font-semibold leading-tight tracking-[-1px]">
          Why <span className="text-[#e31b23]">HealthPlus Labs?</span>
        </h2>
        <p className="mt-8 max-w-[742px] text-base leading-[30px] text-[rgba(17,24,39,0.6)]">
          Serving 500,000 patients annually, 100+ collection centres, labs, and
          clinics — you will need one smart way. Our services are offered by a
          highly trained medical team: experienced doctors, nurses,
          pharmacists, radiographers, midwives, and phlebotomist assistants. Our
          healthcare professionals provide comprehensive, advanced services for
          adults as well as children, ensuring patient-focused care that meets
          the highest standards.
        </p>
        <div className="mt-10 grid gap-x-6 gap-y-8 pt-4 sm:grid-cols-2">
          {WHY_POINTS.map((p) => (
            <div key={p.label} className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                {p.icon}
              </span>
              <p className="text-base text-[#111827]">{p.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdecee] text-lg">
            🏅
          </span>
          <div>
            <p className="font-semibold text-[#111827]">CAP Accredited</p>
            <p className="text-sm text-[rgba(17,24,39,0.5)]">
              College of American Pathologists certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  const stats = [
    { v: "500K+", l: "Patients Served" },
    { v: "100+", l: "Specialists" },
    { v: "CAP", l: "Accredited" },
    { v: "24 Hrs", l: "Report Delivery" },
  ];
  return (
    <section className="bg-[#111827] py-16">
      <div className="mx-auto px-6 lg:px-20">
        <h2 className="text-center text-[36px] font-semibold tracking-[-1px] text-white">
          Excellence in <span className="text-[#ff6b70]">Every Test</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-[56px] font-bold leading-[1] text-white">{s.v}</p>
              <p className="mt-3 text-base text-white/60">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
