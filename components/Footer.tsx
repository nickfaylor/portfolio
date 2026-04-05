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
          background: "linear-gradient(90deg, transparent, var(--color-accent), var(--color-accent-secondary), var(--color-accent), transparent)",
        }}
      />
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-[90px] py-6 flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <span
          className="text-white/60 text-center md:text-left text-[13px] md:text-[14px]"
          style={{ lineHeight: "1.5em" }}
        >
          © {year} Nicholas Faylor. All rights reserved.
        </span>
        <span
          className="text-white/40"
          style={{ fontSize: "12px", lineHeight: "1.5em" }}
        >

        </span>
      </div>
    </footer>
  );
}
