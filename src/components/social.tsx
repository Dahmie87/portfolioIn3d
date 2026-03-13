const styles = `
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
  }

  .social-icon-box svg {
    width: 18px;
    height: 18px;
    stroke-width: 2.7;
  }

  @keyframes iconJump {
    0% {
      transform: translateY(10px) scale(0.8);
      opacity: 0;
    }
    60% {
      transform: translateY(-4px) scale(1.05);
      opacity: 1;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
`;
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.1" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const icons = [
  { Icon: GithubIcon,   href: "https://github.com",     label: "GitHub"   },
  { Icon: LinkedinIcon, href: "https://linkedin.com",   label: "LinkedIn" },
  { Icon: ResumeIcon,   href: "/resume.pdf",            label: "Resume"   },
  { Icon: EmailIcon,    href: "mailto:you@example.com", label: "Email"    },
];

export default function SocialIcons() {
  return (
    <div className="p-7 flex gap-2">
      <style>{styles}</style>
      {icons.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="social-icon-box"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}