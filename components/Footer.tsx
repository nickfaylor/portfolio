// Footer — gradient top border using guardian blue accent

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black relative">
      {/* Guardian blue gradient top border */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, #1D63DC, #38bdf8, #1D63DC, transparent)",
        }}
      />
      <div className="mx-auto w-full max-w-[1440px] px-[90px] py-6 flex items-center justify-between">
        <span
          className="text-white/60"
          style={{ fontSize: "14px", lineHeight: "1.5em" }}
        >
          © {year} Your Name. All rights reserved.
        </span>
        <span
          className="text-white/40"
          style={{ fontSize: "12px", lineHeight: "1.5em" }}
        >
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
