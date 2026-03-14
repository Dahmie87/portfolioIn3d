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
    font-weight: 500;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  .cc-card {
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    transition: border-color 0.18s ease, transform 0.18s ease;
    cursor: pointer;
  }
  .cc-card:hover {
    border-color: rgba(0,0,0,0.18);
    transform: translateY(-2px);
  }

  /* ── Shimmer skeleton ── */
  .cc-card-img {
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
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

  /* inner skeleton lines inside the image */
  .cc-skel-inner {
    position: absolute;
    inset: 0;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 8px;
  }
  .cc-skel-bar {
    height: 8px;
    border-radius: 4px;
    background: rgba(0,0,0,0.07);
  }
  .cc-skel-bar-short {
    height: 8px;
    width: 55%;
    border-radius: 4px;
    background: rgba(0,0,0,0.05);
  }
  .cc-skel-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(0,0,0,0.07);
    margin-bottom: 4px;
  }

  .cc-card-body { padding: 18px 20px 20px; }
  .cc-card-title {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: rgba(0,0,0,0.88);
    margin-bottom: 6px;
    line-height: 1.3;
  }
  .cc-card-desc {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.65;
    color: rgba(0,0,0,0.5);
    margin-bottom: 16px;
  }
  .cc-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid rgba(0,0,0,0.07);
  }
  .cc-card-stack {
    font-size: 11px;
    color: rgba(0,0,0,0.35);
    letter-spacing: 0.02em;
    font-weight: 400;
  }
  .cc-card-cta {
    font-size: 12px;
    font-weight: 500;
    color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    gap: 3px;
    transition: color 0.18s;
  }
  .cc-card:hover .cc-card-cta { color: rgba(0,0,0,0.88); }

  @media (max-width: 768px) {
    .cc-about { grid-template-columns: 1fr; gap: 36px; }
    .cc-cards { grid-template-columns: 1fr; }
  }
`;

const meta = [
  { label: "Institution", val: "LASU, Lagos" },
  { label: "Focus",       val: "Backend · Full-stack" },
  { label: "Backend",     val: "Python · Django · FastAPI" },
  { label: "Frontend",    val: "React · TypeScript" },
];

const projects = [
  {
    title: "API Gateway Service",
    desc: "High-performance request routing and auth layer built with FastAPI and Redis-backed rate limiting.",
    stack: "FastAPI · Redis · Docker",
  },
  {
    title: "Student Portal",
    desc: "University management platform with role-based access, built on Django REST and React.",
    stack: "Django · React · Postgres",
  },
  {
    title: "Real-time Chat",
    desc: "WebSocket-powered messaging app with presence indicators and persistent history.",
    stack: "WebSocket · TypeScript",
  },
];

function SkeletonImage() {
  return (
    <div className="cc-card-img">
      <div className="cc-skel-inner">
        <div className="cc-skel-circle" />
        <div className="cc-skel-bar" />
        <div className="cc-skel-bar-short" />
      </div>
    </div>
  );
}

export default function ConceptC() {
  return (
    <div style={{ padding: "60px 40px 80px", maxWidth: 1200, margin: "0 auto" }}>
      <style>{styles}</style>

      <div className="cc-about">
        <div>
          <p className="cc-eyebrow">About me</p>
          <h2 className="cc-heading">
            Software<br />engineer,<br />with a <em>niche</em><br />in AI.
          </h2>
        </div>
        <div>
          <p className="cc-bio">
Computer Science undergraduate at Lagos State University (LASU) focused on Software engineering and AI systems development.          </p>
          <p className="cc-bio">
Over 3+ years of experience in software development — building full-stack applications, designing backend architectures, and exploring large language model systems and AI-driven applications.          </p>
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
        {projects.map((p) => (
          <div key={p.title} className="cc-card">
            <SkeletonImage />
            <div className="cc-card-body">
              <h3 className="cc-card-title">{p.title}</h3>
              <p className="cc-card-desc">{p.desc}</p>
              <div className="cc-card-footer">
                <span className="cc-card-stack">{p.stack}</span>
                <span className="cc-card-cta">View ↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}