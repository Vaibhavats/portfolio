export default function ProjectCard({ title, description, tags, icon, github, demo }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <span className="project-image-icon">{icon}</span>
      </div>

      <div className="project-body">
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-footer">
          <a
            href={github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
