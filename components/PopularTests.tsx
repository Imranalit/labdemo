"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES, TESTS } from "@/lib/data";

function CheckIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#fef2f2]">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#e31b23" strokeWidth="2">
        <path d="M2 6.5 4.5 9 10 3.5" />
      </svg>
    </span>
  );
}

export function TestCard({
  test,
}: {
  test: (typeof TESTS)[number];
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-white p-[25px] ${
        test.featured ? "border-[#e31b23]" : "border-[#e5e7eb]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-[60px] w-[60px] items-center justify-center rounded-xl border border-[#fdecee] bg-[#fef2f2] text-2xl">
          {test.icon}
        </span>
        {test.badge && (
          <span className="rounded-full bg-[#e31b23] px-2 py-1 text-[10px] font-medium tracking-[0.64px] text-white">
            {test.badge}
          </span>
        )}
      </div>
      <div className="pt-4">
        <h3 className="text-[22px] font-semibold leading-[30px] tracking-[1px] text-[#111827]">
          {test.name}
        </h3>
        <p className="mt-1 text-sm leading-[27px] text-[rgba(17,24,39,0.5)]">
          {test.description}
        </p>
      </div>
      <p className="pt-4 text-[26px] font-bold leading-9 text-[#111827]">
        AED {test.price}
      </p>
      <ul className="flex flex-col gap-2 pt-5">
        {test.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5">
            <CheckIcon />
            <span className="text-sm text-[rgba(17,24,39,0.5)]">{f}</span>
          </li>
        ))}
      </ul>
      <div className="pt-6">
        <Link
          href="/booking"
          className={`flex h-[46px] w-full items-center justify-center rounded-xl text-sm font-medium ${
            test.featured
              ? "bg-[#e31b23] text-white"
              : "border border-[#e5e7eb] bg-white text-[#111827] hover:bg-[#f9fafc]"
          }`}
        >
          Book Test
        </Link>
      </div>
    </div>
  );
}

export default function PopularTests() {
  const [cat, setCat] = useState("All");
  const visible =
    cat === "All" ? TESTS.slice(0, 3) : TESTS.filter((t) => t.category === cat).slice(0, 3);

  return (
    <section className="bg-[#fafafa] px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-[46px] leading-[57px] tracking-[-1px]">
              Popular <span className="text-[#e31b23]">Test</span>
            </h2>
            <p className="mt-4 text-[20px] leading-[30px] text-[#111827]/70">
              Clinically validated, fast turnaround diagnostics
            </p>
          </div>
          <Link href="/tests" className="flex items-center gap-2 text-sm font-medium text-[#e31b23]">
            View all tests
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`h-[38px] rounded-full px-4 text-sm ${
                cat === c
                  ? "bg-[#e31b23] font-medium text-white"
                  : "border border-[#e5e7eb] text-[#212529]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <TestCard test={t} key={t.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
