// Figma: Hero Section — 1440×814px, black bg
// Navbar overlaid at top (absolute, pill-shaped glass container)
// Name text at x:90 y:273, bio at y:366, "Hire Me" button at y:521, social icons at y:661
// Profile circle (551×552) on right side at x:788, with blurred gray ellipse behind it

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-black overflow-hidden" style={{ minHeight: "814px" }}>
      <Navbar />
      {/* Decorative blurred ellipse behind profile photo */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          right: "calc(50% - 767px + (1440px - 100%) / 2)",
          top: "170px",
          width: "593px",
          height: "593px",
          background: "linear-gradient(180deg, rgba(20,50,120,0.85) 3%, rgba(29,99,220,0.55) 100%)",
          filter: "blur(45px)",
          opacity: 0.6,
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[90px]" style={{ minHeight: "814px" }}>
        {/* Profile photo — right side */}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            right: "90px",
            top: "191px",
            width: "551px",
            height: "552px",
            boxShadow: "0 0 80px rgba(29, 99, 220, 0.35)",
          }}
        >
          {/* Replace with your actual profile photo */}
          <div className="w-full h-full bg-[rgba(39,39,39,0.83)] flex items-center justify-center text-white/30 text-sm">
            Profile Photo
          </div>
        </div>

        {/* Text content */}
        <div className="absolute" style={{ top: "273px", left: "90px", width: "617px" }}>
          <h1
            className="text-white font-bold uppercase leading-tight accent-bar"
            style={{ fontSize: "48px", lineHeight: "1.21em" }}
          >
            Your Name Here
          </h1>
          <p
            className="text-white mt-[35px]"
            style={{ fontSize: "16px", lineHeight: "1.6875em", width: "615px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar eget eros vel ultricies. Curabitur aliquam lacinia enim,
            quis maximus diam malesuada ac. Sed maximus orci malesuada,
            dignissim ligula sit amet.
          </p>
        </div>

        {/* Hire Me button */}
        <a
          href="#contact"
          className="absolute btn-blue flex items-center justify-center hover:opacity-85 transition-opacity"
          style={{
            top: "521px",
            left: "82px",
            width: "168px",
            height: "47px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            lineHeight: "2em",
            textDecoration: "none",
          }}
        >
          Hire Me
        </a>

        {/* Social icons */}
        <div
          className="absolute flex items-center gap-[91px]"
          style={{ bottom: "131px", left: "90px" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="text-white hover:text-[#38bdf8] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
