const styles = `
  .social-icon {
    color: rgba(0,0,0,0.35);
    transition: color 0.2s ease, transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social-icon:hover {
    color: rgba(0,0,0,0.85);
    transform: translateY(-2px);
  }
  .social-icon:active {
    transform: translateY(0px);
  }
`;

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function SocialIcons() {
  return (
    <div className="p-7 flex gap-3">
      <style>{styles}</style>

      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <GithubIcon />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}
