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
            <span className="badge-icon">💼</span>
            <div>
              <div className="badge-text">Available for hire</div>
              <div className="badge-sub">Full-time / Contract</div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <SectionTitle
            eyebrow="// about me"
            heading="Engineer by craft, problem-solver by nature"
          />

          <p>
            I'm Vaibhav Kumar, a Software Engineer passionate about building at the 
            intersection of AI, automation, and full-stack development. I thrive on turning 
            ambiguous problems into clean, maintainable systems.
          </p>
          <p>
            My experience spans Python-based computer vision, Java test automation at scale, 
            and full-stack web development with the MERN stack. I care deeply about code 
            quality, performance, and shipping things that actually matter.
          </p>
          <p>
            When I'm not engineering solutions, I'm exploring the latest in Transformer 
            architectures, contributing to open source, or experimenting with new frameworks.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Coding</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Tech Stacks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
