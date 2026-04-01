import React from 'react';

interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

const skillsData: SkillCategory[] = [
  {
    icon: '💻',
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'NextJS', 'Tailwind CSS', 'Redux', 'Webpack'],
  },
  {
    icon: '⚡',
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Django', 'Python', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    icon: '🗄️',
    title: 'Databases & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Firebase'],
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    skills: ['LangChain', 'OpenAI API', 'Prompt Engineering', 'RAG', 'Vector DB'],
  },
  {
    icon: '☁️',
    title: 'DevOps & Infrastructure',
    skills: ['Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Linux'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Workflow',
    skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Linear', 'ChatGPT'],
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

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: 40px;
  }

  .skill-category {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 32px;
  }

  .category-title {
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .category-icon {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-tag {
    padding: 8px 16px;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: default;
  }

  .skill-tag:hover {
    background: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
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

    .skills-grid, .experience-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .section-title {
      font-size: 32px;
    }
  }
`;

export const SkillsExperienceSection: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="skills-section">
        {/* Header */}
        <div className="section-header">
          <p className="section-eyebrow">Skills & Expertise</p>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle">
            Full-stack engineer specialized in building scalable applications and
            AI-powered systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">
                <div className="category-icon">{category.icon}</div>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
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