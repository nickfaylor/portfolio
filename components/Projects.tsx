// Figma: Projects Section — 1440×1322px, black bg
// "My Projects" heading at x:80 y:61 (Inter 700, 32px)
// Project cards: 482px wide, column layout, gap 10px, padding 10px, borderRadius 15px
//   — image 462×236, title (Inter 400, 16px, centered)

const projects = [
  {
    title: "Termometer",
    description:
      "A word association game where players guess a hidden word using semantic similarity scores powered by embeddings.",
    href: "https://termometer.app",
    image: "/images/termometer.png",
    tags: ["Next.js", "OpenAI", "LangChain", "Neon"],
  },
  {
    title: "FlashNote",
    description:
      "AI-powered flashcard generator that processes uploaded PDF/PPTX files, using embeddings and vector search for topic-based flashcard retrieval.",
    href: "https://github.com/nickfaylor",
    image: "/images/flashnote.png",
    tags: ["Next.js", "OpenAI", "LangChain", "Pinecone", "Firebase", "Clerk"],
  },
  {
    title: "Twitter Bot Detector",
    description:
      "A tool that identifies Twitter accounts' human legitimacy using trained ML algorithms on a dataset of labeled accounts.",
    href: "https://github.com/aross2010/twitter-bot-detector",
    image: "/images/twitterbot.png",
    tags: ["Next.js", "Flask", "TypeScript", "Random Forest Classifier", "Twikit"],
  }
];

function ProjectCard({
  title,
  description,
  href,
  image,
  tags,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
}) {
  return (
    <a // Conditionally render href only if it exists to avoid empty links
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card flex-none flex flex-col hover:border-[#1D63DC] transition-colors"
      style={{
        width: "482px",
        borderRadius: "16px",
        padding: "10px",
        gap: "10px",
        textDecoration: "none",
      }}
    >
      <img
        src={image}
        alt={`${title} screenshot`}
        className="rounded-[10px] object-cover"
        style={{ width: "462px", height: "236px", flexShrink: 0 }}
      />
      <div className="px-1 flex flex-col gap-2">
        <p
          className="text-white font-bold"
          style={{ fontSize: "16px", lineHeight: "1.21em" }}
        >
          {title}
        </p>
        <p
          className="text-white/60"
          style={{ fontSize: "13px", lineHeight: "1.5em" }}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-accent-secondary"
              style={{
                fontSize: "11px",
                lineHeight: "1.4em",
                background: "rgba(56, 189, 248, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: "4px",
                padding: "2px 7px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-black" style={{ minHeight: "700px" }}>
      <div className="mx-auto w-full max-w-[1440px] px-[90px] py-[61px]">
        {/* Heading */}
        <h2
          className="text-white font-bold mb-[60px] accent-bar"
          style={{ fontSize: "32px", lineHeight: "1.21em" }}
        >
          My Projects
        </h2>

        <div
          className="glass-card-blue"
          style={{
            width: "1278px",
            minHeight: "420px",
            borderRadius: "20px",
            padding: "37px 16px 16px",
          }}
        >
          <h3
            className="text-white font-bold mb-[15px] accent-bar"
            style={{ fontSize: "20px", lineHeight: "1.21em" }}
          >
            Development Projects
          </h3>
          <div
            className="flex gap-[24px] overflow-x-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(217,217,217,0.2) transparent",
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
