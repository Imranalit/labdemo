"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/tests", label: "Tests" },
  { href: "/packages", label: "Health Packages" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#e5e7eb] bg-white">
      <div className="mx-auto flex h-20 items-center gap-12 px-6 lg:px-20">
        <Link href="/" className="flex h-10 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e31b23] text-lg font-bold text-white">
            H+
          </span>
          <span className="text-lg font-bold text-[#111827]">
            HealthPlus <span className="text-[#e31b23]">Labs</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-[0.2px] ${
                  active
                    ? "font-medium text-[#e31b23]"
                    : "text-[#111827] hover:text-[#e31b23]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-2 py-1">
            <span className="text-sm">🇦🇪</span>
            <span className="text-sm text-[#111827]">UAE</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-2 py-1">
            <span className="text-sm">🌐</span>
            <span className="text-sm text-[#111827]">EN</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <Link href="/login" className="rounded-lg px-4 py-2 text-base text-[#111827] hover:text-[#e31b23]">
            Login
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-[#2a2a2a] px-4 py-2 text-base text-white hover:bg-black"
          >
            Contact US
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-[#e5e7eb] lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-2 border-t border-[#e5e7eb] px-6 py-4 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm ${
                pathname === item.href
                  ? "bg-[#fdecee] font-medium text-[#e31b23]"
                  : "text-[#111827]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-[#2a2a2a] px-4 py-2 text-center text-white">
            Contact US
          </Link>
        </nav>
      )}
    </header>
  );
}
