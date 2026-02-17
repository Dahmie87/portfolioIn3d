import { useRef, useState, useEffect } from "react";

// ─── Types ───────────────────────────────────────────
type Badge = {
  id: number;
  label: string;
  color: string;
  top: string;
  left: string;
  state: "in" | "out";
};

type Position = { top: string; left: string };

// ─── Constants ───────────────────────────────────────
const STACKS: string[] = [
  "React",
  "Python",
  "TypeScript",
  "Docker",
  "Next Js",
  "Fadtapi",
  "AI & Automation",
  "LLMs",
  "API & Testing",
  "GraphQL",
];

const COLORS: string[] = [
  "#61DAFB",
  "#3776AB",
  "#3178C6",
  "#2496ED",
  "#339933",
  "#CE412B",
  "#76B900",
  "#326CE5",
  "#EE4C2C",
  "#E535AB",
];

const POSITIONS: Position[] = [
  { top: "4%", left: "52%" },
  { top: "62%", left: "55%" },
  { top: "22%", left: "-14%" },
  { top: "70%", left: "8%" },
];

// ─── Hook ────────────────────────────────────────────
function useLoopingBadges(): Badge[] {
  const [badges, setBadges] = useState<Badge[]>([]);
  const counter = useRef<number>(0);
  const posIdx = useRef<number>(0);

  useEffect(() => {
    const spawn = (): void => {
      const id = counter.current++;
      const pos = POSITIONS[posIdx.current % POSITIONS.length];
      posIdx.current++;
      const si = Math.floor(Math.random() * STACKS.length);

      setBadges((prev) => [
        ...prev,
        { id, label: STACKS[si], color: COLORS[si], ...pos, state: "in" },
      ]);

      setTimeout(() => {
        setBadges((prev) =>
          prev.map((x) => (x.id === id ? { ...x, state: "out" as const } : x)),
        );
      }, 2600);

      setTimeout(() => {
        setBadges((prev) => prev.filter((x) => x.id !== id));
      }, 3200);
    };

    spawn();
    const t = setInterval(spawn, 950);
    return () => clearInterval(t);
  }, []);

  return badges;
}

// ─── Abstract Shape ──────────────────────────────────
export default function AbstractShape(): React.ReactElement {
  const badges = useLoopingBadges();

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <style>{`
        @keyframes spin-cw   { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes morph-out {
          0%,100% { border-radius: 54% 46% 50% 50% / 50% 50% 46% 54% }
          25%     { border-radius: 46% 54% 54% 46% / 54% 46% 50% 50% }
          50%     { border-radius: 50% 50% 46% 54% / 46% 54% 54% 46% }
          75%     { border-radius: 54% 46% 50% 50% / 54% 46% 46% 54% }
        }
        @keyframes float-sh { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes scroll-b {
          0%,100% { transform: translateX(-50%) translateY(0px) }
          50%     { transform: translateX(-50%) translateY(4px) }
        }
        @keyframes badge-in  { from { opacity:0; transform: translateY(5px) scale(.88) } to { opacity:1; transform: translateY(0) scale(1) } }
        @keyframes badge-out { from { opacity:1; transform: translateY(0) scale(1) } to { opacity:0; transform: translateY(-5px) scale(.88) } }
        .sc-wrap { position:absolute; bottom:12px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:3px; animation:scroll-b 1.8s ease-in-out infinite; }
        .sc-lbl  { font-family:monospace; font-size:6px; letter-spacing:.2em; text-transform:uppercase; color:rgba(30,30,30,.35); white-space:nowrap; }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          animation: "float-sh 7s ease-in-out infinite",
        }}
      >
        {/* 3 layered radial grays */}
        {([280, 200, 130] as number[]).map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: s,
              height: s,
              marginTop: -s / 2,
              marginLeft: -s / 2,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(0,0,0,${(0.06 + i * 0.032).toFixed(3)}) 0%, transparent 65%)`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* outer morphing shape */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 148,
            height: 148,
            marginTop: -74,
            marginLeft: -74,
            border: "1.6px solid rgba(30,30,30,0.15)",
            background: "transparent",
            animation: "morph-out 7s ease-in-out infinite",
          }}
        />

        {/* inner rotating rounded square */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 96,
            height: 96,
            marginTop: -48,
            marginLeft: -48,
            border: "1.3px solid rgba(30,30,30,0.45)",
            borderRadius: "20px",
            background: "transparent",
            animation: "spin-cw 14s linear infinite",
          }}
        >
          <div className="sc-wrap">
            <span className="sc-lbl">scroll</span>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path
                d="M1 1L4.5 5L8 1"
                stroke="rgba(30,30,30,.35)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* looping tech badges */}
        {badges.map((b) => (
          <div
            key={b.id}
            style={{
              position: "absolute",
              top: b.top,
              left: b.left,
              background: "white",
              border: `1px solid ${b.color}28`,
              borderRadius: 6,
              padding: "3px 9px",
              fontSize: 12,
              fontFamily: "monospace",
              color: b.color,
              letterSpacing: "0.06em",
              boxShadow: `0 2px 8px ${b.color}12`,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              animation:
                b.state === "out"
                  ? "badge-out .5s ease forwards"
                  : "badge-in .4s ease forwards",
            }}
          >
            {b.label}
          </div>
        ))}
      </div>
    </div>
  );
}
