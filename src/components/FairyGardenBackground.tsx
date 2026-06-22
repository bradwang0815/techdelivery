import "./styles/FairyGardenBackground.css";

type FairyConfig = {
  id: number;
  animation: string;
  duration: number;
  delay: number;
  scale: number;
  variant: "gold" | "pink" | "mint" | "lavender";
  flip?: boolean;
};

const FAIRIES: FairyConfig[] = [
  { id: 1, animation: "fairy-path-1", duration: 32, delay: 0, scale: 1, variant: "gold" },
  { id: 2, animation: "fairy-path-2", duration: 38, delay: 6, scale: 0.75, variant: "pink", flip: true },
  { id: 3, animation: "fairy-path-3", duration: 44, delay: 14, scale: 0.9, variant: "mint" },
  { id: 4, animation: "fairy-path-4", duration: 36, delay: 22, scale: 0.65, variant: "lavender", flip: true },
  { id: 5, animation: "fairy-path-5", duration: 40, delay: 10, scale: 0.8, variant: "pink" },
  { id: 6, animation: "fairy-path-6", duration: 48, delay: 28, scale: 0.7, variant: "gold", flip: true },
];

const PETAL_COUNT = 14;
const MOTE_COUNT = 20;

const FairySprite = ({
  variant,
  flip,
  id,
}: {
  variant: FairyConfig["variant"];
  flip?: boolean;
  id: number;
}) => (
  <svg
    className={`fairy-sprite fairy-sprite--${variant}${flip ? " fairy-sprite--flip" : ""}`}
    viewBox="0 0 48 64"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id={`fairy-glow-${id}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse className="fairy-aura" cx="24" cy="30" rx="18" ry="22" fill={`url(#fairy-glow-${id})`} />
    <g className="fairy-wing fairy-wing--left">
      <path d="M24 22 C10 10, 2 18, 8 30 C12 38, 20 34, 24 28 Z" />
    </g>
    <g className="fairy-wing fairy-wing--right">
      <path d="M24 22 C38 10, 46 18, 40 30 C36 38, 28 34, 24 28 Z" />
    </g>
    <circle className="fairy-head" cx="24" cy="14" r="5.5" />
    <path className="fairy-body" d="M24 19 Q22 34 24 48 Q26 56 24 58" />
    <path className="fairy-hair" d="M19 12 Q24 6 29 12 Q27 16 24 15 Q21 16 19 12" />
    <circle className="fairy-spark" cx="34" cy="20" r="1.5" />
    <circle className="fairy-spark fairy-spark--delay" cx="14" cy="24" r="1" />
  </svg>
);

const FairyGardenBackground = () => {
  return (
    <div className="fairy-garden-bg" aria-hidden="true">
      <div className="ambient-bg">
        <div className="fireflies" />
        <div className="mushroom-glow mushroom-glow--left" />
        <div className="mushroom-glow mushroom-glow--right" />
      </div>

      <div className="fairy-sky">
        {FAIRIES.map((fairy) => (
          <div
            key={fairy.id}
            className="fairy-flyer"
            style={{
              animationName: fairy.animation,
              animationDuration: `${fairy.duration}s`,
              animationDelay: `${fairy.delay}s`,
              ["--fairy-scale" as string]: fairy.scale,
            }}
          >
            <FairySprite variant={fairy.variant} flip={fairy.flip} id={fairy.id} />
            <span className="fairy-trail" />
          </div>
        ))}
      </div>

      <div className="garden-petals">
        {Array.from({ length: PETAL_COUNT }, (_, i) => (
          <span
            key={i}
            className="garden-petal"
            style={{
              left: `${(i * 7.3 + 5) % 100}%`,
              animationDuration: `${12 + (i % 5) * 3}s`,
              animationDelay: `${i * 1.7}s`,
              ["--petal-rotate" as string]: `${(i * 47) % 360}deg`,
              ["--petal-drift" as string]: `${-30 + (i % 6) * 12}px`,
            }}
          />
        ))}
      </div>

      <div className="garden-motes">
        {Array.from({ length: MOTE_COUNT }, (_, i) => (
          <span
            key={i}
            className="garden-mote"
            style={{
              left: `${(i * 5.1 + 2) % 98}%`,
              top: `${(i * 9.7 + 10) % 90}%`,
              animationDuration: `${4 + (i % 4) * 2}s`,
              animationDelay: `${i * 0.55}s`,
            }}
          />
        ))}
      </div>

      <div className="garden-vines" />
    </div>
  );
};

export default FairyGardenBackground;
