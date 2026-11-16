import SectionTitle from "../components/SectionTitle";

const skillGroups = [
  {
    name: "Languages",
    icon: "{ }",
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    name: "Web & Backend",
    icon: "⚙️",
    skills: ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "HTML5 / CSS3"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL"],
  },
  {
    name: "AI / ML",
    icon: "🧠",
    skills: ["PyTorch", "OpenCV", "scikit-learn", "NumPy", "LangChain", "Hugging Face Transformers", "Ollama"],
  },
  {
    name: "Testing & QA",
    icon: "✅",
    skills: ["Selenium", "TestNG", "Maven", "Extent Reports"],
  },
  {
    name: "Tools & Cloud",
    icon: "🛠",
    skills: ["Git", "GitHub", "Docker", "AWS (Cloud Essentials)", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle
          eyebrow="// tech stack"
          heading="Tools I work with"
          subtext="A curated set of technologies I've used in real projects — not just tutorials."
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
