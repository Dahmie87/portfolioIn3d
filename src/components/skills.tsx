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

interface TechStack {
  name: string;
  className: string;
  image: string;
  link: string;
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
    year: '2024',
    role: 'Senior Full-Stack Engineer',
    company: 'Current: Building AI Products',
    description:
      'Leading development of production-grade AI applications with focus on scalability, system design, and full-stack implementation across modern tech stack.',
  },
  {
    year: '2022 - 2024',
    role: 'Full-Stack Developer',
    company: 'Digital & Tech Companies',
    description:
      'Built and shipped multiple web applications and APIs, working across frontend frameworks, backend services, and infrastructure. Strong focus on code quality and performance.',
  },
  {
    year: '2019 - 2022',
    role: 'Learning & Foundation',
    company: 'Self-taught & University',
    description:
      'Completed CS degree while building side projects, learning full-stack practices, and developing deep understanding of software architecture and design patterns.',
  },
];

const techStackData: TechStack[] = [
  {
    name: 'React',
    className: 'react',
    image: 'https://images.unsplash.com/photo-1633356715641-c8da40b20d4d?w=200&h=200&fit=crop',
    link: 'https://react.dev',
  },
  {
    name: 'TypeScript',
    className: 'typescript',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57e039656e?w=200&h=200&fit=crop',
    link: 'https://www.typescriptlang.org',
  },
  {
    name: 'NextJS',
    className: 'nextjs',
    image: 'https://images.unsplash.com/photo-1633356315693-e5e409262788?w=200&h=200&fit=crop',
    link: 'https://nextjs.org',
  },
  {
    name: 'Python',
    className: 'python',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=200&h=200&fit=crop',
    link: 'https://python.org',
  },
  {
    name: 'FastAPI',
    className: 'fastapi',
    image: 'https://images.unsplash.com/photo-1627873649417-af36141a7f23?w=200&h=200&fit=crop',
    link: 'https://fastapi.tiangolo.com',
  },
  {
    name: 'Django',
    className: 'django',
    image: 'https://images.unsplash.com/photo-1633356715641-c8da40b20d4d?w=200&h=200&fit=crop',
    link: 'https://djangoproject.com',
  },
  {
    name: 'PostgreSQL',
    className: 'postgres',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop',
    link: 'https://postgresql.org',
  },
  {
    name: 'Docker',
    className: 'docker',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
    link: 'https://docker.com',
  },
  {
    name: 'AWS',
    className: 'aws',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57e039656e?w=200&h=200&fit=crop',
    link: 'https://aws.amazon.com',
  },
  {
    name: 'LangChain',
    className: 'langchain',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8d88e5a9a5c9e8e8e?w=200&h=200&fit=crop',
    link: 'https://langchain.com',
  },
  {
    name: 'Git',
    className: 'git',
    image: 'https://images.unsplash.com/photo-1633356315693-e5e409262788?w=200&h=200&fit=crop',
    link: 'https://git-scm.com',
  },
  {
    name: 'MongoDB',
    className: 'mongodb',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop',
    link: 'https://mongodb.com',
  },
];

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .skills-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px;
    background: #fafafa;
  }

  .section-header {
    margin-bottom: 80px;
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
    font-size: clamp(40px, 4.5vw, 58px);
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
    margin-bottom: 80px;
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
    margin: 80px 0;
  }

  .experience-section {
    margin-bottom: 80px;
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

  .tech-section-title {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.35);
    margin-bottom: 32px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .tech-section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
  }

  .tech-stack-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
  }

  .tech-card {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
  }

  .tech-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.02));
    pointer-events: none;
  }

  .tech-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .tech-card:hover .tech-image {
    transform: scale(1.1);
  }

  .tech-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .tech-card:hover .tech-overlay {
    opacity: 1;
  }

  .tech-name {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    letter-spacing: -0.01em;
    position: relative;
    z-index: 2;
  }

  .tech-card.react { background: linear-gradient(135deg, #61dafb22 0%, #61dafb11 100%); }
  .tech-card.typescript { background: linear-gradient(135deg, #3178c622 0%, #3178c611 100%); }
  .tech-card.nextjs { background: linear-gradient(135deg, #00000022 0%, #00000011 100%); }
  .tech-card.python { background: linear-gradient(135deg, #3776ab22 0%, #3776ab11 100%); }
  .tech-card.fastapi { background: linear-gradient(135deg, #00985022 0%, #00985011 100%); }
  .tech-card.django { background: linear-gradient(135deg, #09223622 0%, #09223611 100%); }
  .tech-card.postgres { background: linear-gradient(135deg, #33658a22 0%, #33658a11 100%); }
  .tech-card.docker { background: linear-gradient(135deg, #2496ed22 0%, #2496ed11 100%); }
  .tech-card.aws { background: linear-gradient(135deg, #ff990022 0%, #ff990011 100%); }
  .tech-card.langchain { background: linear-gradient(135deg, #06a70e22 0%, #06a70e11 100%); }
  .tech-card.git { background: linear-gradient(135deg, #f1502f22 0%, #f1502f11 100%); }
  .tech-card.mongodb { background: linear-gradient(135deg, #13aa5222 0%, #13aa5211 100%); }

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

    .tech-stack-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .section-title {
      font-size: 32px;
    }
  }

  @media (max-width: 480px) {
    .tech-stack-grid {
      grid-template-columns: repeat(3, 1fr);
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

        <div className="divider"></div>

        {/* Tech Stack Section */}
        <div>
          <p className="tech-section-title">Technology Stack</p>
          <div className="tech-stack-grid">
            {techStackData.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`tech-card ${tech.className}`}
                title={tech.name}
              >
                <img src={tech.image} alt={tech.name} className="tech-image" />
                <div className="tech-overlay">
                  <span className="tech-name">{tech.name}</span>
                  <span style={{ color: '#fff', fontSize: '14px' }}>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsExperienceSection;