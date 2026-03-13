import { useRef, useState, useEffect } from "react";

type Badge = {
  id: number;
  label: string;
  color: string;
  posKey: number;
  state: "in" | "out";
};

// Container is 280×280, center is 140×140
// Badges are ~80px wide × 24px tall
// Positions cluster tightly around the central shape
const POSITIONS = [
  { top: 30,  left: 160 }, // top-right
  { top: 30,  left: 40  }, // top-left
  { top: 225, left: 160 }, // bottom-right
  { top: 225, left: 40  }, // bottom-left
] as const;

const STACKS = [
  "Kubernetes", "RAG", "MCP", "n8n", "CI/CD",
  "oLLAMA", "VectorDB", "LLMs", "LangChain", "GraphQL",
];

const COLORS = [
  "#61DAFB", "#3776AB", "#3178C6", "#2496ED", "#339933",
  "#CE412B", "#76B900", "#326CE5", "#EE4C2C", "#E535AB",
];

function useLoopingBadges(): Badge[] {
  const [badges, setBadges] = useState<Badge[]>([]);
  const counter  = useRef(0);
  const occupied = useRef<Set<number>>(new Set());

  useEffect(() => {
    const spawn = () => {
      const free = ([0, 1, 2, 3] as const).filter(
        (i) => !occupied.current.has(i)
      );
      if (free.length === 0) return;

      const posKey = free[Math.floor(Math.random() * free.length)];
      const si     = Math.floor(Math.random() * STACKS.length);
      const id     = counter.current++;

      occupied.current.add(posKey);
      setBadges((prev) => [...prev, { id, label: STACKS[si], color: COLORS[si], posKey, state: "in" }]);

      setTimeout(() => {
        setBadges((prev) => prev.map((x) => x.id === id ? { ...x, state: "out" as const } : x));
      }, 2400);

      setTimeout(() => {
        occupied.current.delete(posKey);
        setBadges((prev) => prev.filter((x) => x.id !== id));
      }, 2900);
    };

    spawn();
    const t = setInterval(spawn, 800);
    return () => clearInterval(t);
  }, []);

  return badges;
}

export default function AbstractShape(): React.ReactElement {
  const badges = useLoopingBadges();

  return (
    <div
      style={{
        position: "relative",
        width: 280,
        height: 280,
        flexShrink: 0,
      }}
    >
      <style>{`
        @keyframes spin-cw   { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes morph-out {
          0%,100% { border-radius: 54% 46% 50% 50% / 50% 50% 46% 54% }
          25%     { border-radius: 46% 54% 54% 46% / 54% 46% 50% 50% }
          50%     { border-radius: 50% 50% 46% 54% / 46% 54% 54% 46% }
          75%     { border-radius: 54% 46% 50% 50% / 54% 46% 46% 54% }
        }
        @keyframes float-sh  { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        @keyframes scroll-b  {
          0%,100% { transform: translateX(-50%) translateY(0px) }
          50%     { transform: translateX(-50%) translateY(4px)  }
        }
        @keyframes badge-in  { from { opacity:0; transform:translateY(6px)  scale(.86) } to { opacity:1; transform:translateY(0)   scale(1)   } }
        @keyframes badge-out { from { opacity:1; transform:translateY(0)    scale(1)   } to { opacity:0; transform:translateY(-6px) scale(.86) } }
        .sc-wrap { position:absolute; bottom:10px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:3px; animation:scroll-b 1.8s ease-in-out infinite; }
        .sc-lbl  { font-family:monospace; font-size:6px; letter-spacing:.2em; text-transform:uppercase; color:rgba(30,30,30,.35); white-space:nowrap; }
      `}</style>

      {/* ── central shape group, floats as one unit ── */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          animation: "float-sh 7s ease-in-out infinite",
        }}
      >
        {/* radial glow layers */}
        {([280, 200, 130] as const).map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: s, height: s,
              marginTop: -s / 2, marginLeft: -s / 2,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(0,0,0,${(0.06 + i * 0.032).toFixed(3)}) 0%, transparent 65%)`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* outer morphing border */}
        <div
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: 148, height: 148,
            marginTop: -74, marginLeft: -74,
            border: "1.6px solid rgba(30,30,30,0.15)",
            background: "transparent",
            animation: "morph-out 7s ease-in-out infinite",
          }}
        />

        {/* inner spinning square */}
        <div
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: 96, height: 96,
            marginTop: -48, marginLeft: -48,
            border: "1.3px solid rgba(30,30,30,0.45)",
            borderRadius: 20,
            background: "transparent",
            animation: "spin-cw 14s linear infinite",
          }}
        >
          <div className="sc-wrap">
            <span className="sc-lbl">scroll</span>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M1 1L4.5 5L8 1" stroke="rgba(30,30,30,.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── badges sit outside the float wrapper so they don't move ── */}
      {badges.map((b) => {
        const pos = POSITIONS[b.posKey];
        return (
          <div
            key={b.id}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              background: "white",
              border: `1px solid ${b.color}35`,
              borderRadius: 6,
              padding: "3px 9px",
              fontSize: 11,
              fontFamily: "monospace",
              color: b.color,
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              zIndex: 10,
              animation: b.state === "out"
                ? "badge-out .5s ease forwards"
                : "badge-in .4s ease forwards",
            }}
          >
            {b.label}
          </div>
        );
      })}
    </div>
  );
}