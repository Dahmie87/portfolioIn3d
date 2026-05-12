import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, NotebookText, Sparkles, Timer, TriangleAlert } from "lucide-react";
import NavBar from "../components/navbar";
import { BlurReveal } from "../components/blur";
import { blogPosts } from "../blog/data";

const styles = `
  .blog-root {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 72px;
  }

  .blog-eyebrow {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.36);
    margin-bottom: 20px;
    font-weight: 600;
    display: block;
  }

  .blog-title {
    font-size: clamp(34px, 4.4vw, 58px);
    font-weight: 600;
    letter-spacing: -0.03em;
    color: rgba(2,6,23,0.95);
    line-height: 1.05;
    margin-bottom: 14px;
  }

  .blog-subtitle {
    font-size: 15px;
    line-height: 1.75;
    color: rgba(15,23,42,0.62);
    max-width: 670px;
    margin: 0 auto;
  }

  .blog-stats {
    margin-top: 44px;
    padding-top: 30px;
    border-top: 1px solid rgba(15,23,42,0.09);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .blog-stat-item {
    border: 1px solid rgba(15,23,42,0.08);
    border-radius: 12px;
    background: linear-gradient(150deg, rgba(255,255,255,0.96), rgba(248,250,252,0.96));
    padding: 12px 14px;
  }

  .blog-stat-label {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(15,23,42,0.45);
    margin-bottom: 6px;
    display: block;
    font-weight: 600;
  }

  .blog-stat-val {
    font-size: 18px;
    letter-spacing: -0.02em;
    color: rgba(15,23,42,0.9);
    font-weight: 700;
  }

  .blog-section-title {
    font-size: 11px;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: rgba(15,23,42,0.45);
    font-weight: 600;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .blog-section-title::after {
    content: '';
    height: 1px;
    flex: 1;
    background: rgba(15,23,42,0.1);
  }

  .blog-articles-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }

  .blog-article-card {
    border: 1px solid rgba(15,23,42,0.1);
    border-radius: 16px;
    padding: 22px;
    text-decoration: none;
    background:
      radial-gradient(circle at 95% 12%, rgba(59,130,246,0.07), transparent 40%),
      radial-gradient(circle at 8% 95%, rgba(14,165,233,0.06), transparent 42%),
      #ffffff;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
    display: flex;
    flex-direction: column;
    min-height: 220px;
  }

  .blog-article-card:hover {
    transform: translateY(-3px);
    border-color: rgba(15,23,42,0.2);
    box-shadow: 0 10px 24px rgba(15,23,42,0.12);
  }

  .blog-article-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }

  .blog-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    background: rgba(15,23,42,0.06);
    color: rgba(15,23,42,0.7);
    padding: 5px 9px;
    border-radius: 999px;
    font-weight: 700;
  }

  .blog-article-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
    color: rgba(2,6,23,0.95);
    margin-bottom: 10px;
  }

  .blog-article-desc {
    font-size: 14px;
    line-height: 1.72;
    color: rgba(15,23,42,0.67);
    flex-grow: 1;
    margin-bottom: 16px;
    white-space: pre-wrap;
  }

  .blog-article-footer {
    border-top: 1px solid rgba(15,23,42,0.09);
    padding-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .blog-article-cta {
    font-size: 12px;
    color: rgba(15,23,42,0.66);
    font-weight: 600;
  }

  .blog-empty-state {
    border: 1px solid rgba(15,23,42,0.1);
    border-radius: 20px;
    padding: 34px;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at 12% 18%, rgba(14,165,233,0.12), transparent 36%),
      radial-gradient(circle at 87% 87%, rgba(59,130,246,0.1), transparent 34%),
      linear-gradient(165deg, rgba(248,250,252,1), rgba(241,245,249,0.92));
  }

  .blog-empty-orb {
    position: absolute;
    width: 82px;
    height: 82px;
    border-radius: 20px;
    border: 1px solid rgba(15,23,42,0.08);
    background: rgba(255,255,255,0.72);
    color: rgba(15,23,42,0.34);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: floatOrb 4.8s ease-in-out infinite;
  }

  .blog-empty-orb svg {
    width: 34px;
    height: 34px;
  }

  .blog-empty-orb.a {
    left: 30px;
    top: 24px;
    transform: rotate(-11deg);
  }

  .blog-empty-orb.b {
    right: 42px;
    top: 50px;
    transform: rotate(9deg);
    animation-delay: 0.4s;
  }

  .blog-empty-orb.c {
    left: 20%;
    bottom: 26px;
    transform: rotate(-7deg);
    animation-delay: 0.8s;
  }

  .blog-empty-content {
    text-align: center;
    max-width: 540px;
    position: relative;
    z-index: 2;
  }

  .blog-empty-title {
    font-size: clamp(26px, 3vw, 36px);
    letter-spacing: -0.03em;
    color: rgba(2,6,23,0.94);
    margin-bottom: 10px;
    font-weight: 800;
  }

  .blog-empty-desc {
    font-size: 15px;
    line-height: 1.75;
    color: rgba(15,23,42,0.62);
  }

  .blog-empty-hint {
    margin-top: 16px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(15,23,42,0.56);
    border: 1px dashed rgba(15,23,42,0.2);
    border-radius: 999px;
    padding: 8px 12px;
  }

  .blog-loading,
  .blog-error {
    border: 1px solid rgba(15,23,42,0.1);
    border-radius: 16px;
    padding: 22px;
    background: rgba(248,250,252,0.72);
    color: rgba(15,23,42,0.78);
    line-height: 1.7;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .blog-loading-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #0ea5e9;
    box-shadow: 0 0 0 8px rgba(14,165,233,0.16);
    animation: pulseDot 1.15s ease-in-out infinite;
  }

  @keyframes pulseDot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0.78); opacity: 0.6; }
  }

  @keyframes floatOrb {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  @media (max-width: 900px) {
    .blog-articles-grid {
      grid-template-columns: 1fr;
    }

    .blog-stats {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    .blog-empty-state {
      min-height: 260px;
      padding: 20px;
    }

    .blog-empty-orb {
      width: 58px;
      height: 58px;
      border-radius: 14px;
    }

    .blog-empty-orb svg {
      width: 24px;
      height: 24px;
    }
  }
`;

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function estimateReadTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function excerpt(content: string) {
  const clean = content.replace(/\s+/g, " ").trim();
  if (clean.length <= 160) {
    return clean;
  }
  return `${clean.slice(0, 157)}...`;
}

