import React, { useState } from 'react';
import chatgptIcon from '../assets/chatgpt.png';
import djangoIcon from '../assets/django.png';
import dockerIcon from '../assets/docker.png';
import fastapiIcon from '../assets/fastapi.png';
import figmaIcon from '../assets/figma.png';
import graphIcon from '../assets/graph.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.png';
import jsIcon from '../assets/js.png';
import langchainIcon from '../assets/lang.png';
import nextIcon from '../assets/next.png';
import postgresIcon from '../assets/postgres.png';
import postmanIcon from '../assets/postman.png';
import promptIcon from '../assets/prompt.png';
import pythonIcon from '../assets/python.jfif';
import ragIcon from '../assets/rag.png';
import reactIcon from '../assets/react.png';
import redisIcon from '../assets/redis.png';
import sqlAlchemyIcon from '../assets/sqlalch.png';
import sqlIcon from '../assets/sql.png';
import tailwindIcon from '../assets/tailwind.png';
import tsIcon from '../assets/ts.png';
import vectorDbIcon from '../assets/vectordb.png';
import vscodeIcon from '../assets/vscode.png';
import websocketsIcon from '../assets/websockets.png';

interface Skill {
  name: string;
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
    icon: reactIcon,
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'NextJS' },
      { name: 'Tailwind CSS' },
      { name: 'Redux' },
      { name: 'Webpack' },
    ],
  },
  {
    icon: fastapiIcon,
    title: 'Backend',
    skills: [
      { name: 'FastAPI' },
      { name: 'Django' },
      { name: 'Python' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'WebSockets' },
    ],
  },
  {
    icon: postgresIcon,
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'SQLAlchemy' },
      { name: 'Firebase' },
    ],
  },
  {
    icon: langchainIcon,
    title: 'AI & ML',
    skills: [
      { name: 'LangChain' },
      { name: 'OpenAI API' },
      { name: 'Prompt Engineering' },
      { name: 'RAG' },
      { name: 'Vector DB' },
    ],
  },
  {
    icon: githubIcon,
    title: 'DevOps',
    skills: [
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'GitHub Actions' },
      { name: 'Vercel' },
      { name: 'Linux' },
    ],
  },
  {
    icon: vscodeIcon,
    title: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'VS Code' },
      { name: 'Figma' },
      { name: 'Postman' },
      { name: 'Linear' },
      { name: 'ChatGPT' },
    ],
  },
];

// Initial view: Software and AI
const initialSkillsData: SkillCategory[] = [
  {
    icon: reactIcon,
    title: 'Software',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'Docker' },
      { name: 'AWS' },
    ],
  },
  {
    icon: langchainIcon,
    title: 'AI & ML',
    skills: [
      { name: 'LangChain' },
      { name: 'OpenAI API' },
      { name: 'Prompt Engineering' },
      { name: 'RAG' },
      { name: 'Vector DB' },
    ],
  },
];

const skillIconMap: Record<string, string> = {
  React: reactIcon,
  TypeScript: tsIcon,
  NextJS: nextIcon,
  'Tailwind CSS': tailwindIcon,
  Redux: graphIcon,
  Webpack: jsIcon,
  FastAPI: fastapiIcon,
  Django: djangoIcon,
  Python: pythonIcon,
  'REST APIs': fastapiIcon,
  GraphQL: graphIcon,
  WebSockets: websocketsIcon,
  PostgreSQL: postgresIcon,
  MongoDB: sqlIcon,
  Redis: redisIcon,
  SQLAlchemy: sqlAlchemyIcon,
  Firebase: jsIcon,
  LangChain: langchainIcon,
  'OpenAI API': chatgptIcon,
  'Prompt Engineering': promptIcon,
  RAG: ragIcon,
  'Vector DB': vectorDbIcon,
  Docker: dockerIcon,
  AWS: githubIcon,
  'GitHub Actions': githubIcon,
  Vercel: nextIcon,
  Linux: jsIcon,
  Git: gitIcon,
  'VS Code': vscodeIcon,
  Figma: figmaIcon,
  Postman: postmanIcon,
  Linear: jsIcon,
  ChatGPT: chatgptIcon,
};

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
    overflow: hidden;
  }

  .tech-card-icon img {
    width: 16px;
    height: 16px;
    object-fit: contain;
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
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .tech-skill-icon img {
    width: 14px;
    height: 14px;
    object-fit: contain;
    border-radius: 2px;
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
                  <div className="tech-card-icon">
                    <img src={category.icon} alt={`${category.title} icon`} />
                  </div>
                  <span className="tech-card-label">{category.title}</span>
                </div>
                <div className="tech-skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="tech-skill-item">
                      <span className="tech-skill-icon">
                        <img src={skillIconMap[skill.name] || jsIcon} alt={`${skill.name} icon`} />
                      </span>
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