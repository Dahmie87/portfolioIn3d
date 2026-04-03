import { ExternalLink, Github, ArrowLeft, ArrowRight, CalendarDays, Briefcase } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectById } from "../projects/data";
import { useEffect, useState } from "react";

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

  .details-shell {
    max-width: 1120px;
    margin: 0 auto;
    padding: 64px 24px 90px;
  }

  @media (min-width: 768px) {
    .details-shell {
      padding-left: 32px;
      padding-right: 32px;
    }
  }

  .crumbs {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 28px;
    font-size: 13px;
    color: #7a7a7a;
    flex-wrap: wrap;
  }

  .crumbs a {
    text-decoration: none;
    color: #7a7a7a;
    transition: color 0.2s ease;
  }

  .crumbs a:hover {
    color: #1a1a1a;
  }

  .hero {
    display: flex;
    align-items: stretch;
    background: #fff;
    border: 1px solid #e7e7e7;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 26px;
  }

  .hero-media {
    flex: 0 0 38%;
    min-width: 280px;
    background: #f5f5f5;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .hero-content {
    flex: 1;
    padding: 28px;
  }

  .hero-title {
    font-size: clamp(28px, 4vw, 44px);
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: #151515;
    margin-bottom: 14px;
  }

  .hero-description {
    color: #5f5f5f;
    font-size: 15px;
    line-height: 1.75;
    margin-bottom: 20px;
    max-width: 75ch;
  }

  .hero-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .hero-btn {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    text-decoration: none;
    border-radius: 999px;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .hero-btn.primary {
    background: #171717;
    color: #fff;
    border: 1px solid #171717;
  }

  .hero-btn.primary:hover {
    background: #000;
  }

  .hero-btn.secondary {
    border: 1px solid #dadada;
    color: #222;
    background: #fff;
  }

  .hero-btn.secondary:hover {
    border-color: #171717;
  }

  .meta-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 26px;
  }

  .meta-card {
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 14px;
    padding: 16px;
  }

  .meta-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9a9a9a;
    margin-bottom: 7px;
  }

  .meta-value {
    color: #151515;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 18px;
    margin-bottom: 26px;
  }

  .panel {
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 16px;
    padding: 20px;
  }

  .panel-title {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9a9a9a;
    margin-bottom: 14px;
  }

  .feature-list,
  .challenge-list {
    list-style: none;
    display: grid;
    gap: 10px;
  }

  .feature-list li,
  .challenge-list li {
    padding: 12px 12px;
    border: 1px solid #ededed;
    border-radius: 10px;
    color: #3b3b3b;
    font-size: 14px;
    line-height: 1.55;
    background: #fcfcfc;
  }

  .stack-list {
    display: grid;
    gap: 12px;
  }

  .stack-item {
    border: 1px solid #ececec;
    border-radius: 12px;
    padding: 14px;
    background: #fff;
  }

  .stack-name {
    font-size: 15px;
    color: #151515;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .stack-purpose {
    color: #6a6a6a;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  .stack-highlights {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .stack-highlights span {
    border: 1px solid #e7e7e7;
    border-radius: 999px;
    padding: 4px 10px;
    color: #5a5a5a;
    font-size: 11px;
    background: #fbfbfb;
  }

  .carousel-shell {
    display: grid;
    gap: 14px;
  }

  .carousel-frame {
    position: relative;
    width: min(60%, 820px);
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #ececec;
    background: #fff;
  }

  .carousel-slide {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    display: block;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid #e4e4e4;
    background: #fff;
    color: #222;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .carousel-btn:hover {
    border-color: #171717;
    background: #171717;
    color: #fff;
  }

  .carousel-counter {
    font-size: 13px;
    color: #6a6a6a;
    font-weight: 500;
  }

  .carousel-dots {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .carousel-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    border: none;
    background: #d2d2d2;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s ease;
  }

  .carousel-dot.active {
    width: 28px;
    background: #171717;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #2f2f2f;
    text-decoration: none;
    font-size: 13px;
    margin-bottom: 16px;
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight:900;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    border: 1px solid transparent;
  }

  .status-pill.live {
    background: #e8fffe;
    color: #20ff20;
    border-color: #beffdd;
  }

  .status-pill.progress {
    background: #fff6e5;
    color: #8a6400;
    border-color: #ffe6b4;
  }

  @media (max-width: 900px) {
    .hero {
      display: block;
    }

    .hero-media {
      min-width: 0;
    }

    .hero-image {
      height: auto;
      aspect-ratio: 16 / 7;
    }

    .meta-grid {
      grid-template-columns: 1fr;
    }

    .content-grid {
      grid-template-columns: 1fr;
    }

    .hero-content {
      padding: 22px;
    }
    .carousel-frame {
      width: 100%;
    }
  }
