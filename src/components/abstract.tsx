import { useRef, useState, useEffect } from "react";

type BadgeState = "in" | "out";

type Badge = {
  id: number;
  label: string;
  color: string;
  posKey: number;
  state: BadgeState;
};

const POSITIONS = [
  { top: 30,  left: 160 },
  { top: 30,  left: 40  },
  { top: 225, left: 160 },
  { top: 225, left: 40  },
] as const;

const STACKS = [
  "Kubernetes", "RAG", "MCP", "n8n", "CI/CD",
  "oLLAMA", "VectorDB", "LLMs", "LangChain", "GraphQL",
];

const COLORS = [
  "#61DAFB", "#3776AB", "#3178C6", "#2496ED", "#339933",
  "#CE412B", "#76B900", "#326CE5", "#EE4C2C", "#E535AB",
];

const ENTER_MS    = 400;
const EXIT_MS     = 500;
const LIFE_MIN    = 1400;
const LIFE_MAX    = 2600;
const RESPAWN_MIN = 300;
const RESPAWN_MAX = 1200;

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function AbstractShape(): React.ReactElement {
  const [badges, setBadges] = useState<Badge[]>([]);
  const occupied   = useRef<Set<number>>(new Set());
  const stackCursor = useRef(0);
  const idCounter  = useRef(0);
  const allTimers  = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const track = (t: ReturnType<typeof setTimeout>) => {
      allTimers.current.push(t);
      return t;
    };

    const spawnAt = (posKey: number) => {
      if (occupied.current.has(posKey)) return;

      const si  = stackCursor.current % STACKS.length;
      stackCursor.current++;
      const id  = idCounter.current++;

      occupied.current.add(posKey);

      setBadges(prev => [
        ...prev,
        { id, label: STACKS[si], color: COLORS[si], posKey, state: "in" },
      ]);

      const life = rand(LIFE_MIN, LIFE_MAX);

      track(setTimeout(() => {
        setBadges(prev =>
          prev.map(b => b.id === id ? { ...b, state: "out" as BadgeState } : b)
        );
      }, ENTER_MS + life));

      track(setTimeout(() => {
        occupied.current.delete(posKey);
        setBadges(prev => prev.filter(b => b.id !== id));
        track(setTimeout(() => spawnAt(posKey), rand(RESPAWN_MIN, RESPAWN_MAX)));
      }, ENTER_MS + life + EXIT_MS));
    };

    // stagger initial spawns across all 4 positions
    POSITIONS.forEach((_, posKey) => {
      track(setTimeout(() => spawnAt(posKey), rand(0, 1000)));
    });

    return () => allTimers.current.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ position: "relative", width: 280, height: 280, flexShrink: 0 }}>
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
        @keyframes badge-in  { from { opacity:0; transform:translateY(6px) scale(.86) } to { opacity:1; transform:translateY(0) scale(1) } }
        @keyframes badge-out { from { opacity:1; transform:translateY(0) scale(1) } to { opacity:0; transform:translateY(-6px) scale(.86) } }
        .sc-wrap { position:absolute; bottom:10px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:3px; animation:scroll-b 1.8s ease-in-out infinite; }
        .sc-lbl  { font-family:monospace; font-size:6px; letter-spacing:.2em; text-transform:uppercase; color:rgba(30,30,30,.35); white-space:nowrap; }
      `}</style>

      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          animation: "float-sh 7s ease-in-out infinite",
        }}
      >
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