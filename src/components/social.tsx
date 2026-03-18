import { useState, useRef } from "react";

/* ─────────────────────────────────────────────
   Card preview data per icon
───────────────────────────────────────────── */
type CardData = {
  platform: string;
  accent: string;
  header: React.ReactNode;
  body: React.ReactNode;
};

const cardData: Record<string, CardData> = {
  GitHub: {
    platform: "GitHub",
    accent: "#24292f",
    header: (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src="https://avatars.githubusercontent.com/u/0?v=4"
          alt="avatar"
          style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid rgba(0,0,0,0.1)" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://github.com/identicons/default.png";
          }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#24292f" }}>yourhandle</div>
          <div style={{ fontSize: 11, color: "#656d76" }}>github.com/yourhandle</div>
        </div>
      </div>
    ),
    body: (
      <div>
        <p style={{ fontSize: 11.5, color: "#444d56", margin: "8px 0 10px", lineHeight: 1.5 }}>
          Building things in public. Open source enthusiast.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          {[["24", "Repos"], ["310", "Followers"], ["18", "Following"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#24292f" }}>{n}</div>
              <div style={{ fontSize: 10, color: "#8c959f" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  LinkedIn: {
    platform: "LinkedIn",
    accent: "#0a66c2",
    header: (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "linear-gradient(135deg, #0a66c2, #378fe9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: 15,
          }}
        >
          YN
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#000" }}>Your Name</div>
          <div style={{ fontSize: 11, color: "#666" }}>Software Engineer</div>
        </div>
      </div>
    ),
    body: (
      <div>
        <p style={{ fontSize: 11.5, color: "#444", margin: "8px 0 10px", lineHeight: 1.5 }}>
          Building scalable systems · Open to new opportunities
        </p>
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: "#e8f0fb", borderRadius: 20, padding: "3px 10px",
            fontSize: 11, color: "#0a66c2", fontWeight: 600,
          }}
        >
          🔗 500+ connections
        </div>
      </div>
    ),
  },

  Resume: {
    platform: "Resume",
    accent: "#333",
    header: (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 40, height: 40, borderRadius: 8,
            background: "#f5f5f5", border: "1.5px solid #ddd",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20,
          }}
        >
          📄
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#111" }}>Resume.pdf</div>
          <div style={{ fontSize: 11, color: "#888" }}>Last updated Mar 2025</div>
        </div>
      </div>
    ),
    body: (
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 8 }}>
          {[
            { label: "Experience", value: "3+ years" },
            { label: "Skills", value: "React · Node · TypeScript" },
            { label: "Education", value: "B.Sc. Computer Science" },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5 }}>
              <span style={{ color: "#888", fontWeight: 500 }}>{label}</span>
              <span style={{ color: "#222", fontWeight: 600 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  Email: {
    platform: "Email",
    accent: "#e04040",
    header: (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "linear-gradient(135deg, #e04040, #ff7a7a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
          }}
        >
          ✉️
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#111" }}>Get in touch</div>
          <div style={{ fontSize: 11, color: "#888" }}>you@example.com</div>
        </div>
      </div>
    ),
    body: (
      <div>
        <p style={{ fontSize: 11.5, color: "#555", margin: "8px 0 10px", lineHeight: 1.5 }}>
          Always open to interesting projects and conversations.
        </p>
        <div
          style={{
            background: "#fff3f3", borderRadius: 8, padding: "6px 10px",
            fontSize: 11, color: "#c0392b", fontWeight: 600,
            border: "1px solid #f5c6c6",
          }}
        >
          ⚡ Usually responds within 24h
        </div>
      </div>
    ),
  },
};

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

  .social-icon-box {
    width: 38px;
    height: 38px;
    border: 2px solid rgba(0,0,0,0.55);
    margin: 5px;
    border-radius: 10px;
    background: rgba(0,0,0,0.03);

    display: flex;
    align-items: center;
    justify-content: center;

    color: rgba(0,0,0,0.75);
    cursor: pointer;
    text-decoration: none;
    position: relative;

    transform: translateY(8px) scale(0.9);
    opacity: 0;
    animation: iconJump 0.5s ease forwards;

    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      background 0.25s ease,
      color 0.25s ease,
      box-shadow 0.25s ease;
  }

  .social-icon-box:hover,
  .social-icon-box:focus {
    transform: translateY(-4px) scale(1.12);
    border-color: rgba(0,0,0,0.9);
    color: rgba(0,0,0,1);
    background: rgba(0,0,0,0.08);
    box-shadow: 0 6px 16px rgba(0,0,0,0.18);
    z-index: 10;
  }

  .social-icon-box svg {
    width: 18px;
    height: 18px;
    stroke-width: 2.7;
  }

  @keyframes iconJump {
    0%   { transform: translateY(10px) scale(0.8); opacity: 0; }
    60%  { transform: translateY(-4px) scale(1.05); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
  }

  /* ── Hover Card ── */
  .social-card-wrapper {
    position: relative;
    display: inline-flex;
  }

  .social-preview-card {
    font-family: 'DM Sans', sans-serif;
    position: absolute;
    bottom: calc(100% + 14px);
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    width: 210px;
    background: #fff;
    border-radius: 14px;
    box-shadow:
      0 0 0 1px rgba(0,0,0,0.07),
      0 8px 24px rgba(0,0,0,0.13),
      0 2px 6px rgba(0,0,0,0.06);
    padding: 14px;
    pointer-events: none;

    opacity: 0;
    transform: translateX(-50%) translateY(6px);
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
    z-index: 100;
  }

  .social-card-wrapper:hover .social-preview-card,
  .social-card-wrapper:focus-within .social-preview-card {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  /* little arrow */
  .social-preview-card::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #fff;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.06));
  }

  .social-card-accent-bar {
    height: 3px;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  .social-card-divider {
    height: 1px;
    background: rgba(0,0,0,0.07);
    margin: 10px 0;
  }

  .social-card-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    padding: 6px 0;
    border-radius: 8px;
    border: none;
    font-size: 11.5px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 10px;
    font-family: 'DM Sans', sans-serif;
    transition: opacity 0.2s;
    text-decoration: none;
    color: #fff;
  }
  .social-card-cta:hover { opacity: 0.88; }
`;

/* ─────────────────────────────────────────────
   Icons
───────────────────────────────────────────── */
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Preview Card
───────────────────────────────────────────── */
function PreviewCard({ label }: { label: string }) {
  const card = cardData[label];
  if (!card) return null;

  const ctaMap: Record<string, { text: string; href: string }> = {
    GitHub:   { text: "View Profile →", href: "https://github.com" },
    LinkedIn: { text: "Connect →",      href: "https://linkedin.com" },
    Resume:   { text: "Download PDF →", href: "/resume.pdf" },
    Email:    { text: "Send Email →",   href: "mailto:you@example.com" },
  };

  const cta = ctaMap[label];

  return (
    <div className="social-preview-card">
      {/* accent bar */}
      <div
        className="social-card-accent-bar"
        style={{ background: card.accent }}
      />
      {/* header */}
      {card.header}
      <div className="social-card-divider" />
      {/* body */}
      {card.body}
      {/* CTA */}
      {cta && (
        <a
          href={cta.href}
          target={cta.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="social-card-cta"
          style={{ background: card.accent }}
        >
          {cta.text}
        </a>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main
───────────────────────────────────────────── */
const icons = [
  { Icon: GithubIcon,   href: "https://github.com",     label: "GitHub"   },
  { Icon: LinkedinIcon, href: "https://linkedin.com",   label: "LinkedIn" },
  { Icon: ResumeIcon,   href: "/resume.pdf",            label: "Resume"   },
  { Icon: EmailIcon,    href: "mailto:you@example.com", label: "Email"    },
];

export default function SocialIcons() {
  return (
    <div className="p-7 flex gap-2" style={{ paddingTop: 80 }}>
      <style>{styles}</style>
      {icons.map(({ Icon, href, label }, i) => (
        <div
          key={label}
          className="social-card-wrapper"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className="social-icon-box"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Icon />
          </a>
          <PreviewCard label={label} />
        </div>
      ))}
    </div>
  );
}