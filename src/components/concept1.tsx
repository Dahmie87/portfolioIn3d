const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Serif+Display:ital@0;1&display=swap');

  .ca-root { font-family: 'DM Sans', sans-serif; }

  .ca-about {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    gap: 0;
    border-top: 1px solid rgba(0,0,0,0.12);
    padding-top: 40px;
    margin-bottom: 80px;
  }
  .ca-index {
    font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
    color: rgba(0,0,0,0.28); padding-top: 4px;
  }
  .ca-headline {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(36px,4vw,56px); font-weight: 400;
    line-height: 1.05; letter-spacing: -.02em;
    color: rgba(0,0,0,0.88); padding-right: 40px;
  }
  .ca-headline em { font-style: italic; color: rgba(0,0,0,0.35); }
  .ca-body { font-size: 14px; line-height: 1.75; color: rgba(0,0,0,0.5); font-weight: 300; padding-top: 6px; }
  .ca-body p + p { margin-top: 14px; }

  .ca-projects-header {
    display: flex; align-items: baseline; justify-content: space-between;
    margin-bottom: 24px;
    border-top: 1px solid rgba(0,0,0,0.12);
    padding-top: 20px;
  }
  .ca-projects-title { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: rgba(0,0,0,0.3); }
  .ca-projects-count { font-size: 11px; color: rgba(0,0,0,0.25); letter-spacing: .04em; }

  .ca-cards {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 1px; background: rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.1); border-radius: 14px; overflow: hidden;
  }
  .ca-card {
    background: #efefeb; padding: 28px 24px;
    transition: background .18s ease; cursor: pointer;
  }
  .ca-card:hover { background: rgba(255,255,255,0.75); }
  .ca-card-num { font-size: 11px; color: rgba(0,0,0,0.22); margin-bottom: 36px; letter-spacing: .04em; }
  .ca-card-title { font-size: 17px; font-weight: 400; letter-spacing: -.02em; color: rgba(0,0,0,0.85); margin-bottom: 10px; line-height: 1.25; }
  .ca-card-desc { font-size: 13px; font-weight: 300; line-height: 1.6; color: rgba(0,0,0,0.45); }
  .ca-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
  .ca-tag {
    font-size: 11px; letter-spacing: .02em; padding: 4px 10px;
    border: 1px solid rgba(0,0,0,0.14); border-radius: 999px; color: rgba(0,0,0,0.45);
  }
  .ca-card-footer {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: 24px; padding-top: 20px;
    border-top: 1px solid rgba(0,0,0,0.08);
  }
  .ca-card-link { font-size: 12px; color: rgba(0,0,0,0.35); letter-spacing: .02em; }
  .ca-arrow { font-size: 14px; color: rgba(0,0,0,0.25); }

  @media (max-width: 768px) {
    .ca-about { grid-template-columns: 1fr; gap: 24px; }
    .ca-cards { grid-template-columns: 1fr; }
  }
`;

const projects = [
  {
    num: "01", title: "API Gateway Service",
    desc: "High-performance request routing and auth layer built with FastAPI and Redis-backed rate limiting.",
    tags: ["FastAPI", "Redis", "Docker"],
  },
  {
    num: "02", title: "Student Portal",
    desc: "Full-stack university management platform with role-based access, built on Django REST and React.",
    tags: ["Django", "React", "PostgreSQL"],
  },
  {
    num: "03", title: "Real-time Chat",
    desc: "WebSocket-powered messaging app with presence indicators and persistent message history.",
    tags: ["WebSocket", "TypeScript", "Python"],
  },
];

export default function ConceptA() {
  return (
    <div className="ca-root" style={{ padding: "60px 40px 80px", maxWidth: 1200, margin: "0 auto" }}>
      <style>{styles}</style>

      <div className="ca-about">
        <p className="ca-index">About me</p>
        <h2 className="ca-headline">
          Building things<br />for the <em>web,</em><br />backend first.
        </h2>
        <div className="ca-body">
          <p>Full-stack developer with a strong focus on backend engineering. Currently an undergraduate at Lagos State University, majoring in Computer Science.</p>
          <p>Over 3+ years immersed in software development — from basic programming fundamentals to complex system architecture and full-stack application design.</p>
          <p>Primary backend tools: Python, Django, FastAPI. Frontend experience in React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>

      <div className="ca-projects-header">
        <span className="ca-projects-title">Selected projects</span>
        <span className="ca-projects-count">03 works</span>
      </div>

      <div className="ca-cards">
        {projects.map((p) => (
          <div key={p.num} className="ca-card">
            <p className="ca-card-num">{p.num}</p>
            <h3 className="ca-card-title">{p.title}</h3>
            <p className="ca-card-desc">{p.desc}</p>
            <div className="ca-tags">
              {p.tags.map((t) => <span key={t} className="ca-tag">{t}</span>)}
            </div>
            <div className="ca-card-footer">
              <span className="ca-card-link">View project</span>
              <span className="ca-arrow">↗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}