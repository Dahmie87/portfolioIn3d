
import React from "react";
import type { CSSProperties } from "react";

const blurKeyframes = `
  @keyframes blur-in {
    from {
      opacity: 0;
      filter: blur(12px);
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
      transform: translateY(0px);
    }
  }
  .blur-reveal {
    opacity: 0;
    filter: blur(12px);
    transform: translateY(8px);
    will-change: transform, filter, opacity;
  }
  .blur-reveal.is-visible {
    animation: blur-in 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  .blur-word {
    display: inline-block;
    opacity: 0;
    animation: blur-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;

/* ─────────────────────────────────────────
   BlurRevealStyles
   Add once at your layout / page root
───────────────────────────────────────── */
export function BlurRevealStyles() {
  return <style dangerouslySetInnerHTML={{ __html: blurKeyframes }} />;
}

/* ─────────────────────────────────────────
   BlurReveal
   Wraps any child — fades + unblurs on mount
───────────────────────────────────────── */
interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function BlurReveal({
  children,
  delay = 0,
  className = "",
  style,
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: BlurRevealProps) {
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <div
      ref={elementRef}
      className={`blur-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   BlurText
   Splits into words, staggers each one
───────────────────────────────────────── */
interface BlurTextProps {
  text: string;
  baseDelay?: number;
  stagger?: number;
  className?: string;
  style?: CSSProperties;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function BlurText({
  text,
  baseDelay = 0,
  stagger = 0.07,
  className = "",
  style,
  tag = "h1",
}: BlurTextProps) {
  const words = text.split(" ");

  const content = words.map((word, i) => (
    <React.Fragment key={i}>
      <span
        className="blur-word"
        style={{ animationDelay: `${(baseDelay + i * stagger).toFixed(2)}s` }}
      >
        {word}
      </span>
      {i < words.length - 1 && " "}
    </React.Fragment>
  ));

  if (tag === "h1") return <h1 className={className} style={style}>{content}</h1>;
  if (tag === "h2") return <h2 className={className} style={style}>{content}</h2>;
  if (tag === "h3") return <h3 className={className} style={style}>{content}</h3>;
  if (tag === "h4") return <h4 className={className} style={style}>{content}</h4>;
  if (tag === "p")  return <p  className={className} style={style}>{content}</p>;
  return               <span className={className} style={style}>{content}</span>;
}