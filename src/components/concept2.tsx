const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Serif+Display:ital@0;1&display=swap');

  .cb-root { font-family: 'DM Sans', sans-serif; }

  .cb-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-bottom: 10px;
  }
  .cb-cell {
    background: rgba(255,255,255,0.55);
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 14px; padding: 28px;
    transition: background .18s;
  }
  .cb-cell:hover { background: rgba(255,255,255,0.85); }

  .cb-name { grid-column: 1 / 3; display: flex; flex-direction: column; justify-content: space-between; min-height: 200px; }
  .cb-name-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(40px,5vw,68px); font-weight: 400;
    letter-spacing: -.03em; line-height: 1; color: rgba(0,0,0,0.88);
  }
  .cb-name-title em { font-style: italic; color: rgba(0,0,0,0.3); }
  .cb-name-sub { font-size: 13px; font-weight: 300; color: rgba(0,0,0,0.38); letter-spacing: -.01em; }

  .cb-status { display: flex; flex-direction: column; min-height: 200px; }
  .cb-status-label { font-size: 11px; letter-spacing: .07em; text-transform: uppercase; color: rgba(0,0,0,0.22); margin-bottom: 16px; }
  .cb-avail { display: flex; align-items: center; gap: 8px; }
  .cb-dot { width: 7px; height: 7px; border-radius: 50%; background: #3a9e6e; flex-shrink: 0; }
  .cb-avail-text { font-size: 12px; color: rgba(0,0,0,0.5); }
  .cb-location { font-size: 12px; color: rgba(0,0,0,0.3); margin-top: 8px; }
  .cb-year { font-family: 'DM Serif Display', serif; font-size: 52px; font-weight: 400; color: rgba(0,0,0,0.08); line-height: 1; margin-top: auto; }
  .cb-year-sub { font-size: 12px; color: rgba(0,0,0,0.3); margin-top: -4px; }

  .cb-bio { grid-column: 1 / 2; }
  .cb-bio-text { font-size: 14px; font-weight: 300; line-height: 1.72; color: rgba(0,0,0,0.5); }

  .cb-stack { grid-column: 2 / 3; }
  .cb-stack-label { font-size: 11px; letter-spacing: .07em; text-transform: uppercase; color: rgba(0,0,0,0.25); margin-bottom: 16px; }
  .cb-chips { display: flex; flex-wrap: wrap; gap: 7px; }
  .cb-chip {
    font-size: 12px; padding: 5px 12px;
    border: 1px solid rgba(0,0,0,0.13); border-radius: 999px;
    color: rgba(0,0,0,0.55); background: rgba(255,255,255,0.5);
  }

  .cb-exp { grid-column: 3 / 4; }
  .cb-exp-label { font-size: 11px; letter-spacing: .07em; text-transform: uppercase; color: rgba(0,0,0,0.25); margin-bottom: 20px; }
  .cb-exp-num { font-family: 'DM Serif Display', serif; font-size: 64px; font-weight: 400; color: rgba(0,0,0,0.82); line-height: 1; margin-bottom: 8px; }
  .cb-exp-sub { font-size: 13px; font-weight: 300; color: rgba(0,0,0,0.38); }

  .cb-projects-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
  .cb-proj {
    background: rgba(255,255,255,0.55);
    border: 1px solid rgba(0,0,0,0.09); border-radius: 14px;
    padding: 24px; transition: background .18s; cursor: pointer;
  }
  .cb-proj:hover { background: rgba(255,255,255,0.85); }
  .cb-proj-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
  .cb-proj-num { font-size: 11px; color: rgba(0,0,0,0.2); letter-spacing: .04em; }
  .cb-proj-arrow { font-size: 16px; color: rgba(0,0,0,0.18); transition: color .18s; }
  .cb-proj:hover .cb-proj-arrow { color: rgba(0,0,0,0.6); }
  .cb-proj-title { font-size: 16px; font-weight: 400; letter-spacing: -.02em; color: rgba(0,0,0,0.82); margin-bottom: 8px; line-height: 1.3; }
  .cb-proj-desc { font-size: 13px; font-weight: 300; line-height: 1.6; color: rgba(0,0,0,0.42); }
  .cb-proj-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 16px; }
  .cb-proj-tag {
    font-size: 10px; letter-spacing: .03em; padding: 3px 9px;
    border-radius: 999px; background: rgba(0,0,0,0.05); color: rgba(0,0,0,0.4);
  }

  @media (max-width: 768px) {
    .cb-grid { grid-template-columns: 1fr; }
    .cb-name, .cb-bio, .cb-stack, .cb-exp { grid-column: 1 / 2; }
    .cb-projects-row { grid-template-columns: 1fr; }
  }
`;

const stack = ["Python", "Django", "FastAPI", "React", "TypeScript", "Tailwind", "PostgreSQL", "Redis", "Docker"];

const projects = [
  {
    num: "01", title: "API Gateway Service",
    desc: "High-performance routing and auth layer with Redis-backed rate limiting.",
    tags: ["FastAPI", "Redis", "Docker"],
  },
  {
    num: "02", title: "Student Portal",
    desc: "University management platform with role-based access and REST API.",
    tags: ["Django", "React", "PostgreSQL"],
  },
  {
    num: "03", title: "Real-time Chat",
    desc: "WebSocket-powered messaging with presence indicators and history.",
    tags: ["WebSocket", "TypeScript", "Python"],
  },
];

export default function ConceptB() {
  return (
    <div className="cb-root" style={{ padding: "60px 40px 80px", maxWidth: 1200, margin: "0 auto" }}>
      <style>{styles}</style>

      <div className="cb-grid">
        <div className="cb-cell cb-name">
          <div>
            <p style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(0,0,0,0.28)", marginBottom: 16 }}>About me</p>
            <h2 className="cb-name-title">Developer,<br /><em>backend</em><br />first.</h2>
          </div>
          <p className="cb-name-sub">Lagos State University · Computer Science</p>
        </div>

        <div className="cb-cell cb-status">
          <p className="cb-status-label">Status</p>
          <div className="cb-avail">
            <span className="cb-dot" />
            <span className="cb-avail-text">Open to opportunities</span>
          </div>
          <p className="cb-location">Lagos, Nigeria</p>
          <p className="cb-year">3+</p>
          <p className="cb-year-sub">years experience</p>
        </div>

        <div className="cb-cell cb-bio">
          <p className="cb-bio-text">
            Full-stack developer with a strong focus on backend engineering. Over 3+ years building production systems — from REST APIs to real-time architectures — with Python and modern web tooling.
          </p>
        </div>

        <div className="cb-cell cb-stack">
          <p className="cb-stack-label">Tech stack</p>
          <div className="cb-chips">
            {stack.map((s) => <span key={s} className="cb-chip">{s}</span>)}
          </div>
        </div>

        <div className="cb-cell cb-exp">
          <p className="cb-exp-label">Experience</p>
          <p className="cb-exp-num">3+</p>
          <p className="cb-exp-sub">Years in software development</p>
        </div>
      </div>

      <div className="cb-projects-row">
        {projects.map((p) => (
          <div key={p.num} className="cb-proj">
            <div className="cb-proj-header">
              <span className="cb-proj-num">{p.num}</span>
              <span className="cb-proj-arrow">↗</span>
            </div>
            <h3 className="cb-proj-title">{p.title}</h3>
            <p className="cb-proj-desc">{p.desc}</p>
            <div className="cb-proj-tags">
              {p.tags.map((t) => <span key={t} className="cb-proj-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}