// Figma: About Me Section — 1440×1013px, black bg
// "About Me" heading at x:99 y:58 (Inter 700, 32px)
// Bio text at x:99 y:124, 1240×172 (Inter 400, 16px, justified)
// Education card at y:378
// Skills grouped by category below

const infoCards = [
  {
    title: "Education",
    items: [
      "B.S. Software Engineering — San Jose State University",
      "GPA: 3.6 · Cum Laude · August 2021 – December 2025",
      "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Intro to AI, Object-Oriented Design, Operating Systems, Computer Networks",
    ],
  },
];

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "SpringBoot", "LangChain"],
  },
  {
    category: "AI & ML",
    skills: ["RAG Systems", "LLM Optimization", "Embeddings", "Vector Databases", "MCP", "Agentic Workflows", "Context Engineering"],
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS (Bedrock, Athena, S3)", "PostgreSQL", "Docker", "REST APIs", "Git", "Claude Code"],
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-black" style={{ minHeight: "1013px" }}>
      <div className="mx-auto w-full max-w-[1440px] px-[90px] py-[58px]">
        {/* Heading */}
        <h2
          className="text-white font-bold mb-[66px] accent-bar"
          style={{ fontSize: "32px", lineHeight: "1.21em" }}
        >
          About Me
        </h2>

        {/* Bio text */}
        <p
          className="text-white mb-[154px]"
          style={{
            fontSize: "16px",
            lineHeight: "1.6875em",
            textAlign: "justify",
            maxWidth: "1240px",
          }}
        >
          I&apos;m a software engineer with a B.S. in Software Engineering from San Jose State University.
          My work spans <strong>full-stack web development</strong>, with a strong focus on <strong>AI integration</strong>.
          I&apos;m especially interested in building <strong>AI-native applications</strong> — designing{" "}
          <strong>agentic workflows</strong>, implementing <strong>RAG systems</strong>, and integrating{" "}
          <strong>LLMs</strong> into production products.
        </p>

        {/* Education card */}
        <div className="mb-[77px]" style={{ maxWidth: "1278px" }}>
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="glass-card-blue"
              style={{ borderRadius: "16px", padding: "20px 17px" }}
            >
              <h3
                className="text-white font-bold mb-3"
                style={{ fontSize: "20px", lineHeight: "1.21em" }}
              >
                {card.title}
              </h3>
              <ul className="text-white space-y-1">
                {card.items.map((item) => (
                  <li
                    key={item}
                    style={{ fontSize: "16px", lineHeight: "1.6em" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills & Technologies label */}
        <h3
          className="text-white font-bold mb-6 accent-bar"
          style={{ fontSize: "20px", lineHeight: "1.21em" }}
        >
          Skills &amp; Technologies
        </h3>

        {/* Skills grouped by category — 2×2 grid */}
        <div className="grid grid-cols-2 gap-5" style={{ maxWidth: "1248px" }}>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card-blue"
              style={{ borderRadius: "12px", padding: "18px 20px" }}
            >
              <h4
                className="text-[#38bdf8] font-bold mb-3"
                style={{ fontSize: "13px", lineHeight: "1.4em", textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-white font-medium"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.4em",
                      background: "rgba(29,99,220,0.15)",
                      border: "1px solid rgba(29,99,220,0.35)",
                      borderRadius: "6px",
                      padding: "4px 10px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
