// Footer — inferred from design pattern (rate-limited before fetching)
// Matches the dark/glass aesthetic of the rest of the site

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-black border-t"
      style={{ borderColor: "rgba(217, 217, 217, 0.13)" }}
    >
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
