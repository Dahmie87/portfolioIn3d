import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Zap,
  Code2,
  Database,
  Figma,
  Lock,
  BookOpen,
} from "lucide-react";

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
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  .projects-subtitle {
    font-size: 18px;
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

// Tech icon components
const TechIconMap = {
  react: <Code2 size={16} />,
  nextjs: <Zap size={16} />,
  django: <Code2 size={16} />,
  fastapi: <Zap size={16} />,
  typescript: <Code2 size={16} />,
  python: <Code2 size={16} />,
  postgres: <Database size={16} />,
  langchain: <Code2 size={16} />,
};

// Enhanced project data with all necessary fields
const projectsData = [
  {
    id: 1,
    title: "ProdigyAI For Students",
    desc: "An academic tool designed to empower students by providing a seamless platform to assess themselves, organize schedules, track assignments, and collaborate on projects, making academic life simpler and more productive.",
    stack: ["django", "typescript", "postgres"],
    status: "live",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "PadiSquare StoreFront",
    desc: "An e-commerce platform that allows traders to create their own online marketspace called storefront. PadiSquare enables dynamic management of trades, orders, and payments.",
    stack: ["nextjs", "react", "fastapi"],
    status: "live",
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e4be4f3f?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Prompt2PDF",
    desc: "A tool that allows users to create an entire book with standard chapters, literal content and genuine readable format using AI-powered content generation.",
    stack: ["langchain", "fastapi", "python"],
    status: "progress",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "AI Code Assistant",
    desc: "A VS Code extension that leverages machine learning to provide intelligent code suggestions, auto-completion, and bug detection in real-time.",
    stack: ["typescript", "langchain", "python"],
    status: "live",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "DataViz Dashboard",
    desc: "A real-time analytics dashboard for visualizing complex datasets with interactive charts, filters, and custom reports for business intelligence.",
    stack: ["react", "typescript", "postgres"],
    status: "progress",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "Mobile Weather App",
    desc: "A cross-platform mobile application providing real-time weather updates, forecasts, and severe weather alerts with beautiful animations.",
    stack: ["react", "nextjs", "fastapi"],
    status: "live",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

// Option 1: Image-First Immersive
function ProjectCardImmersive({ project }) {
  return (
    <div className="project-card-immersive">
      <div className="immersive-image-wrapper">
        <img src={project.image} alt={project.title} className="immersive-image" />
        <div className="immersive-overlay">
          <div
            className={`immersive-badge ${
              project.status === "live" ? "live" : "progress"
            }`}
          >
            {project.status === "live" ? "🟢 Live" : "🟡 In Progress"}
          </div>
          <div>
            <h3 className="immersive-title">{project.title}</h3>
            <p className="immersive-desc">{project.desc}</p>
          </div>
        </div>
      </div>

      <div className="immersive-footer">
        <div className="tech-icons-immersive">
          {project.stack.map((tech) => (
            <div key={tech} className="tech-icon" title={tech}>
              {TechIconMap[tech] || <Code2 size={16} />}
            </div>
          ))}
        </div>
        <div className="immersive-links">
          <a href={project.github} className="project-link-icon" title="GitHub">
            <Github size={16} />
          </a>
          <a href={project.demo} className="project-link-icon" title="Live Demo">
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Option 2: Minimal Clean Cards
function ProjectCardClean({ project }) {
  return (
    <div className="project-card-clean">
      <div className="clean-image-wrapper">
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
          <span className="clean-label">{project.stack.join(" · ")}</span>
          <div className="clean-links">
            <a href={project.github} className="clean-link" title="GitHub">
              <Github size={18} />
            </a>
            <a href={project.demo} className="clean-link" title="Live Demo">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function ProjectsPage() {
  const [design, setDesign] = useState("immersive");

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

        <div className="design-toggle">
          <button
            className={`toggle-btn ${design === "immersive" ? "active" : ""}`}
            onClick={() => setDesign("immersive")}
          >
            Design 1: Image First
          </button>
          <button
            className={`toggle-btn ${design === "clean" ? "active" : ""}`}
            onClick={() => setDesign("clean")}
          >
            Design 2: Minimal Clean
          </button>
        </div>

        {design === "immersive" && (
          <div className="projects-grid-immersive">
            {projectsData.map((project) => (
              <ProjectCardImmersive key={project.id} project={project} />
            ))}
          </div>
        )}

        {design === "clean" && (
          <div className="projects-grid-clean">
            {projectsData.map((project) => (
              <ProjectCardClean key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
