import { type ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Code2, Database, ExternalLink, Github, Zap } from "lucide-react";
import { projectsData, type Project, type Tech } from "../projects/data";

const styles = `
  .cc-about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 56px;
    margin-bottom: 80px;
  }
  .cc-eyebrow {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.35);
    margin-bottom: 20px;
    font-weight: 500;
  }
  .cc-heading {
    font-size: clamp(40px, 4.5vw, 58px);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: rgba(0,0,0,0.9);
    font-style: italic;
    
  }
  @media (min-width: 1024px) {
    .cc-heading {
      font-size: clamp(32px, 3.6vw, 46.4px);
    }
  }
  .cc-heading em {
    font-style: italic;
    font-weight: 400;
    color: rgba(0,0,0,0.35);
  }
  .cc-bio {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.75;
    color: rgba(0,0,0,0.55);
    margin-bottom: 16px;
  }
  .cc-meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding-top: 28px;
    border-top: 1px solid rgba(0,0,0,0.08);
    margin-top: 16px;
  }
  .cc-meta-label {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.3);
    margin-bottom: 5px;
    font-weight: 900;
  }
  .cc-meta-val {
    font-size: 13px;
    color: rgba(0,0,0,0.72);
    font-weight: 400;
    letter-spacing: -0.01em;
  }
  .cc-projects-label {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.35);
    font-weight: 500;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .cc-projects-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(0,0,0,0.09);
  }
  .cc-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 28px;
  }

  .project-card-clean {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .project-card-clean:hover {
    border-color: #1a1a1a;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
  }

  .cc-card-img {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: linear-gradient(135deg, #f2f2f2 0%, #dedede 100%);
  }

  .clean-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: #fff;
    color: #1a1a1a;
    z-index: 2;
  }

  .clean-badge.live {
    background: #4ade80;
  }

  .clean-badge.progress {
    background: #fbbf24;
  }

  .clean-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .project-card-clean:hover .clean-image {
    transform: scale(1.05);
  }

  .cc-card-img::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      0deg,
      rgba(255,255,255,0.12) 0%,
      rgba(255,255,255,0.05) 40%,
      rgba(255,255,255,0) 100%
    );
    z-index: 1;
    pointer-events: none;
  }

  .cc-card-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.6) 40%,
      rgba(255,255,255,0.85) 50%,
      rgba(255,255,255,0.6) 60%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.6s ease-in-out infinite;
  }
  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position:  200% 0; }
  }

  .clean-content {
    padding: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .clean-title {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  .clean-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 16px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .clean-tech-stack {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    padding: 12px 0;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    flex-wrap: wrap;
  }

  .clean-tech-icon {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    border-radius: 4px;
    color: #666;
    font-size: 13px;
  }

  .clean-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .clean-footer-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .view-details {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #1a1a1a;
    border: 1px solid #d8d8d8;
    border-radius: 999px;
    padding: 6px 10px;
    background: #fff;
    transition: all 0.2s ease;
  }

  .project-card-clean:hover .view-details {
    background: #1a1a1a;
    color: #fff;
    border-color: #1a1a1a;
  }

  .clean-links {
    display: flex;
    gap: 8px;
  }

  .clean-link {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    color: #666;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .clean-link:hover {
    background: #1a1a1a;
    color: #fff;
    border-color: #1a1a1a;
  }

  .clean-label {
    font-size: 11px;
    color: #999;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .cc-view-all {
    display: flex;
    justify-content: center;
    margin-top: 48px;
    padding-top: 28px;
    border-top: 1px solid rgba(0,0,0,0.08);
  }
  .cc-view-all-btn {
    padding: 12px 28px;
    border: 1px solid rgba(0,0,0,0.18);
    border-radius: 8px;
    background: transparent;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0,0,0,0.7);
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
  }
  .cc-view-all-btn:hover {
    border-color: rgba(0,0,0,0.3);
    color: rgba(0,0,0,0.88);
    background: rgba(0,0,0,0.02);
  }

  @media (max-width: 768px) {
    .cc-about { grid-template-columns: 1fr; gap: 36px; }
    .cc-cards { grid-template-columns: 1fr; }
  }
`;

const meta = [
  { label: "Experience", val: "5 years" },
  { label: "Focus",       val: "AI · Full-stack" },
  { label: "Projects",     val: "12+" },
  { label: "Location",    val: "Lagos · Nigeria" },
];

const TechIconMap: Record<Tech, ReactElement> = {
  react: <Code2 size={16} />,
  nextjs: <Zap size={16} />,
  django: <Code2 size={16} />,
  fastapi: <Zap size={16} />,
  typescript: <Code2 size={16} />,
  python: <Code2 size={16} />,
  postgres: <Database size={16} />,
  langchain: <Code2 size={16} />,
};

interface ProjectCardProps {
  project: Project;
  onOpen: (id: number) => void;
}

function ProjectCardClean({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      className="project-card-clean"
      onClick={() => onOpen(project.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(project.id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} details`}
    >
      <div className="cc-card-img">
        <div
          className={`clean-badge ${
            project.status === "live" ? "live" : "progress"
          }`}
        >
          {project.status === "live" ? "Live" : "In Progress"}
        </div>
        <img src={project.image} alt={project.title} className="clean-image" />
      </div>

      <div className="clean-content">
        <h3 className="clean-title">{project.title}</h3>
        <p className="clean-desc">{project.desc}</p>

        <div className="clean-tech-stack">
          {project.stack.map((tech) => (
            <div key={tech} className="clean-tech-icon" title={tech}>
              {TechIconMap[tech] || <Code2 size={16} />}
            </div>
          ))}
        </div>

        <div className="clean-footer">
          <div className="clean-footer-left">
            <span className="clean-label">{project.stack.join(" · ")}</span>
            <span className="view-details">View Details</span>
          </div>
          <div className="clean-links">
            <a
              href={project.github}
              className="clean-link"
              title="GitHub"
              onClick={(event) => event.stopPropagation()}
            >
              <Github size={18} />
            </a>
            <a
              href={project.demo}
              className="clean-link"
              title="Live Demo"
              onClick={(event) => event.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ConceptC() {
  const navigate = useNavigate();

  return (
    <div style={{maxWidth: 1200, margin: "0 auto" }}>
      <style>{styles}</style>

      <div className="cc-about">
        <div>
          <p className="cc-eyebrow">About me</p>
          <h2 className="cc-heading">
            "The future<br />belongs,<br />to those who <em>invest</em><br />in it."
          </h2>
        </div>
        <div>
          <p className="cc-bio">
I'm Omotayo Damilare, 
a software engineer and CS Major with 5+ years of experience crafting full-stack applications and production grade APIs,          </p>
          <p className="cc-bio">
My current focus is on AI and machine learning, i'm
working toward a practice where strong software engineering and intelligent systems are inseparable.
 I believe the most powerful applications of the next decade will be built by engineers
  who understand both          </p>
          <div className="cc-meta">
            {meta.map((m) => (
              <div key={m.label}>
                <p className="cc-meta-label">{m.label}</p>
                <p className="cc-meta-val">{m.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="cc-projects-label">Selected projects</p>

      <div className="cc-cards">
        {projectsData.slice(0, 3).map((project) => (
          <ProjectCardClean
            key={project.id}
            project={project}
            onOpen={(projectId) => navigate(`/projects/${projectId}`)}
          />
        ))}
      </div>

      <div className="cc-view-all">
        <Link to="/projects" className="cc-view-all-btn">
          View all projects ↗
        </Link>
      </div>
    </div>
  );
}