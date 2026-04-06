import { useEffect } from "react";
import { Download } from "lucide-react";
import NavBar from "../components/navbar";
import resumeFile from "../assets/omotayo's-resume.pdf";

const styles = `
  .resume-root {
    font-family: Georgia, 'Times New Roman', Times, serif;
    min-height: 100vh;
    background: #f2f2f2;
  }

  .resume-controls {
    max-width: 860px;
    margin: 0 auto 16px auto;
    display: flex;
    justify-content: flex-end;
  }

  .resume-download-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #111;
    text-decoration: none;
    color: #111;
    background: #fff;
    border-radius: 0;
    padding: 9px 12px;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 600;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .resume-download-btn:hover {
    background: #111;
    color: #fff;
  }

  .resume-page {
    width: min(860px, 100%);
    margin: 0 auto;
    background: #fff;
    border: 1px solid #d3d3d3;
    box-shadow: 0 10px 22px rgba(0,0,0,0.08);
    padding: 26px 32px;
    color: #111;
  }

  .name {
    font-size: 50px;
    letter-spacing: 0.01em;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 4px 0;
    text-align: center;
  }

  .contact-row {
    text-align: center;
    font-size: 28px;
    margin-bottom: 14px;
  }

  .contact-link {
    color: #111;
    text-decoration: underline;
  }

  .section {
    margin-top: 14px;
  }

  .section-header {
    font-size: 33px;
    font-variant: small-caps;
    border-bottom: 1px solid #111;
    margin: 0 0 6px 0;
    line-height: 1.05;
  }

  .entry {
    margin-bottom: 8px;
  }

  .entry-line {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
  }

  .entry-title {
    font-size: 33px;
    font-weight: 700;
    margin: 0;
  }

  .entry-location,
  .entry-date {
    font-size: 33px;
    margin: 0;
  }

  .entry-subtitle {
    font-size: 31px;
    font-style: italic;
    margin: 0;
  }

  .entry-submeta {
    font-size: 30px;
    font-style: italic;
    margin: 0;
    text-align: right;
  }

  .bullet-list {
    margin: 5px 0 0 28px;
    padding: 0;
  }

  .bullet-list li {
    font-size: 31px;
    line-height: 1.28;
    margin-bottom: 2px;
  }

  .resume-content {
    max-height: calc(100vh - 220px);
    overflow: auto;
  }

  @media (max-width: 1100px) {
    .name { font-size: 34px; }
    .contact-row { font-size: 16px; }
    .section-header { font-size: 20px; }
    .entry-title, .entry-location, .entry-date { font-size: 18px; }
    .entry-subtitle, .entry-submeta { font-size: 16px; }
    .bullet-list li { font-size: 15px; }
  }

  @media (max-width: 840px) {
    .resume-root {
      padding-top: 12px;
    }

    .resume-page {
      padding: 18px 14px;
    }

    .resume-controls {
      justify-content: flex-start;
    }
  }

  @media print {
    .resume-root {
      background: #fff;
      padding: 0 !important;
    }

    .resume-controls,
    .nav-root {
      display: none;
    }

    .resume-page {
      border: none;
      box-shadow: none;
      width: 100%;
      max-width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`;

export default function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resume-root">
      <style>{styles}</style>

      <NavBar />

      <div className="px-4 md:px-8 py-20 md:py-24">
        <div className="resume-controls">
          <a href={resumeFile} download="omotayo-resume.pdf" className="resume-download-btn">
            <Download size={14} /> Download CV
          </a>
        </div>

        <article className="resume-page" aria-label="Resume document preview">
          <div className="resume-content">
            <h1 className="name">Damilare Omotayo</h1>

            <p className="contact-row">
              +234-000-0000 | <a className="contact-link" href="mailto:omotayodamilare07@gmail.com">omotayodamilare07@gmail.com</a> |
              {' '}<a className="contact-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/damilare</a> |
              {' '}<a className="contact-link" href="https://github.com/Dahmie87" target="_blank" rel="noopener noreferrer">github.com/Dahmie87</a>
            </p>

            <section className="section">
              <h2 className="section-header">Education</h2>
              <div className="entry">
                <div className="entry-line">
                  <p className="entry-title">Southwestern University</p>
                  <p className="entry-location">Georgetown, TX</p>
                </div>
                <div className="entry-line">
                  <p className="entry-subtitle">Bachelor of Arts in Computer Science, Minor in Business</p>
                  <p className="entry-submeta">Aug. 2018 - May 2021</p>
                </div>
              </div>
              <div className="entry">
                <div className="entry-line">
                  <p className="entry-title">Blinn College</p>
                  <p className="entry-location">Bryan, TX</p>
                </div>
                <div className="entry-line">
                  <p className="entry-subtitle">Associate's in Liberal Arts</p>
                  <p className="entry-submeta">Aug. 2014 - May 2018</p>
                </div>
              </div>
            </section>

            <section className="section">
              <h2 className="section-header">Experience</h2>

              <div className="entry">
                <div className="entry-line">
                  <p className="entry-title">Undergraduate Research Assistant</p>
                  <p className="entry-date">June 2020 - Present</p>
                </div>
                <div className="entry-line">
                  <p className="entry-subtitle">Texas A&M University</p>
                  <p className="entry-submeta">College Station, TX</p>
                </div>
                <ul className="bullet-list">
                  <li>Developed REST API services using FastAPI and PostgreSQL for student data workflows.</li>
                  <li>Built full-stack analytics views with React and Flask for classroom activity insights.</li>
                  <li>Explored collaborative coding analysis for practical classroom evaluation use cases.</li>
                </ul>
              </div>

              <div className="entry">
                <div className="entry-line">
                  <p className="entry-title">Information Technology Support Specialist</p>
                  <p className="entry-date">Sep. 2018 - Present</p>
                </div>
                <div className="entry-line">
                  <p className="entry-subtitle">Southwestern University</p>
                  <p className="entry-submeta">Georgetown, TX</p>
                </div>
                <ul className="bullet-list">
                  <li>Supported campus-wide computing systems and daily technical issue resolution.</li>
                  <li>Troubleshot network and user-level problems for students, faculty, and staff.</li>
                  <li>Maintained inventory and lifecycle operations for lab and classroom hardware.</li>
                </ul>
              </div>

              <div className="entry">
                <div className="entry-line">
                  <p className="entry-title">Artificial Intelligence Research Assistant</p>
                  <p className="entry-date">May 2019 - July 2019</p>
                </div>
                <div className="entry-line">
                  <p className="entry-subtitle">Southwestern University</p>
                  <p className="entry-submeta">Georgetown, TX</p>
                </div>
                <ul className="bullet-list">
                  <li>Researched dungeon generation methods inspired by adventure game design principles.</li>
                  <li>Built Java prototypes and contributed 50K+ lines to an established project codebase.</li>
                  <li>Presented findings from user studies at computational intelligence sessions.</li>
                </ul>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
