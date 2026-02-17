import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

  .navbar-root * { font-family: 'DM Sans', sans-serif; }

  /* Entry stagger */
  @keyframes nav-drop {
    from { opacity: 0; transform: translateY(-8px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)   scale(1);    }
  }
  .nav-entry { animation: nav-drop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
  .nav-entry-1 { animation-delay: 0.08s; }
  .nav-entry-2 { animation-delay: 0.13s; }
  .nav-entry-3 { animation-delay: 0.18s; }
  .nav-entry-4 { animation-delay: 0.23s; }
  .nav-entry-5 { animation-delay: 0.30s; }

  /* Logo */
  .nav-logo {
    transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
  }
  .nav-logo:hover {
    border-color: rgba(0,0,0,0.28) !important;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
    transform: scale(1.07);
  }
  .nav-logo:hover svg { stroke: rgba(0,0,0,0.85); }
  .nav-logo svg { transition: stroke 0.22s ease; }

  /* Nav link */
  .nav-link {
    position: relative;
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: calc(100% - 24px);
    height: 1px;
    background: rgba(0,0,0,0.22);
    border-radius: 2px;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .nav-link:hover {
    color: rgba(0,0,0,0.9) !important;
    border-color: rgba(0,0,0,0.1) !important;
    background: rgba(0,0,0,0.03) !important;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  }

  /* CTA button */
  .nav-cta {
    position: relative;
    overflow: hidden;
    transition: color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
  }
  .nav-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.75) 50%, transparent 65%);
    transform: translateX(-120%);
    transition: transform 0.45s ease;
    border-radius: inherit;
  }
  .nav-cta:hover {
    color: rgba(0,0,0,0.95) !important;
    border-color: rgba(0,0,0,0.28) !important;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.08);
    transform: translateY(-1px);
  }
  .nav-cta:hover::before { transform: translateX(120%); }
  .nav-cta:active { transform: translateY(0); box-shadow: 0 0 0 2px rgba(0,0,0,0.07); }

  /* Dot pulse */
  .cta-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.28);
    background: transparent;
    flex-shrink: 0;
    transition: border-color 0.25s ease;
  }
  @keyframes pulse-ring {
    0%   { box-shadow: 0 0 0 0   rgba(0,0,0,0.15); }
    70%  { box-shadow: 0 0 0 4px rgba(0,0,0,0);    }
    100% { box-shadow: 0 0 0 0   rgba(0,0,0,0);    }
  }
  .nav-cta:hover .cta-dot {
    border-color: rgba(0,0,0,0.55);
    animation: pulse-ring 1s ease infinite;
  }
`;

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "Projects", "Blog"];

  return (
    <div className="navbar-root w-full flex justify-center pt-6">
      <style>{styles}</style>

      <nav
        className="nav-entry fixed flex items-center gap-1.5 pl-2.5 pr-2.5 py-2 rounded-full backdrop-blur-2xl border shadow-sm"
        style={{
          background: "rgba(255,255,255,0.45)",
          borderColor: "rgba(0,0,0,0.12)",
        }}
      >
        {/* Logo */}
        <div
          className="nav-logo nav-entry nav-entry-1 w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer flex-shrink-0 mr-1"
          style={{
            background: "transparent",
            border: "1px solid rgba(0,0,0,0.13)",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(0,0,0,0.5)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>

        {/* Links */}
        <div className="flex items-center gap-0.5">
          {links.map((link, i) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`nav-link nav-entry nav-entry-${i + 2} px-3.5 py-1.5 rounded-full text-sm border`}
              style={{
                color:
                  active === link ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.48)",
                fontWeight: active === link ? 500 : 400,
                letterSpacing: "-0.01em",
                background:
                  active === link ? "rgba(0,0,0,0.04)" : "transparent",
                borderColor:
                  active === link ? "rgba(0,0,0,0.1)" : "transparent",
              }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          className="nav-cta nav-entry nav-entry-5 flex items-center gap-2 ml-1 px-4 py-2 rounded-full text-sm border"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "rgba(0,0,0,0.72)",
            background: "rgba(255,255,255,0.6)",
            borderColor: "rgba(0,0,0,0.16)",
          }}
        >
          <span className="cta-dot" />
          Contact Me
        </button>
      </nav>
    </div>
  );
}
