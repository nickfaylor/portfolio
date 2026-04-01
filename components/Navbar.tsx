// Figma: Navbar — floating pill-shaped container overlaid on hero
// Left: "Download Resume" pill button
// Right: Home, About, Projects, Contact text links
// Full width, dark glass background, large border-radius

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-6 left-0 right-0 z-50 px-5">
      <div
        className="glass-card flex items-center justify-between"
        style={{
          borderRadius: "50px",
          padding: "12px 24px",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* Download Resume button */}
        <a
          href="/resume.pdf"
          download
          className="text-white font-medium transition-opacity hover:opacity-70"
          style={{
            background: "rgba(20, 20, 20, 0.9)",
            border: "1px solid rgba(217, 217, 217, 0.15)",
            borderRadius: "50px",
            padding: "10px 28px",
            fontSize: "15px",
            lineHeight: "1.4em",
            textDecoration: "none",
          }}
        >
          Download Resume
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-white/60 transition-colors"
              style={{ fontSize: "16px", lineHeight: "1.5em", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}