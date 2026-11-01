"use client";

import Image from "next/image";
import { useState } from "react";

const TIME_SLOTS = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [slot, setSlot] = useState("08:00 AM");
  const [done, setDone] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-2xl">
      <h4 className="text-[26px] font-semibold leading-10 tracking-[-1px] text-[#111827]">
        Book a Lab Test
      </h4>

      <form
        className="mt-3 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <div className="flex rounded-lg bg-[#f1f5f9] p-1">
          <div className="flex h-9 flex-1 items-center justify-center rounded-lg bg-white font-medium text-sm text-[#111827] shadow-sm">
            🏠 Home Collection
          </div>
          <div className="flex h-9 flex-1 items-center justify-center rounded-lg text-sm text-[rgba(17,24,39,0.5)]">
            🏥 Visit Centre
          </div>
        </div>

        <div className="flex gap-3">
          <label className="flex flex-1 flex-col gap-2">
            <span className="text-sm text-[#111827]">Full Name</span>
            <input
              required
              placeholder="Enter your name"
              className="h-[46px] rounded-lg border border-[#e5e7eb] px-4 text-sm outline-none focus:border-[#e31b23]"
            />
          </label>
          <label className="flex flex-1 flex-col gap-2">
            <span className="text-sm text-[#111827]">Number</span>
            <div className="relative">
              <span className="absolute left-0 top-0 flex h-[46px] w-[50px] items-center justify-center rounded-l-lg border-r border-[#e5e7eb] bg-[#f9fafc] text-sm text-[rgba(17,24,39,0.5)]">
                +971
              </span>
              <input
                required
                type="tel"
                placeholder="50 123 4567"
                className="h-[46px] w-full rounded-lg border border-[#e5e7eb] pl-16 pr-4 text-sm outline-none focus:border-[#e31b23]"
              />
            </div>
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm text-[#111827]">Choose Test</span>
          <div className="flex h-[46px] items-center gap-2 rounded-lg border border-[#e5e7eb] px-4 focus-within:border-[#e31b23]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              placeholder="Search CBC, Vitamin D, HbA1c..."
              className="w-full text-sm outline-none"
            />
          </div>
        </label>

        <div className="flex gap-3">
          <label className="flex flex-1 flex-col gap-2">
            <span className="text-sm text-[#111827]">City &amp; Date</span>
            <select className="h-[46px] rounded-lg border border-[#e5e7eb] px-4 text-sm text-[rgba(17,24,39,0.6)] outline-none focus:border-[#e31b23]">
              <option>Choose City</option>
              <option>Dubai</option>
              <option>Abu Dhabi</option>
              <option>Sharjah</option>
            </select>
          </label>
          <label className="flex flex-1 flex-col gap-2">
            <span className="text-sm text-transparent select-none">.</span>
            <input type="date" className="h-[46px] rounded-lg border border-[#e5e7eb] px-4 text-sm text-[rgba(17,24,39,0.6)] outline-none focus:border-[#e31b23]" />
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#111827]">Preferred Time</span>
          <div className="flex flex-wrap gap-3 pt-2">
            {TIME_SLOTS.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setSlot(t)}
                className={`h-[30px] rounded-lg border px-3 text-xs font-medium ${
                  slot === t
                    ? "border-transparent bg-[#fdecee] text-[#e31b23]"
                    : "border-[#e5e7eb] bg-[#f9fafc] text-[rgba(17,24,39,0.5)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-1 h-12 rounded-lg bg-[#e31b23] text-base font-medium tracking-[-0.32px] text-white opacity-90 transition hover:bg-[#d1141c] hover:opacity-100"
        >
          Book My Test
        </button>
        {done ? (
          <p className="text-center text-sm font-medium text-[#e31b23]">
            ✅ Request received — our team will call you shortly!
          </p>
        ) : (
          <p className="text-center text-sm text-[rgba(17,24,39,0.5)]">
            Free cancellation up to 2 hours before your slot
          </p>
        )}
      </form>
    </div>
  );
}
