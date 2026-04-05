// Figma: About Me Section — 1440×auto, black bg
// "About Me" heading at x:90 y:60 (Space Grotesk 700, 32px)
// Two-column row: My Work (left) | My Personal (right), equal width, gap 60px
// Education card + Skills grid below, full width
import { GiGuitar } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { BiDumbbell } from "react-icons/bi";
import { MdSchool } from "react-icons/md";


const infoCards = [
  {
    title: "Education",
    items: [
      <><strong className="text-accent-secondary">B.S. Software Engineering</strong> — San Jose State University</>,
      <>GPA: <strong className="text-accent-secondary">3.6</strong> · <strong className="text-accent-secondary">Cum Laude</strong> · August 2021 – December 2025</>,
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Intro to AI",
      "Object-Oriented Design",
      "Operating Systems",
      "Computer Networks",
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

const personalCards = [
  {
    title: "Music & Guitar",
    icon: GiGuitar,
    body: <>Guitar-playing is my main creative outlet, as I have <strong className="text-accent-secondary">9+ years</strong> of experience playing and writing music. I&apos;m a <strong className="text-accent-secondary">blues guitar</strong> player first, but I also enjoy mixing in elements of <strong className="text-accent-secondary">jazz, rock, fusion, and country</strong>.</>,
  },
  {
    title: "Creative Development",
    icon: FaCode,
    body: <>I&apos;m drawn to the intersection of <strong className="text-accent-secondary">technical craft</strong> and unique problem-solving through creative development. Learning software engineering has allowed me to bring life to unique ideas that I have, constantly pushing me to build the <strong className="text-accent-secondary">best products</strong> I can.</>,
  },
  {
    title: "Fitness",
    icon: BiDumbbell,
    body: <><strong className="text-accent-secondary">Weight training</strong> and fitness have been a huge part of my daily life for many years. It is one of my biggest hobbies and passions.</>,
  },
];

export default function About() {
  return (
    <section id="about" className="w-full bg-black">
      <div className="mx-auto w-full max-w-[1440px] px-[90px] py-[60px]">
        {/* Heading */}
        <h2
          className="text-white font-bold mb-[60px] accent-bar"
          style={{ fontSize: "32px", lineHeight: "1.21em" }}
        >
          About Me
        </h2>

        {/* Two-column row */}
        <div className="flex gap-[60px] mb-[60px]">
          {/* Left: My Work */}
          <div className="flex-1 flex flex-col">
            <h3
              className="text-white font-bold mb-[24px] accent-bar"
              style={{ fontSize: "20px", lineHeight: "1.21em" }}
            >
              My Work
            </h3>
            <div className="flex flex-col gap-5">
              <p
                className="text-white"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.6875em",
                  textAlign: "justify",
                }}
              >
                I&apos;m a <strong className="text-accent-secondary">software engineer</strong> with a B.S. in Software Engineering.
                My work spans <strong className="text-accent-secondary">full-stack web development</strong> with a strong focus on <strong className="text-accent-secondary">AI integration. </strong>
                My experience includes <strong className="text-accent-secondary">AI-native product design</strong>: architecting <strong className="text-accent-secondary">agentic workflows</strong>, implementing <strong className="text-accent-secondary">RAG pipelines</strong>, and applying <strong className="text-accent-secondary">context engineering</strong> to ship LLM-powered features.
                I am most interested at the intersection between creativity and AI-engineering, enforcing a strong curiousity about how AI integrates into the best products.
              </p>
              <div
                className="glass-card-blue"
                style={{ borderRadius: "12px", padding: "18px 20px" }}
              >
                <h4
                  className="text-accent-secondary font-bold mb-3 flex items-center gap-1.5"
                  style={{ fontSize: "13px", lineHeight: "1.4em", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  <MdSchool size={15} />
                  Education
                </h4>
                <ul className="text-white space-y-1 mb-3">
                  {infoCards[0].items.map((item, i) => (
                    <li key={i} style={{ fontSize: "14px", lineHeight: "1.6em" }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  className="text-white/50 font-medium mb-2"
                  style={{ fontSize: "11px", lineHeight: "1.4em", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {infoCards[0].coursework.map((course) => (
                    <span
                      key={course}
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
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: My Personal */}
          <div className="flex-1 flex flex-col">
            <h3
              className="text-white font-bold mb-[24px] accent-bar"
              style={{ fontSize: "20px", lineHeight: "1.21em" }}
            >
              My Personal
            </h3>
            <div className="flex flex-col gap-5">
              {personalCards.map((card) => (
                <div
                  key={card.title}
                  className="glass-card-blue"
                  style={{ borderRadius: "12px", padding: "18px 20px" }}
                >
                  <h4
                    className="text-accent-secondary font-bold mb-3 flex items-center gap-1.5"
                    style={{ fontSize: "13px", lineHeight: "1.4em", textTransform: "uppercase", letterSpacing: "0.08em" }}
                  >
                    <card.icon size={15} />
                    {card.title}
                  </h4>
                  <p
                    className="text-white"
                    style={{ fontSize: "14px", lineHeight: "1.6em" }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
                className="text-accent-secondary font-bold mb-3"
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
