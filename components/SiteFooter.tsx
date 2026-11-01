import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Lab Tests", href: "/tests" },
      { label: "Health Packages", href: "/packages" },
      { label: "Home Sample Collection", href: "/booking" },
      { label: "Corporate Screening", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Labs", href: "/about" },
      { label: "Accreditations", href: "/about" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/#" },
      { label: "Report Download", href: "/#" },
      { label: "Booking", href: "/booking" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto grid gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-20">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e31b23] text-lg font-bold">
              H+
            </span>
            <span className="text-lg font-bold">
              HealthPlus <span className="text-[#ff6b70]">Labs</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            Accurate diagnostics, trusted healthcare. Over 50 lab tests, 75+
            tests per health package, and 24-hour report delivery across 100+
            collection centres.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-white/60">
            <span>📞 +971 4 555 0123</span>
            <span>✉️ care@healthpluslabs.ae</span>
            <span>📍 Dubai — Abu Dhabi — Sharjah</span>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {col.title}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row lg:px-20">
          <span>© 2026 HealthPlus Labs. All rights reserved.</span>
          <span>CAP accredited • ISO 15189 • FDA Assured</span>
        </div>
      </div>
    </footer>
  );
}