export default function BlogPage() {
  const posts = blogPosts;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = useMemo(() => {
    const categories = new Set(posts.map((post) => post.category?.toLowerCase() || "general"));
    const totalWords = posts.reduce((sum, post) => {
      const count = post.content.trim().split(/\s+/).filter(Boolean).length;
      return sum + count;
    }, 0);
    const avgRead = posts.length ? Math.max(1, Math.round(totalWords / posts.length / 200)) : 0;

    return [
      { label: "Articles", val: `${posts.length}` },
      { label: "Topics", val: `${categories.size}` },
      { label: "Avg. Read", val: posts.length ? `${avgRead} mins` : "-" },
    ];
  }, [posts]);

  return (
    <div className="blog-root text-slate-900 min-h-screen">
      <style>{styles}</style>

      <div className="md:mx-10 my-2 bg-white rounded-4xl shadow-sm overflow-hidden md:overflow-visible md:rounded-4xl md:min-h-screen relative">
        <NavBar />

        <div className="px-6 md:px-8 py-16 md:py-20">
          <BlurReveal delay={0.1} className="blog-header">
            <span className="blog-eyebrow">Articles & Insights</span>
            <h1 className="blog-title">Stories, Builds, and Lessons</h1>
            <p className="blog-subtitle">
              Fresh entries from my backend source, mapped into a clean reading flow. Tap any post
              to open the full content page.
            </p>

            <div className="blog-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="blog-stat-item">
                  <span className="blog-stat-label">{stat.label}</span>
                  <span className="blog-stat-val">{stat.val}</span>
                </div>
              ))}
            </div>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              <p className="blog-section-title">Latest Articles</p>

              {posts.length > 0 && (
                <div className="blog-articles-grid">
                  {posts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="blog-article-card">
                      <div className="blog-article-meta">
                        <span className="blog-chip">
                          <CalendarDays size={12} /> {formatDate(post.created_at)}
                        </span>
                        <span className="blog-chip">{post.category || "general"}</span>
                      </div>

                      <h3 className="blog-article-title">{post.title || "Untitled post"}</h3>
                      <p className="blog-article-desc">{excerpt(post.content || "")}</p>

                      <div className="blog-article-footer">
                        <span className="blog-chip">
                          <Timer size={12} /> {estimateReadTime(post.content || "")}
                        </span>
                        <span className="blog-article-cta">Read full post</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {posts.length === 0 && (
                <div className="blog-empty-state">
                  <div className="blog-empty-orb a">
                    <NotebookText />
                  </div>
                  <div className="blog-empty-orb b">
                    <Sparkles />
                  </div>
                  <div className="blog-empty-orb c">
                    <CalendarDays />
                  </div>
                  <div className="blog-empty-content">
                    <h3 className="blog-empty-title">No posts yet, but this space is alive</h3>
                    <p className="blog-empty-desc">
                      Your blog is connected to backend successfully. Once a post lands in the posts
                      endpoint, it will appear here automatically with a full content view.
                    </p>
                    <span className="blog-empty-hint">
                      <Sparkles size={14} /> Waiting for first publish
                    </span>
                  </div>
                </div>
              )}
            </div>
          </BlurReveal>
        </div>
      </div>
    </div>
  );
}
