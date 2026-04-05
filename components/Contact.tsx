// Figma: Contact Me Section — 1440×297px, black bg
// "Contact Me" heading at x:81 y:46 (Inter 700, 32px)
// Contact cards in a row starting at y:124, each with icon (57×57) + text
// Card layout: row, alignItems center, gap 32px, padding 10px 15px, borderRadius 5px
// Card fill: glass-card, border rgba(217,217,217,0.13)
// Email text: Inter 500, 32px

const contactItems = [
  {
    label: "Email",
    value: "nicholasfaylor2003@gmail.com",
    href: "mailto:nicholasfaylor2003@gmail.com",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nicholas-faylor",
    href: "https://linkedin.com/in/nicholas-faylor",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/nickfaylor",
    href: "https://github.com/nickfaylor",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-black" style={{ minHeight: "297px" }}>
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-[90px] py-[46px]">
        {/* Heading */}
        <h2
          className="text-white font-bold mb-[60px] accent-bar text-[26px] md:text-[32px]"
          style={{ lineHeight: "1.21em" }}
        >
          Contact Me
        </h2>

        {/* Contact cards — 2-column grid for symmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth: "1278px" }}>
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass-card-blue flex items-center gap-4 md:gap-5 px-4 py-3 md:px-5 md:py-4 rounded-[12px] hover:opacity-90 transition-opacity no-underline"
              style={{ textDecoration: "none" }}
            >
              <span className="text-accent-secondary flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
                {item.icon}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-white/50 font-medium" style={{ fontSize: "11px", lineHeight: "1.4em", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {item.label}
                </span>
                <span
                  className="text-white font-medium text-[14px] md:text-[18px] break-all"
                  style={{ lineHeight: "1.4em" }}
                >
                  {item.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
