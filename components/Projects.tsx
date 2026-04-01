// Figma: Projects Section — 1440×1322px, black bg
// "My Projects" heading at x:80 y:61 (Inter 700, 32px)
// Two groups: Development Projects (y:156) and Design Projects (y:742)
// Each group: glass-card container 1278×470, borderRadius 15px
// Inside: section title (Inter 700, 20px) + horizontally scrollable card row
// Project cards: 482px wide, column layout, gap 10px, padding 10px, borderRadius 15px
//   — image 462×236, title (Inter 400, 16px, centered)

const developmentProjects = [
  { title: "Movie Web App", image: null },
  { title: "Weather Web App", image: null },
  { title: "BDH Website", image: null },
  { title: "BDH Website", image: null },
];

const designProjects = [
  { title: "Mortuary Database Web App", image: null },
  { title: "SAB Website", image: null },
  { title: "Movie Web App", image: null },
  { title: "Product Subscription Web Page", image: null },
];

function ProjectCard({ title }: { title: string }) {
  return (
    <div
      className="glass-card flex-none flex flex-col"
      style={{
        width: "482px",
        borderRadius: "16px",
        padding: "10px",
        gap: "10px",
      }}
    >
      {/* Project image — replace with actual Next.js Image */}
      <div
        className="rounded-[10px] bg-[rgba(29,99,220,0.08)] flex items-center justify-center text-white/20 text-sm"
        style={{ width: "462px", height: "236px", flexShrink: 0 }}
      >
        Project Screenshot
      </div>
      <p
        className="text-white text-center"
        style={{ fontSize: "16px", lineHeight: "1.21em", width: "462px" }}
      >
        {title}
      </p>
    </div>
  );
}

function ProjectGroup({
  title,
  projects,
}: {
  title: string;
  projects: { title: string; image: null }[];
}) {
  return (
    <div
      className="glass-card-blue"
      style={{
        width: "1278px",
        minHeight: "470px",
        borderRadius: "20px",
        padding: "37px 16px 16px",
      }}
    >
      <h3
        className="text-white font-bold mb-[15px] accent-bar"
        style={{ fontSize: "20px", lineHeight: "1.21em" }}
      >
        {title}
      </h3>
      {/* Horizontally scrollable row of project cards */}
      <div
        className="flex gap-[24px] overflow-x-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(217,217,217,0.2) transparent",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} title={project.title} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-black" style={{ minHeight: "1322px" }}>
      <div className="mx-auto w-full max-w-[1440px] px-[80px] py-[61px]">
        {/* Heading */}
        <h2
          className="text-white font-bold mb-[95px] accent-bar"
          style={{ fontSize: "32px", lineHeight: "1.21em" }}
        >
          My Projects
        </h2>

        <div className="flex flex-col gap-[80px]">
          <ProjectGroup title="Development Projects" projects={developmentProjects} />
          <ProjectGroup title="Design Projects" projects={designProjects} />
        </div>
      </div>
    </section>
  );
}
