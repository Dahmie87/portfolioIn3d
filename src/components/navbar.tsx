import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useState } from "react";
import resumeFile from "../assets/omotayo's-resume.pdf";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

  .nav-root * { font-family: 'DM Sans', sans-serif; }

  @keyframes nav-in {
    from { opacity: 0; transform: translateY(-10px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .nav-in   { animation: nav-in 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
  .nav-in-1 { animation-delay: 0.06s; }
  .nav-in-2 { animation-delay: 0.11s; }
  .nav-in-3 { animation-delay: 0.16s; }
  .nav-in-4 { animation-delay: 0.21s; }
  .nav-in-5 { animation-delay: 0.28s; }

  /* Logo */
  .nav-logo {
    width: 32px; height: 32px;
    border: 1px solid rgba(0,0,0,0.13);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    background: transparent;
    cursor: pointer;
    flex-shrink: 0;
    transition: border-color 0.2s ease;
  }
  .nav-logo:hover { border-color: rgba(0,0,0,0.3); }
  .nav-logo svg { stroke: rgba(0,0,0,0.5); transition: stroke 0.2s ease; }
  .nav-logo:hover svg { stroke: rgba(0,0,0,0.85); }

  /* Flip link */
  .flip-link {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    overflow: hidden;
    height: 32px;
    padding: 0 14px;
    border: none;
    background: transparent;
    cursor: pointer;
    text-decoration: none;
    outline: none;
  }
  .flip-link-inner {
    display: flex;
    flex-direction: column;
    transition: transform 0.32s cubic-bezier(0.76, 0, 0.24, 1);
  }
  .flip-link:hover .flip-link-inner {
    transform: translateY(-50%);
  }
  .flip-top, .flip-bottom {
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 14px;
    letter-spacing: -0.01em;
    white-space: nowrap;
  }
  .flip-top    { color: rgba(0,0,0,0.5);  font-weight: 400; }
  .flip-bottom { color: rgba(0,0,0,0.85); font-weight: 500; }

  /* CTA */
  .nav-cta {
    position: relative;
    overflow: hidden;
    display: flex; align-items: center; gap: 7px;
    padding: 0 18px;
    height: 34px;
    border-radius: 999px;
    border: 1px solid rgba(0,0,0,0.18);
    background: transparent;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: rgba(0,0,0,0.75);
    transition: color 0.28s ease, border-color 0.28s ease;
    margin-left: 4px;
    outline: none;
  }
  .nav-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.88);
    transform: translateY(100%);
    transition: transform 0.32s cubic-bezier(0.76, 0, 0.24, 1);
    border-radius: inherit;
    z-index: 0;
  }
  .nav-cta:hover::before { transform: translateY(0%); }
  .nav-cta:hover { color: rgba(255,255,255,0.92); border-color: rgba(0,0,0,0.5); }
  .nav-cta span { position: relative; z-index: 1; }
  .cta-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    border: 1px solid currentColor;
    background: transparent;
    flex-shrink: 0;
    position: relative; z-index: 1;
    opacity: 0.6;
  }
`;

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/projects" },
] as const;
type NavItem = (typeof LINKS)[number];

export default function NavBar() {
  const { pathname } = useLocation();
  const [active, setActive] = useState<NavItem["label"]>("Home");

  return (
    <div className="nav-root w-full flex justify-center pt-6">
      <style>{styles}</style>

      <nav
        className="nav-in fixed flex items-center gap-1.5 pl-2.5 pr-2 py-2 rounded-full border z-10"
        style={{
          background: "rgba(255,255,255,0.3)",
          borderColor: "rgba(0,0,0,0.11)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {/* Logo */}
        <div className="nav-logo nav-in nav-in-1 mr-1">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>

        {/* Flip links */}
        {LINKS.map((item, i) =>
          item.label === "Resume" ? (
            <a
              key={item.label}
              href={resumeFile}
              download="omotayo's-resume.pdf"
              onClick={() => setActive(item.label)}
              className={`flip-link nav-in nav-in-${i + 2}`}
            >
              <div className="flip-link-inner">
                <span
                  className="flip-top"
                  style={{
                    color: active === item.label ? "rgba(0,0,0,0.85)" : undefined,
                    fontWeight: active === item.label ? 500 : undefined,
                  }}
                >
                  {item.label}
                </span>
                <span className="flip-bottom">{item.label}</span>
              </div>
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setActive(item.label)}
              className={`flip-link nav-in nav-in-${i + 2}`}
            >
              <div className="flip-link-inner">
                <span
                  className="flip-top"
                  style={{
                    color: pathname === item.to || active === item.label ? "rgba(0,0,0,0.85)" : undefined,
                    fontWeight: pathname === item.to || active === item.label ? 500 : undefined,
                  }}
                >
                  {item.label}
                </span>
                <span className="flip-bottom">{item.label}</span>
              </div>
            </Link>
          )
        )}

        {/* CTA */}
        <Link to={'/contact'} className="nav-cta nav-in nav-in-5">
          <span className="cta-dot hidden lg:block" />
          <span>Contact Me</span>
        </Link>
      </nav>
    </div>
  );
}