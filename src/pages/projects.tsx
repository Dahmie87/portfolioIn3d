import {
  Github,
  ExternalLink,
 
} from "lucide-react";
import { projectsData, type Project, type Tech } from "../projects/data";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import djangoLogo from "../assets/django.png";
import fastapiLogo from "../assets/fastapi.png";
import nextLogo from "../assets/next.png";
import postgresLogo from "../assets/postgres.png";
import pythonLogo from "../assets/python.jfif";
import reactLogo from "../assets/react.png";
import ssrLogo from "../assets/ssr.png";
import javascriptLogo from "../assets/js.png";
import sqliteLogo from "../assets/sql.png";
import typescriptLogo from "../assets/ts.png";
import langchainLogo from "../assets/lang.png";

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #fafafa;
  }

  .projects-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 20px;
  }

  .projects-header {
    margin-bottom: 80px;
  }

  .projects-title {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  .projects-subtitle {
    font-size: 15px;
    color: #666;
    font-weight: 400;
  }

  .design-toggle {
    display: flex;
    gap: 12px;
    margin-bottom: 60px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 40px;
  }

  .toggle-btn {
    padding: 12px 24px;
    border: none;
    background: transparent;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #999;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .toggle-btn.active {
    color: #1a1a1a;
    border-bottom-color: #1a1a1a;
  }

  /* ==================== OPTION 1: IMAGE FIRST ==================== */

  .projects-grid-immersive {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 32px;
  }

  .project-card-immersive {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    position: relative;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .project-card-immersive:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-8px);
  }

  .immersive-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .immersive-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .project-card-immersive:hover .immersive-image {
    transform: scale(1.08);
  }

  .immersive-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 70%,
      rgba(0, 0, 0, 0.6) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .immersive-badge {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.95);
    color: #1a1a1a;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .immersive-badge.live {
    background: rgba(74, 222, 128, 0.95);
    color: #1a1a1a;
  }

  .immersive-badge.progress {
    background: rgba(251, 191, 36, 0.95);
    color: #1a1a1a;
  }

  .immersive-title {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.01em;
    line-height: 1.2;
    margin-bottom: 8px;
  }

  .immersive-desc {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .immersive-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-top: 1px solid #e8e8e8;
    gap: 12px;
  }

  .tech-icons-immersive {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .tech-icon {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    border-radius: 6px;
    color: #666;
    transition: all 0.2s ease;
  }

  .project-card-immersive:hover .tech-icon {
    background: #e8e8e8;
  }

  .immersive-links {
    display: flex;
    gap: 8px;
  }

  .project-link-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    cursor: pointer;
    color: #666;
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .project-link-icon:hover {
    background: #f5f5f5;
    border-color: #1a1a1a;
    color: #1a1a1a;
  }

  /* ==================== OPTION 2: MINIMAL CLEAN ==================== */

  .projects-grid-clean {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
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

  .clean-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

  .cc-card-img.image-loaded {
    background: transparent !important;
  }

  .cc-card-img.image-loaded::after {
    animation: none !important;
  }


  .cc-card-img {
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
  }
  .cc-card-img:not(.image-loaded)::after {
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
    gap: 12px;
    margin-bottom: 16px;
    padding: 12px 0;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    align-items: center;
    justify-content: space-between;
  }

  .clean-tech-icons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
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
    overflow: hidden;
    border: 1px solid #ececec;
  }

  .clean-tech-icon img {
    width: 18px;
    height: 18px;
    object-fit: contain;
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

  @media (max-width: 768px) {
    .projects-grid-immersive,
    .projects-grid-clean {
      grid-template-columns: 1fr;
    }

    .projects-title {
      font-size: 36px;
    }
  }
`;



const TechIconMap: Record<Tech, string> = {
  react: reactLogo,
  nextjs: nextLogo,
  django: djangoLogo,
  ssr: ssrLogo,
  sqlite: sqliteLogo,
  javascript: javascriptLogo,
  fastapi: fastapiLogo,
  typescript: typescriptLogo,
  python: pythonLogo,
  postgres: postgresLogo,
  langchain: langchainLogo,
};

interface ProjectCardProps {
  project: Project;
  onOpen: (id: number) => void;
}

function ProjectCardClean({ project, onOpen }: ProjectCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
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
      <div className={`cc-card-img ${isImageLoaded ? "image-loaded" : ""}`}>
        <div
          className={`clean-badge ${
            project.status === "live" ? "live" : "progress"
          }`}
        >
          {project.status === "live" ? "Live" : "In Progress"}
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="clean-image"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      <div className="clean-content">
        <div className="clean-tech-stack">
          <div className="clean-tech-icons">
            {project.stack.map((tech) => (
              <div key={tech} className="clean-tech-icon" title={tech}>
                <img src={TechIconMap[tech]} alt={tech} />
              </div>
            ))}
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

        <h3 className="clean-title">{project.title}</h3>
        <p className="clean-desc">{project.desc}</p>

        <div className="clean-footer">
          <div className="clean-footer-left">
            <span className="clean-label">{project.stack.join(" · ")}</span>
            <span className="view-details">View Details</span>
          </div>
        </div>
      </div>
    </article>
  );
}

// Main Component
export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <style>{styles}</style>
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">Selected Projects</h1>
          <p className="projects-subtitle">
            Crafted with care. Built with code. Powered by AI.
          </p>
        </div>

        <div className="design-toggle cursor-pointer">
         <Link to={'/'} className="text-gray-500 text-sm hover:text-black">Home</Link>
         <p className="text-gray-500 text-sm">{">"}</p>
         <p className="text-black text-sm">Projects</p>
        </div>

          <div className="projects-grid-clean">
            {projectsData.map((project) => (
              <ProjectCardClean
                key={project.id}
                project={project}
                onOpen={(projectId) => navigate(`/projects/${projectId}`)}
              />
            ))}
          </div>
        
      </div>
    </div>
  );
}
