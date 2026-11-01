import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, TESTS } from "@/lib/data";
import { TestCard } from "@/components/PopularTests";

export const metadata: Metadata = {
  title: "Lab Tests — HealthPlus Labs",
};

export default function TestsPage() {
  return (
    <main className="bg-[#fafafa]">
      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-20">
        <h1 className="text-[46px] leading-[57px] tracking-[-1px]">
          All <span className="text-[#e31b23]">Lab Tests</span>
        </h1>
        <p className="mt-4 text-[20px] leading-[30px] text-[#111827]/70">
          Clinically validated, fast turnaround diagnostics
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="h-[38px] rounded-full border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#212529]"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTS.map((t) => (
            <TestCard key={t.id} test={t} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-white p-8 text-center">
          <p className="text-lg text-[#111827]">
            Looking for a test that&apos;s not listed?{" "}
            <Link href="/contact" className="font-medium text-[#e31b23]">
              Contact us
            </Link>{" "}
            — we perform 200+ analyses in licensed partner laboratories.
          </p>
        </div>
      </section>
    </main>
  );
}
