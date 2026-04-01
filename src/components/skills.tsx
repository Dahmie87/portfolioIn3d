import React, { useState } from 'react';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

const allSkillsData: SkillCategory[] = [
  {
    icon: '💻',
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'NextJS', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Redux', icon: '🔄' },
      { name: 'Webpack', icon: '📦' },
    ],
  },
  {
    icon: '⚡',
    title: 'Backend',
    skills: [
      { name: 'FastAPI', icon: '🚀' },
      { name: 'Django', icon: '🐍' },
      { name: 'Python', icon: '🐍' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'GraphQL', icon: '📊' },
      { name: 'WebSockets', icon: '🔌' },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '⚡' },
      { name: 'SQLAlchemy', icon: '📚' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & ML',
    skills: [
      { name: 'LangChain', icon: '⛓️' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'Prompt Engineering', icon: '💬' },
      { name: 'RAG', icon: '🔍' },
      { name: 'Vector DB', icon: '📍' },
    ],
  },
  {
    icon: '☁️',
    title: 'DevOps',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'GitHub Actions', icon: '⚙️' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Linux', icon: '🐧' },
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools',
    skills: [
      { name: 'Git', icon: '🔀' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Figma', icon: '🎨' },
      { name: 'Postman', icon: '📮' },
      { name: 'Linear', icon: '📋' },
      { name: 'ChatGPT', icon: '💡' },
    ],
  },
];

// Initial view: Software and AI
const initialSkillsData: SkillCategory[] = [
  {
    icon: '💻',
    title: 'Software',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Python', icon: '🐍' },
      { name: 'FastAPI', icon: '🚀' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & ML',
    skills: [
      { name: 'LangChain', icon: '⛓️' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'Prompt Engineering', icon: '💬' },
      { name: 'RAG', icon: '🔍' },
      { name: 'Vector DB', icon: '📍' },
    ],
  },
];

const experienceData: ExperienceItem[] = [
  {
    year: '2026',
    role: 'Frontend Engineer',
    company: 'PadiSquare',
    description:
      'initiating the development of production-grade AI applications with focus on scalability, system design, and full-stack implementation across modern tech stack.',
  },
  {
    year: '2025 - 2026',
    role: 'Full-Stack Developer',
    company: 'Prodigy',
    description:
      'Built and shipped multiple web applications and APIs, working across frontend frameworks, backend services, and infrastructure. Strong focus on code quality and performance.',
  },
  {
    year: '2019 - 2022',
    role: 'Learning & Foundation',
    company: 'Self-taught & University',
    description:
      'Pursuing CS degree while building side projects, learning full-stack practices, and developing deep understanding of software architecture and design patterns.',
  },
];

const styles = `
  .skills-section,
  .skills-section * {
    box-sizing: border-box;
  }

  .skills-section {
    max-width: 100%;
    margin: 0;
    padding: 28px 24px;
    background: transparent;
  }

  @media (min-width: 768px) {
    .skills-section {
      padding: 60px 24px;
    }
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-eyebrow {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.35);
    margin-bottom: 20px;
    font-weight: 500;
  }

  .section-title {
    font-size: clamp(25px, 3vw, 35px);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 12px;
  }

  .section-subtitle {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.55);
    font-weight: 400;
    line-height: 1.75;
  }

  /* TECH STACK SECTION */
  .tech-stack-section {
    margin-bottom: 60px;
  }

  .tech-stack-header {
    margin-bottom: 32px;
  }

  .tech-stack-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }

  .tech-stack-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease;
  }

  .tech-stack-card:hover {
    border-color: rgba(0, 0, 0, 0.15);
    background: rgba(0, 0, 0, 0.03);
    transform: translateY(-2px);
  }

  .tech-card-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }

  .tech-card-icon {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .tech-card-label {
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
  }

  .tech-skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tech-skill-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.04);
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .tech-skill-item:hover {
    background: rgba(0, 0, 0, 0.06);
    border-color: rgba(0, 0, 0, 0.15);
  }

  .tech-skill-icon {
    font-size: 14px;
    width: 16px;
    text-align: center;
  }

  .view-all-button {
    display: block;
    margin: 0 auto;
    padding: 12px 28px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .view-all-button:hover {
    background: rgba(0, 0, 0, 0.03);
    border-color: rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 0.9);
  }

  .divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
    margin: 40px 0;
  }

  .experience-section {
    margin-bottom: 40px;
  }

  .experience-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .experience-item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 32px;
    opacity: 0;
    animation: slideUp 0.6s ease forwards;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .experience-item:nth-child(1) { animation-delay: 0.1s; }
  .experience-item:nth-child(2) { animation-delay: 0.2s; }
  .experience-item:nth-child(3) { animation-delay: 0.3s; }

  .experience-year {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.35);
    margin-bottom: 8px;
    font-weight: 500;
  }

  .experience-role {
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 4px;
  }

  .experience-company {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.55);
    margin-bottom: 12px;
    font-weight: 400;
  }

  .experience-desc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.55);
    line-height: 1.7;
    font-weight: 400;
  }

  .section-heading {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
    color: rgba(0, 0, 0, 0.9);
    letter-spacing: -0.01em;
  }

  @media (max-width: 768px) {
    .skills-section {
      padding: 60px 16px;
    }

    .tech-stack-grid, .experience-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .section-title {
      font-size: 32px;
    }
  }
`;

export const SkillsExperienceSection: React.FC = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const displayedSkills = showAllSkills ? allSkillsData : initialSkillsData;

  return (
    <>
      <style>{styles}</style>
      <div className="skills-section">
        
        {/* Tech Stack Section */}
        <div className="tech-stack-section">
          <div className="tech-stack-header">
            <p className="section-eyebrow">Tech Stack</p>
            <h2 className="section-title">What I Work With</h2>
          </div>

          <div className="tech-stack-grid">
            {displayedSkills.map((category, index) => (
              <div key={index} className="tech-stack-card">
                <div className="tech-card-title">
                  <div className="tech-card-icon">{category.icon}</div>
                  <span className="tech-card-label">{category.title}</span>
                </div>
                <div className="tech-skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="tech-skill-item">
                      <span className="tech-skill-icon">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {!showAllSkills && (
            <button 
              className="view-all-button"
              onClick={() => setShowAllSkills(true)}
            >
              View all skills →
            </button>
          )}
        </div>

        <div className="divider"></div>

        {/* Experience Section */}
        <div className="experience-section">
          <p className="section-eyebrow">Experience</p>
          <h3 className="section-heading">Professional Journey</h3>

          <div className="experience-grid">
            {experienceData.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-year">{exp.year}</div>
                <div className="experience-role">{exp.role}</div>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-desc">{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsExperienceSection;