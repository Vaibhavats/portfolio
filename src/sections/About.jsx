import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-avatar">
            <span className="about-initials">VK</span>
          </div>
          <div className="about-badge-floating">
            <span className="badge-icon">🎓</span>
            <div>
              <div className="badge-text">Graduating 2027</div>
              <div className="badge-sub">Internships / Full-time</div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <SectionTitle
            eyebrow="// about me"
            heading="Student engineer, builder at heart"
          />

          <p>
            I'm Vaibhav Kumar, a 4th-year B.Tech student in Computer Science (AI &amp; ML) at
            Graphic Era University, Dehradun. I like building at the intersection of machine
            learning, full-stack development and test automation, and taking projects all
            the way from idea to something that runs.
          </p>
          <p>
            This summer I worked as a Research Intern in Image Processing &amp; Computer
            Vision in the Department of CSE at Graphic Era. My projects range from a Hybrid
            CNN–ViT research paper and a local-LLM trip planner to a MERN chat app and a
            Selenium/TestNG framework.
          </p>
          <p>
            I also practise data structures and algorithms regularly, with 450+ problems
            solved on LeetCode and a CodeChef DSA ranking of 1689.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">450+</span>
              <span className="stat-label">LeetCode Problems</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1511</span>
              <span className="stat-label">LeetCode Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8.25</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
