export default function AnnouncementBar() {
  return (
    <div className="bg-[#e31b23] px-[60px] py-3 text-white">
      <div className="mx-auto flex max-w-[1320px] items-center justify-center gap-4">
        <p className="text-sm tracking-[0.2px]">
          🎉 Complete Health Check Package • 75+ Tests from{" "}
          <span className="font-semibold">AED 290</span>
        </p>
        <a
          href="/booking"
          className="rounded border border-[#e5e7eb] bg-white px-2 py-1 text-[10px] font-medium text-[#111827]"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
