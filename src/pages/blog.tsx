
import NavBar from "../components/navbar";
import { BlurReveal } from "../components/blur";

const stats = [
  { label: "Articles", val: "24+" },
  { label: "Topics", val: "15+ areas" },
  { label: "Avg. Read", val: "7 minutes" },
];

const articles = [
  {
    date: "Feb 28, 2024",
    tag: "TYPESCRIPT",
    title: "Type-Safe Navigation with Advanced Generics",
    description:
      "Exploring the boundaries of TypeScript's type system to create a zero-runtime-error navigation architecture for enterprise applications.",
    readTime: "6 min read",
  },
  {
    date: "Feb 15, 2024",
    tag: "REACT",
    title: 'The Performance Cost of "Clean Code"',
    description:
      "When over-abstraction becomes a liability. A deep dive into React re-renders and the hidden costs of generic component patterns.",
    readTime: "12 min read",
  },
  {
    date: "Jan 22, 2024",
    tag: "DESIGN SYSTEMS",
    title: "Beyond Light and Dark: Semantic Tonal Palettes",
    description:
      "Moving past hex codes to semantic color tokens that adapt to accessibility requirements and brand evolution automatically.",
    readTime: "8 min read",
  },
  {
    date: "Jan 05, 2024",
    tag: "NEXT.JS",
    title: "Server Actions: The End of the API Layer?",
    description:
      "Exploring how Next.js 14 and React Server Components are redefining the boundaries between client and server logic.",
    readTime: "5 min read",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');
  
  .blog-root * { font-family: 'DM Sans', sans-serif; }

  .blog-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .blog-eyebrow {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.35);
    margin-bottom: 20px;
    font-weight: 500;
    display: block;
  }

  .blog-title {
    font-size: clamp(36px, 4vw, 56px);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: rgba(0,0,0,0.9);
    margin-bottom: 16px;
  }

  .blog-subtitle {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.75;
    color: rgba(0,0,0,0.55);
    max-width: 600px;
    margin: 0 auto;
  }

  .blog-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 48px;
    padding-top: 48px;
    border-top: 1px solid rgba(0,0,0,0.08);
  }

  @media (max-width: 768px) {
    .blog-stats {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .blog-stat-item {
    text-align: center;
  }

  .blog-stat-label {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.3);
    margin-bottom: 6px;
    font-weight: 500;
    display: block;
  }

  .blog-stat-val {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0,0,0,0.85);
    letter-spacing: -0.01em;
  }

  .blog-section-title {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.35);
    font-weight: 500;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .blog-section-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(0,0,0,0.09);
  }

  .blog-articles-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    .blog-articles-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .blog-article-card {
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 14px;
    padding: 28px;
    background: #fff;
    transition: all 0.18s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  .blog-article-card:hover {
    border-color: rgba(0,0,0,0.18);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .blog-article-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .blog-article-date {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.35);
    font-weight: 500;
  }

  .blog-article-tag {
    display: inline-block;
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.04);
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: 600;
  }

  .blog-article-title {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: rgba(0,0,0,0.88);
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .blog-article-card:hover .blog-article-title {
    color: rgba(0,0,0,0.95);
  }

  .blog-article-desc {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.65;
    color: rgba(0,0,0,0.55);
    margin-bottom: 16px;
    flex-grow: 1;
  }

  .blog-article-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid rgba(0,0,0,0.07);
  }

  .blog-article-readtime {
    font-size: 12px;
    font-weight: 500;
    color: rgba(0,0,0,0.4);
  }

  .blog-article-cta {
    font-size: 12px;
    font-weight: 500;
    color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    gap: 4px;
    transition: color 0.18s;
  }

  .blog-article-card:hover .blog-article-cta {
    color: rgba(0,0,0,0.85);
  }

  .blog-newsletter {
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 14px;
    padding: 40px;
    background: linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    .blog-newsletter {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 28px;
    }
  }

  .blog-newsletter-title {
    font-size: 20px;
    font-weight: 600;
    color: rgba(0,0,0,0.88);
    margin-bottom: 8px;
  }

  .blog-newsletter-desc {
    font-size: 13px;
    line-height: 1.65;
    color: rgba(0,0,0,0.55);
  }

  .blog-newsletter-form {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 768px) {
    .blog-newsletter-form {
      flex-direction: column;
    }
  }

  .blog-newsletter-input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 10px;
    font-size: 14px;
    font-family: inherit;
    background: rgba(255,255,255,0.6);
    color: rgba(0,0,0,0.85);
    transition: border-color 0.2s ease;
  }

  .blog-newsletter-input::placeholder {
    color: rgba(0,0,0,0.35);
  }

  .blog-newsletter-input:focus {
    outline: none;
    border-color: rgba(0,0,0,0.28);
    background: rgba(255,255,255,0.9);
  }

  .blog-newsletter-btn {
    padding: 12px 24px;
    background: rgba(0,0,0,0.88);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    white-space: nowrap;
  }

  .blog-newsletter-btn:hover {
    background: rgba(0,0,0,1);
    transform: translateY(-1px);
  }

  .blog-load-more {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    border-top: 1px solid rgba(0,0,0,0.08);
  }

  .blog-load-more-btn {
    padding: 12px 28px;
    border: 1px solid rgba(0,0,0,0.18);
    border-radius: 10px;
    background: transparent;
    font-size: 13px;
    font-weight: 500;
    color: rgba(0,0,0,0.7);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
  }

  .blog-load-more-btn:hover {
    border-color: rgba(0,0,0,0.3);
    color: rgba(0,0,0,0.88);
    background: rgba(0,0,0,0.02);
  }
`;

export default function BlogPage() {
  return (
    <div className="blog-root text-slate-900 min-h-screen">
      <style>{styles}</style>
      
      <div className="md:mx-10 my-2 bg-white rounded-4xl shadow-sm overflow-hidden md:overflow-visible md:rounded-4xl md:min-h-screen relative">
        <NavBar />

        <div className="px-6 md:px-8 py-16 md:py-20">
          {/* Header */}
          <BlurReveal delay={0.1} className="blog-header">
            <span className="blog-eyebrow">Articles & Insights</span>
                        <div className="blog-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="blog-stat-item">
                  <span className="blog-stat-label">{stat.label}</span>
                  <span className="blog-stat-val">{stat.val}</span>
                </div>
              ))}
            </div>
          </BlurReveal>

          {/* Articles Section */}
          <BlurReveal delay={0.4}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <p className="blog-section-title">Latest Articles</p>

              <div className="blog-articles-grid">
                {articles.map((article, idx) => (
                  <div key={idx} className="blog-article-card">
                    <div className="blog-article-meta">
                      <span className="blog-article-date">{article.date}</span>
                      <span className="blog-article-tag">{article.tag}</span>
                    </div>
                    <h3 className="blog-article-title">{article.title}</h3>
                    <p className="blog-article-desc">{article.description}</p>
                    <div className="blog-article-footer">
                      <span className="blog-article-readtime">{article.readTime}</span>
                      <span className="blog-article-cta">Read ↗</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="blog-newsletter">
                <div>
                  <h3 className="blog-newsletter-title">Subscribe for updates</h3>
                  <p className="blog-newsletter-desc">
                    Get notified when I publish new articles about full-stack development, AI integration, and system design.
                  </p>
                </div>
                <div>
                  <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="blog-newsletter-input"
                      required
                    />
                    <button type="submit" className="blog-newsletter-btn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* Load More */}
              <div className="blog-load-more">
                <button className="blog-load-more-btn">Load more articles</button>
              </div>
            </div>
          </BlurReveal>
        </div>
      </div>
    </div>
  );
}