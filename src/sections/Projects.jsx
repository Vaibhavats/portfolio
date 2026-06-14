import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle
          eyebrow="// selected work"
          heading="Projects that ship"
          subtext="Impact-driven engineering — from AI-powered recognition systems to scalable automation frameworks."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
