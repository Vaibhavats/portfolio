export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-content">
        <div className="hero-badge fade-up-delay-1">
          <span className="hero-badge-dot" />
          Open to opportunities
        </div>

        <h1 className="hero-name fade-up-delay-2">
          Vaibhav Kumar
        </h1>

        <p className="hero-title fade-up-delay-3">
          Software Engineer
          <span style={{ color: "var(--text-muted)", margin: "0 0.35rem" }}>|</span>
          MERN
          <span style={{ color: "var(--text-muted)", margin: "0 0.35rem" }}>|</span>
          AI + Automation 
          <span className="hero-cursor" />
        </p>

        <p className="hero-tagline fade-up-delay-4">
          I build intelligent systems, automate the tedious, and craft software that scales. 
          Turning complex problems into clean, impactful engineering solutions.
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
