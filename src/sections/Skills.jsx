import SectionTitle from "../components/SectionTitle";

const skillGroups = [
  {
    name: "Languages",
    icon: "{ }",
    skills: ["Java", "Python", "C"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["Spring Boot", "Node.js", "REST APIs"],
  },
  {
    name: "Testing & QA",
    icon: "✅",
    skills: ["Selenium", "TestNG", "JUnit", "Postman"],
  },
  {
    name: "Database",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "SQL"],
  },
  {
    name: "AI / ML",
    icon: "🧠",
    skills: ["OpenCV", "Transformers", "NumPy", "scikit-learn"],
  },
  {
    name: "Tools & DevOps",
    icon: "🛠",
    skills: ["Git", "Maven", "GitHub Actions", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle
          eyebrow="// tech stack"
          heading="Tools I work with"
          subtext="A curated set of technologies I've shipped real projects with — not just tutorials."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.name} className="skill-group">
              <div className="skill-group-header">
                <div className="skill-group-icon">{group.icon}</div>
                <span className="skill-group-name">{group.name}</span>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
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
