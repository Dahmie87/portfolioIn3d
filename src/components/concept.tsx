import { Link } from "react-router-dom";

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

const projects = [
  {
    title: "ProdigyAI For Students",
    desc: "prodigy is an academic tool designed to empower students by providing a seamless platform to assess themselves, organize schedules, track assignments, and collaborate on projects, making academic life simpler and more productive.",
    stack: "Django · TypeScript · Postgres",
  },
  {
    title: "PadiSquare StoreFront",
    desc: "PadiSquae is an e-commerce platform that allows traders to create their own online marketspace called storefront, PadiSquare allows dynamic mangement of trades, orders and payments too.",
    stack: "NextJS · React · FastApi",
  },
  {
    title: "Prompt2PDF",
    desc: "PrompttoPdf allows a user to create an entire Book with standard chapters, literal content and genunine readable format",
    stack: "OpenAI · Fastapi · LangChain ",
  },
];

function SkeletonImage() {
  return (
    <div className="cc-card-img">
      
        
      
    </div>
  );
}

export default function ConceptC() {
  return (
    <div style={{maxWidth: 1200, margin: "0 auto" }}>
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
        {projects.map((p) => (
          <div key={p.title} className="cc-card">
            <SkeletonImage />
            <div className="cc-card-body">
              <h3 className="cc-card-title">{p.title}</h3>
              <p className="cc-card-desc line-clamp-2">{p.desc}</p>
              <div className="cc-card-footer">
                <span className="cc-card-stack">{p.stack}</span>
                <span className="cc-card-cta">View ↗</span>
              </div>
            </div>
          </div>
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