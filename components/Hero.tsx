import Image from "next/image";
import BookingForm from "./BookingForm";

const STATS = [
  { value: "24-Hour", label: "Report Delivery" },
  { value: "100+", label: "Expert Specialists" },
  { value: "CAP", label: "Accredited" },
  { value: "50+", label: "Lab Tests" },
];

export default function Hero() {
  return (
    <section className="flex min-h-[820px] w-full flex-col lg:flex-row">
      <div className="relative flex-1 overflow-hidden bg-[#2a2a2a]">
        <Image
          src="/images/hero-scientist.png"
          alt="Scientist in laboratory"
          fill
          priority
          className="object-cover object-bottom"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(106deg, rgb(224,32,41) 14.4%, rgba(230,74,81,0.81) 62%, rgba(230,74,81,0) 91%)",
          }}
        />
        <div className="relative flex h-full flex-col px-8 pb-[60px] pt-20 lg:px-20">
          <div className="max-w-[596px]">
            <p className="text-[20px] leading-[30px] text-white">
              Trusted by 500,000+ Patients Across GCC
            </p>
            <h1 className="mt-6 text-[60px] font-bold leading-[66px] tracking-[-1.5px] text-white">
              Accurate Diagnostics.
              <br />
              Trusted Healthcare.
            </h1>
            <p className="mt-8 max-w-[537px] text-[20px] leading-[30px] text-white lg:text-xl">
              Book laboratory tests, comprehensive health packages, and home
              sample collection with fast turnaround times and internationally
              accredited diagnostic services.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-8 pt-8">
            {STATS.map((s) => (
              <div key={s.label} className="min-w-[136px]">
                <p className="text-[24px] font-semibold leading-8 text-white">{s.value}</p>
                <p className="pt-0.5 text-[14px] leading-[27px] tracking-[0.2px] text-white/90">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-6 pt-12">
            <a
              href="/tests"
              className="flex h-[60px] w-full max-w-[230px] items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-medium tracking-[-0.32px] text-[#111827]"
            >
              Find Your Test
            </a>
            <a
              href="/packages"
              className="flex h-[60px] w-full max-w-[234px] items-center justify-center gap-3 rounded-2xl bg-[#2a2a2a] px-8 py-4 text-base font-medium tracking-[-0.32px] text-white"
            >
              Explore Health Packages
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 pt-10">
            <p className="text-[14px] leading-[27px] tracking-[0.2px] text-white">
              Accredited by
            </p>
            <div className="flex items-center gap-2">
              <Image src="/images/acc-1.png" alt="CAP accreditation" width={104} height={46} className="rounded" />
              <Image src="/images/acc-2.png" alt="ISO accreditation" width={96} height={46} className="rounded" />
              <Image src="/images/acc-3.png" alt="FDA accreditation" width={71} height={46} className="rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-start justify-end bg-black/20 px-6 py-10 lg:bg-transparent lg:pr-12 lg:pt-10">
        <div className="w-full max-w-[500px]">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
