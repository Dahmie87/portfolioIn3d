import React from "react";

/* ─────────────────────────────────────────────
   SocialIcons with platform-faithful hover cards
   Real data: Dahmie87 / Damilare Omotayo
───────────────────────────────────────────── */

const GITHUB_USER = "Dahmie87";
const GITHUB_AVATAR = `https://avatars.githubusercontent.com/${GITHUB_USER}`;

/* ── Shared CSS ──────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

  .social-icon-box {
    width: 38px; height: 38px;
    border: 2px solid rgba(0,0,0,0.55);
    margin: 5px;
    border-radius: 10px;
    background: rgba(0,0,0,0.03);
    display: flex; align-items: center; justify-content: center;
    color: rgba(0,0,0,0.75);
    cursor: pointer; text-decoration: none; position: relative;
    transform: translateY(8px) scale(0.9); opacity: 0;
    animation: iconJump 0.5s ease forwards;
    transition: transform .25s ease, border-color .25s ease,
                background .25s ease, color .25s ease, box-shadow .25s ease;
  }
  .social-icon-box:hover, .social-icon-box:focus {
    transform: translateY(-4px) scale(1.12);
    border-color: rgba(0,0,0,0.9); color: rgba(0,0,0,1);
    background: rgba(0,0,0,0.08);
    box-shadow: 0 6px 16px rgba(0,0,0,0.18); z-index: 10;
  }
  .social-icon-box svg { width: 18px; height: 18px; stroke-width: 2.7; }

  @keyframes iconJump {
    0%   { transform: translateY(10px) scale(0.8); opacity: 0; }
    60%  { transform: translateY(-4px) scale(1.05); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
  }

  .social-card-wrapper { position: relative; display: inline-flex; }

  .social-preview-card {
    position: absolute;
    bottom: calc(100% + 14px);
    left: 50%;
    transform: translateX(-50%) translateY(8px);
    pointer-events: none;
    opacity: 0;
    transition: opacity .18s ease, transform .18s ease;
    z-index: 200;
  }
  .social-card-wrapper:hover .social-preview-card,
  .social-card-wrapper:focus-within .social-preview-card {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }

  .card-arrow {
    width: 0; height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    position: absolute; left: 50%; transform: translateX(-50%);
  }
`;

/* ── SVG Icons ───────────────────────────────── */
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
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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

/* ══════════════════════════════════════════════
   GITHUB CARD  — dark, faithful to github.com hovercard
══════════════════════════════════════════════ */
function GitHubCard() {
  const G = {
    bg: "#161b22", border: "#30363d",
    text: "#e6edf3", muted: "#8b949e",
  };
  return (
    <div className="social-preview-card" style={{ width: 264 }}>
      <div style={{
        background: G.bg,
        border: `1px solid ${G.border}`,
        borderRadius: 6,
        overflow: "hidden",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        fontSize: 14,
        boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
      }}>
        <div style={{ padding: "16px" }}>

          {/* avatar + follow */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <img
              src={GITHUB_AVATAR}
              alt={GITHUB_USER}
              width={48} height={48}
              style={{ borderRadius: "50%", border: `1px solid ${G.border}`, display: "block" }}
            />
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank" rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "3px 12px",
                fontSize: 12, fontWeight: 500,
                color: G.text,
                background: "#21262d",
                border: `1px solid ${G.border}`,
                borderRadius: 6,
                textDecoration: "none",
                lineHeight: "20px",
              }}
            >
              Follow
            </a>
          </div>

          {/* name + pronouns */}
          <div style={{ marginBottom: 2 }}>
            <span style={{ color: G.text, fontWeight: 600, fontSize: 16 }}>Damilare Omotayo</span>
            <span style={{
              color: G.muted, fontSize: 11, marginLeft: 6,
              border: `1px solid ${G.border}`, borderRadius: 10,
              padding: "1px 6px", verticalAlign: "middle",
            }}>he/him</span>
          </div>

          {/* username */}
          <div style={{ color: G.muted, fontSize: 14, marginBottom: 10 }}>Dahmie87</div>

          {/* bio */}
          <div style={{ color: G.text, fontSize: 13, lineHeight: "1.5", marginBottom: 10 }}>
            18 y/o Full stack developer based in Nigeria
          </div>

          {/* location */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: G.muted, fontSize: 12, marginBottom: 14 }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill={G.muted} aria-hidden="true">
              <path d="M8 0a5.53 5.53 0 0 0-5.5 5.5c0 4.17 5.5 10.5 5.5 10.5S13.5 9.67 13.5 5.5A5.53 5.53 0 0 0 8 0zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
            </svg>
            Nigeria
          </div>

          {/* divider */}
          <div style={{ borderTop: `1px solid ${G.border}`, margin: "0 0 10px" }} />

          {/* stats */}
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { n: "16", label: "repositories" },
              { n: "1",  label: "star" },
            ].map(({ n, label }) => (
              <a
                key={label}
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  fontSize: 12, color: G.muted,
                  textDecoration: "none", marginRight: 16,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill={G.muted}>
                  {label === "repositories"
                    ? <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
                    : <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
                  }
                </svg>
                <span style={{ color: G.text, fontWeight: 600 }}>{n}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* arrow */}
      <div className="card-arrow" style={{ borderTopColor: G.border, top: "100%" }} />
      <div className="card-arrow" style={{ borderTopColor: G.bg, top: "calc(100% - 2px)" }} />
    </div>
  );
}

