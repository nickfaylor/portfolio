// Figma: About Me Section — 1440×1013px, black bg
// "About Me" heading at x:99 y:58 (Inter 700, 32px)
// Bio text at x:99 y:124, 1240×172 (Inter 400, 16px, justified)
// Three info cards at y:378 (Education, Certifications) and y:661 (Skills grid row)
// Skills grid at x:96 y:738, 1248×144 — 11 cards, each 98×144 (icon + label)

const skills = [
  { name: "HTML", bg: "#E34F26" },
  { name: "CSS", bg: "#1572B6" },
  { name: "JavaScript", bg: "#F7DF1E" },
  { name: "React", bg: "#61DAFB" },
  { name: "Tailwind CSS", bg: "#06B6D4" },
  { name: "Bootstrap", bg: "#7952B3" },
  { name: "Git", bg: "#F05032" },
  { name: "Figma", bg: "#F24E1E" },
  { name: "Adobe XD", bg: "#FF61F6" },
  { name: "Illustrator", bg: "#FF9A00" },
  { name: "Photoshop", bg: "#31A8FF" },
];

const infoCards = [
  {
    title: "Education",
    items: [
      "Diploma in Information Technology",
      "National Senior Certificate [Grade 12/Matric]",
    ],
  },
  {
    title: "Certifications & Courses",
    items: [
      "Front-End Web Development Program",
      "Web Programming Foundations [LinkedIn]",
      "HTML Essential Training [LinkedIn]",
      "JavaScript Essentials [Cisco]",
      "Professional Foundations [ALX Africa]",
    ],
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
          I&apos;m a passionate Frontend Developer &amp; UI/UX Designer with expertise in React,
          JavaScript, and Tailwind CSS, dedicated to building responsive and user-friendly
          applications. I have experience in web development, UI/UX design, and IT support. I
          enjoy transforming ideas into digital experiences, whether through intuitive UI designs
          in Figma or developing scalable web applications. Currently, I&apos;m expanding my
          knowledge in React Native and working on projects that merge creativity with
          functionality to solve real-world problems.
        </p>

        {/* Education & Certifications cards */}
        <div className="grid grid-cols-2 gap-[120px] mb-[77px]" style={{ maxWidth: "1278px" }}>
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
                    style={{ fontSize: "16px", lineHeight: "1.21em" }}
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

        {/* Skills grid */}
        <div className="flex flex-wrap gap-4" style={{ maxWidth: "1248px" }}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card flex flex-col items-center justify-between hover:border-[#1D63DC] transition-colors"
              style={{
                width: "98px",
                height: "144px",
                borderRadius: "10px",
                padding: "10px 5px",
              }}
            >
              {/* Icon placeholder — replace with actual SVG/Image */}
              <div
                className="rounded"
                style={{
                  width: "65px",
                  height: "65px",
                  background: skill.bg,
                  opacity: 0.85,
                }}
              />
              <span
                className="text-white font-bold text-center"
                style={{ fontSize: "12px", lineHeight: "1.21em" }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
