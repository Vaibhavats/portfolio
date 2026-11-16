export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-content">
        <div className="hero-badge fade-up-delay-1">
          <span className="hero-badge-dot" />
          Open to internships &amp; full-time roles (2027)
        </div>

        <h1 className="hero-name fade-up-delay-2">
          Vaibhav Kumar
        </h1>

        <p className="hero-title fade-up-delay-3">
          CS (AI &amp; ML) Student
          <span style={{ color: "var(--text-muted)", margin: "0 0.35rem" }}>|</span>
          MERN
          <span style={{ color: "var(--text-muted)", margin: "0 0.35rem" }}>|</span>
          AI + Automation
          <span className="hero-cursor" />
        </p>

        <p className="hero-tagline fade-up-delay-4">
          4th-year B.Tech student building end-to-end software — from ML research
          and LLM agents to full-stack apps and test automation.
        </p>

        <div className="hero-actions fade-up-delay-5">
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
