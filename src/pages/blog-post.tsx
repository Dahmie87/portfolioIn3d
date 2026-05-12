import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Hash, Timer } from "lucide-react";
import NavBar from "../components/navbar";
import { BlurReveal } from "../components/blur";
import { blogPosts } from "../blog/data";

const styles = `
  .blog-post-root {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .blog-post-shell {
    max-width: 900px;
    margin: 0 auto;
  }

  .blog-post-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    border: 1px solid rgba(15,23,42,0.16);
    color: rgba(15,23,42,0.8);
    border-radius: 999px;
    padding: 9px 14px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 22px;
    transition: all 0.2s ease;
  }

  .blog-post-back:hover {
    border-color: rgba(15,23,42,0.34);
    color: rgba(2,6,23,0.96);
    transform: translateY(-1px);
  }

  .blog-post-header {
    border: 1px solid rgba(15,23,42,0.1);
    border-radius: 20px;
    background:
      radial-gradient(circle at 96% 10%, rgba(14,165,233,0.12), transparent 42%),
      #ffffff;
    padding: 28px;
    margin-bottom: 22px;
  }

  .blog-post-title {
    font-size: clamp(28px, 4vw, 46px);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.08;
    color: rgba(2,6,23,0.95);
    margin-bottom: 14px;
  }

  .blog-post-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .blog-post-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 1px solid rgba(15,23,42,0.1);
    background: rgba(248,250,252,0.9);
    border-radius: 999px;
    padding: 6px 10px;
    color: rgba(15,23,42,0.73);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .blog-post-body {
    border: 1px solid rgba(15,23,42,0.1);
    border-radius: 20px;
    padding: 30px;
    background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98));
  }

  .blog-post-content {
    color: rgba(15,23,42,0.86);
    font-size: 16px;
    line-height: 1.95;
    white-space: pre-wrap;
  }

  .blog-post-state {
    border: 1px solid rgba(15,23,42,0.1);
    border-radius: 16px;
    padding: 20px;
    background: rgba(248,250,252,0.7);
    color: rgba(15,23,42,0.76);
    line-height: 1.75;
  }

  @media (max-width: 768px) {
    .blog-post-header,
    .blog-post-body {
      padding: 20px;
      border-radius: 14px;
    }

    .blog-post-content {
      font-size: 15px;
      line-height: 1.82;
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

export default function BlogPostPage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const targetId = Number(id);
  const post = Number.isNaN(targetId)
    ? null
    : blogPosts.find((item) => item.id === targetId) || null;
  const error = !id || Number.isNaN(targetId) ? "Invalid post id." : post ? "" : "Post not found.";
  const isLoading = false;

  const readTime = useMemo(() => {
    if (!post) {
      return "-";
    }
    return estimateReadTime(post.content || "");
  }, [post]);

  return (
    <div className="blog-post-root text-slate-900 min-h-screen">
      <style>{styles}</style>

      <div className="md:mx-10 my-2 bg-white rounded-4xl shadow-sm overflow-hidden md:overflow-visible md:rounded-4xl md:min-h-screen relative">
        <NavBar />

        <div className="px-6 md:px-8 py-16 md:py-20">
          <BlurReveal delay={0.1}>
            <div className="blog-post-shell">
              <Link to="/blog" className="blog-post-back">
                <ArrowLeft size={14} /> Back to blog
              </Link>

              {isLoading && <div className="blog-post-state">Loading full article...</div>}

              {!isLoading && error && <div className="blog-post-state">{error}</div>}

              {!isLoading && !error && post && (
                <>
                  <div className="blog-post-header">
                    <h1 className="blog-post-title">{post.title || "Untitled post"}</h1>
                    <div className="blog-post-meta">
                      <span className="blog-post-chip">
                        <CalendarDays size={12} /> {formatDate(post.created_at)}
                      </span>
                      <span className="blog-post-chip">
                        <Hash size={12} /> {post.category || "general"}
                      </span>
                      <span className="blog-post-chip">
                        <Timer size={12} /> {readTime}
                      </span>
                    </div>
                  </div>

                  <article className="blog-post-body">
                    <div className="blog-post-content">{post.content}</div>
                  </article>
                </>
              )}
            </div>
          </BlurReveal>
        </div>
      </div>
    </div>
  );
}