`;

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const projectId = Number(id);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentScreenshot(0);
  }, [projectId]);

  if (!Number.isFinite(projectId)) {
    return <Navigate to="/projects" replace />;
  }

  const project = getProjectById(projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const primaryImage = project.image?.trim() || project.screenshots[0]?.trim() || "";
  const screenshots = project.screenshots.length > 0 ? project.screenshots : (primaryImage ? [primaryImage] : []);
  const screenshotCount = screenshots.length;
  const activeScreenshot = screenshots[currentScreenshot] ?? screenshots[0];

  const goToPreviousScreenshot = () => {
    setCurrentScreenshot((current) => (current - 1 + screenshotCount) % screenshotCount);
  };

  const goToNextScreenshot = () => {
    setCurrentScreenshot((current) => (current + 1) % screenshotCount);
  };

  return (
    <div>
      <style>{styles}</style>
      <main className="details-shell">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>{">"}</span>
          <Link to="/projects">Projects</Link>
          <span>{">"}</span>
          <span>{project.title}</span>
        </div>

        <section className="hero">
          <div className="hero-media">
            <img src={primaryImage} alt={project.title} className="hero-image" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{project.title}</h1>
            <p className="hero-description">{project.fullDescription}</p>
            <div className="hero-actions">
              <a href={project.demo} className="hero-btn primary" target="_blank" rel="noreferrer">
                <ExternalLink size={15} />
                Live Project
              </a>
              <a href={project.github} className="hero-btn secondary" target="_blank" rel="noreferrer">
                <Github size={15} />
                GitHub Repository
              </a>
            </div>
          </div>
        </section>

        <section className="meta-grid">
          <article className="meta-card">
            <p className="meta-label">Project Type</p>
            <p className="meta-value">
              <Briefcase size={16} />
              {project.projectType}
            </p>
          </article>
          <article className="meta-card">
            <p className="meta-label">Date</p>
            <p className="meta-value">
              <CalendarDays size={16} />
              {project.date}
            </p>
          </article>
          <article className="meta-card">
            <p className="meta-label">Status</p>
            <p className="meta-value">
              <span className={`status-pill ${project.status}`}>
                {project.status === "live" ? "Live" : "In Progress"}
              </span>
            </p>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel">
            <h2 className="panel-title">Full Feature List</h2>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <h2 className="panel-title">Role</h2>
            <ul className="feature-list">
              <li>{project.role}</li>
            </ul>
            <h2 className="panel-title" style={{ marginTop: 20 }}>Challenges</h2>
            <ul className="challenge-list">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="panel" style={{ marginBottom: 26 }}>
          <h2 className="panel-title">Tech Stack (Detailed)</h2>
          <div className="stack-list">
            {project.techStackDetailed.map((item) => (
              <article key={item.name} className="stack-item">
                <h3 className="stack-name">{item.name}</h3>
                <p className="stack-purpose">{item.purpose}</p>
                <div className="stack-highlights">
                  {item.highlights.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2 className="panel-title">Multiple Screenshots</h2>
          {screenshotCount > 0 ? (
            <div className="carousel-shell">
              <figure className="carousel-frame">
                <img
                  src={activeScreenshot}
                  alt={`${project.title} screenshot ${currentScreenshot + 1}`}
                  className="carousel-slide"
                />
              </figure>

              <div className="carousel-controls">
                <div className="carousel-nav">
                  <button
                    type="button"
                    className="carousel-btn"
                    onClick={goToPreviousScreenshot}
                    aria-label="Previous screenshot"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    className="carousel-btn"
                    onClick={goToNextScreenshot}
                    aria-label="Next screenshot"
                  >
                    <ArrowRight size={16} />
                  </button>
                  <span className="carousel-counter">
                    {currentScreenshot + 1} / {screenshotCount}
                  </span>
                </div>

                <div className="carousel-dots" aria-label="Screenshot navigation">
                  {screenshots.map((_, index) => (
                    <button
                      key={`${project.id}-dot-${index}`}
                      type="button"
                      className={`carousel-dot ${index === currentScreenshot ? "active" : ""}`}
                      onClick={() => setCurrentScreenshot(index)}
                      aria-label={`Show screenshot ${index + 1}`}
                      aria-pressed={index === currentScreenshot}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}