/* ══════════════════════════════════════════════
   LINKEDIN CARD  — faithful to LinkedIn profile card
══════════════════════════════════════════════ */
function LinkedInCard() {
  return (
    <div className="social-preview-card" style={{ width: 270 }}>
      <div style={{
        background: "#fff",
        border: "none",
        borderRadius: 8,
        overflow: "hidden",
        fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.16)",
      }}>
        {/* banner */}
        <div style={{
          height: 60,
          background: "linear-gradient(90deg, #0a66c2 0%, #378fe9 100%)",
        }} />

        <div style={{ padding: "0 16px 16px", position: "relative" }}>
          {/* avatar */}
          <div style={{ marginTop: -28, marginBottom: 6, display: "inline-block" }}>
            <img
              src={GITHUB_AVATAR}
              alt="Damilare"
              width={56} height={56}
              style={{ borderRadius: "50%", border: "3px solid #fff", display: "block" }}
            />
          </div>

          {/* name */}
          <div style={{ fontSize: 16, fontWeight: 600, color: "rgba(0,0,0,0.9)", lineHeight: "1.3", marginBottom: 2 }}>
            Damilare Omotayo
          </div>
          {/* headline */}
          <div style={{ fontSize: 13, color: "rgba(0,0,0,0.6)", lineHeight: "1.4", marginBottom: 4 }}>
            Full Stack Developer · Backend Enthusiast
          </div>
          {/* location */}
          <div style={{ fontSize: 12, color: "rgba(0,0,0,0.5)", marginBottom: 10, display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Lagos, Nigeria
          </div>

          {/* 500+ connections */}
          <div style={{ fontSize: 12, color: "#0a66c2", fontWeight: 500, marginBottom: 14 }}>
            500+ connections
          </div>

          {/* buttons */}
          <div style={{ display: "flex", gap: 8 }}>
            <a
              href="https://linkedin.com/in/damilare-omotayo"
              target="_blank" rel="noreferrer"
              style={{
                flex: 1, textAlign: "center",
                padding: "5px 0",
                background: "#0a66c2", color: "#fff",
                borderRadius: 16, fontSize: 14, fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Connect
            </a>
            <a
              href="https://linkedin.com/in/damilare-omotayo"
              target="_blank" rel="noreferrer"
              style={{
                flex: 1, textAlign: "center",
                padding: "5px 0",
                background: "transparent", color: "#0a66c2",
                borderRadius: 16, fontSize: 14, fontWeight: 600,
                textDecoration: "none",
                border: "1.5px solid #0a66c2",
              }}
            >
              Message
            </a>
          </div>
        </div>
      </div>
      <div className="card-arrow" style={{ borderTopColor: "rgba(0,0,0,0.1)", top: "100%" }} />
      <div className="card-arrow" style={{ borderTopColor: "#fff", top: "calc(100% - 2px)" }} />
    </div>
  );
}

/* ══════════════════════════════════════════════
   X CARD  — dark, faithful to x.com hover card
══════════════════════════════════════════════ */
function XCard() {
  const X = { bg: "#15202b", border: "#38444d", text: "#fff", muted: "#8b98a5" };
  return (
    <div className="social-preview-card" style={{ width: 256 }}>
      <div style={{
        background: X.bg,
        border: `1px solid ${X.border}`,
        borderRadius: 12,
        overflow: "hidden",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
      }}>
        {/* banner */}
        <div style={{
          height: 64,
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }} />

        <div style={{ padding: "0 12px 14px" }}>
          {/* avatar + follow row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: -26, marginBottom: 10 }}>
            <img
              src={GITHUB_AVATAR}
              alt="Dahmie87"
              width={52} height={52}
              style={{ borderRadius: "50%", border: `3px solid ${X.bg}`, display: "block" }}
            />
            <a
              href="https://x.com/Dahmie87"
              target="_blank" rel="noreferrer"
              style={{
                background: X.text, color: "#000",
                borderRadius: 20, padding: "4px 16px",
                fontSize: 14, fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Follow
            </a>
          </div>

          {/* display name */}
          <div style={{ color: X.text, fontWeight: 700, fontSize: 15, marginBottom: 1 }}>
            Damilare Omotayo
          </div>
          {/* handle */}
          <div style={{ color: X.muted, fontSize: 13, marginBottom: 8 }}>@Dahmie87</div>

          {/* bio */}
          <div style={{ color: X.text, fontSize: 13, lineHeight: "1.5", marginBottom: 10 }}>
            18 y/o Full stack dev 🇳🇬 · Backend enthusiast · Chess lover ♟️
          </div>

          {/* stats */}
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ fontSize: 13 }}>
              <span style={{ color: X.text, fontWeight: 700 }}>312</span>
              <span style={{ color: X.muted, marginLeft: 4 }}>Following</span>
            </div>
            <div style={{ fontSize: 13 }}>
              <span style={{ color: X.text, fontWeight: 700 }}>580</span>
              <span style={{ color: X.muted, marginLeft: 4 }}>Followers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-arrow" style={{ borderTopColor: X.border, top: "100%" }} />
      <div className="card-arrow" style={{ borderTopColor: X.bg, top: "calc(100% - 2px)" }} />
    </div>
  );
}

/* ══════════════════════════════════════════════
   EMAIL CARD  — Gmail contact card style
══════════════════════════════════════════════ */
function EmailCard() {
  return (
    <div className="social-preview-card" style={{ width: 252 }}>
      <div style={{
        background: "#fff",
        border: "none",
        borderRadius: 8,
        overflow: "hidden",
        fontFamily: "'Google Sans', Roboto, sans-serif",
        boxShadow: "0 2px 10px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.07)",
      }}>
        {/* google-color top stripe */}
        <div style={{
          height: 5,
          background: "linear-gradient(90deg, #ea4335 25%, #fbbc04 25% 50%, #34a853 50% 75%, #4285f4 75%)",
        }} />

        <div style={{ padding: "14px 16px 16px" }}>
          {/* contact */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <img
              src={GITHUB_AVATAR}
              alt="Damilare"
              width={46} height={46}
              style={{ borderRadius: "50%", border: "1.5px solid #e8eaed", display: "block" }}
            />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#202124", marginBottom: 1 }}>
                Damilare Omotayo
              </div>
              <div style={{ fontSize: 12, color: "#5f6368" }}>
                omotayodamilare@gmail.com
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #f1f3f4", margin: "0 0 10px" }} />

          <div style={{ fontSize: 12, color: "#5f6368", marginBottom: 14, display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#34a853">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 5h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            Usually responds within 24 hours
          </div>

          <a
            href="mailto:omotayodamilare@gmail.com"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              width: "100%", padding: "8px 0", boxSizing: "border-box",
              background: "#4285f4", color: "#fff",
              borderRadius: 4, fontSize: 13, fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Compose Email
          </a>
        </div>
      </div>
      <div className="card-arrow" style={{ borderTopColor: "rgba(0,0,0,0.07)", top: "100%" }} />
      <div className="card-arrow" style={{ borderTopColor: "#fff", top: "calc(100% - 2px)" }} />
    </div>
  );
}

/* ── card map ──────────────────────────────── */
const cardComponents: Record<string, () => React.ReactElement> = {
  GitHub:   GitHubCard,
  LinkedIn: LinkedInCard,
  X:        XCard,
  Email:    EmailCard,
};

/* ── icon list ─────────────────────────────── */
const icons = [
  { Icon: GithubIcon,   href: `https://github.com/${GITHUB_USER}`,         label: "GitHub"   },
  { Icon: LinkedinIcon, href: "https://linkedin.com/in/damilare-omotayo",  label: "LinkedIn" },
  { Icon: XIcon,        href: "https://x.com/Dahmie87",                    label: "X"        },
  { Icon: EmailIcon,    href: "mailto:omotayodamilare@gmail.com",           label: "Email"    },
];

/* ── root ──────────────────────────────────── */
export default function SocialIcons() {
  return (
    <div className="p-7 flex gap-2" style={{ paddingTop: 90 }}>
      <style>{styles}</style>
      {icons.map(({ Icon, href, label }, i) => {
        const Card = cardComponents[label];
        return (
          <div key={label} className="social-card-wrapper">
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
            {Card && <Card />}
          </div>
        );
      })}
    </div>
  );
}