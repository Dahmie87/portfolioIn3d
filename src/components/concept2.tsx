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
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
    transition: border-color 0.18s ease;
    cursor: pointer;
  }

  .cc-card:hover {
    border-color: rgba(0,0,0,0.18);
  }

  .cc-card-top { height: 5px; }
  .cc-card-top-1 { background: rgba(0,0,0,0.15); }
  .cc-card-top-2 { background: rgba(0,0,0,0.08); }
  .cc-card-top-3 { background: rgba(0,0,0,0.04); }

  .cc-card-body { padding: 22px; }

  .cc-card-title {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: rgba(0,0,0,0.88);
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .cc-card-desc {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.65;
    color: rgba(0,0,0,0.5);
    margin-bottom: 18px;
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
    color: rgba(0,0,0,0.45);
    display: flex;
    align-items: center;
    gap: 3px;
    transition: color 0.18s;
  }

  .cc-card:hover .cc-card-cta {
    color: rgba(0,0,0,0.88);
  }

  @media (max-width: 768px) {
    .cc-about { grid-template-columns: 1fr; gap: 36px; }
    .cc-cards { grid-template-columns: 1fr; }
  }
`;

const meta = [
  { label: "Institution", val: "LASU, Lagos" },
  { label: "Focus", val: "Backend · Full-stack" },
  { label: "Backend", val: "Python · Django · FastAPI" },
  { label: "Frontend", val: "React · TypeScript" },
];

const projects = [
  {
    title: "API Gateway Service",
    topClass: "cc-card-top-1",
    desc: "High-performance request routing and auth layer built with FastAPI and Redis-backed rate limiting.",
    stack: "FastAPI · Redis · Docker",
  },
  {
    title: "Student Portal",
    topClass: "cc-card-top-2",
    desc: "University management platform with role-based access, built on Django REST and React.",
    stack: "Django · React · Postgres",
  },
  {
    title: "Real-time Chat",
    topClass: "cc-card-top-3",
    desc: "WebSocket-powered messaging app with presence indicators and persistent history.",
    stack: "WebSocket · TypeScript",
  },
];

export default function ConceptC() {
  return (
    <div style={{ padding: "60px 40px 80px", maxWidth: 1200, margin: "0 auto" }}>
      <style>{styles}</style>

      <div className="cc-about">
        <div>
          <p className="cc-eyebrow">About me</p>
          <h2 className="cc-heading">
            Backend<br />engineer,<br /><em>full-stack</em><br />thinker.
          </h2>
        </div>

        <div>
          <p className="cc-bio">
            Full-stack developer with a strong focus on backend engineering. Currently an undergraduate at Lagos State University (LASU), majoring in Computer Science.
          </p>
          <p className="cc-bio">
            Over 3+ years immersed in software development — from fundamentals to complex system architecture and full-stack application design.
          </p>
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
            <div className={`cc-card-top ${p.topClass}`} />
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