import type { Metadata } from "next";
import { PACKAGES } from "@/lib/data";
import { PackagesSection } from "@/components/HomeSections";

export const metadata: Metadata = {
  title: "Health Packages — HealthPlus Labs",
};

export default function PackagesPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 pt-16 lg:px-20">
        <h1 className="text-[46px] leading-[57px] tracking-[-1px]">
          <span className="text-[#e31b23]">Health Packages</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[20px] leading-[30px] text-[#111827]/70">
          Transparent pricing, doctor-curated tests — complete screening bundles
          with up to 125 analyses and 24-hour report delivery.
        </p>
      </section>
      <PackagesSection />
    </main>
  );
}
