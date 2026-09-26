"use client";

import { useRef, useState, type PointerEvent } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { type LabProject } from "@/lib/constants";

// Product imagery for the Labs cards. It is artwork, so it is exempt from the
// UI rules in DESIGN.md (its own colors, rounded covers and shadows).
export default function LabCardArt({ project }: { project: LabProject }) {
  const base = "/labs";

  switch (project.id) {
    case "parallel-editions":
      return (
        <div className="relative h-full overflow-hidden bg-[#f5efe3]">
          <img
            src={`${base}/parallel-editions-catalog.webp`}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf3e3]/35 via-[#f5efe3]/15 to-[#e8dcc8]/50" />
          <div className="absolute inset-x-0 bottom-0 top-6 flex items-end justify-center pb-3">
            <div className="relative flex h-[72%] w-[88%] items-end justify-center">
              <img
                src={`${base}/parallel-editions-sherlock-fi.webp`}
                alt=""
                aria-hidden
                className="absolute bottom-0 left-[4%] z-10 h-[78%] w-[30%] rotate-[-7deg] rounded-sm object-cover shadow-[0_8px_24px_rgba(80,40,20,0.28)] ring-1 ring-black/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-9deg]"
              />
              <img
                src={`${base}/parallel-editions-andersen-de.webp`}
                alt=""
                aria-hidden
                className="relative z-20 h-[88%] w-[34%] rounded-sm object-cover shadow-[0_12px_32px_rgba(80,40,20,0.35)] ring-1 ring-black/10 transition-transform duration-500 group-hover:-translate-y-2"
              />
              <img
                src={`${base}/parallel-editions-wuthering-es.webp`}
                alt=""
                aria-hidden
                className="absolute bottom-0 right-[4%] z-10 h-[78%] w-[30%] rotate-[7deg] rounded-sm object-cover shadow-[0_8px_24px_rgba(80,40,20,0.28)] ring-1 ring-black/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[9deg]"
              />
            </div>
          </div>
        </div>
      );

    case "playable-me":
      return (
        <CompareSlider
          before={`${base}/playableme-photo.webp`}
          after={`${base}/playableme-ingame.webp`}
        />
      );

    case "belter-charts":
      return (
        <div className="flex h-full items-center justify-center overflow-hidden bg-bg-surface">
          <img
            src={`${base}/belter-charts-hero.png`}
            alt=""
            aria-hidden
            className="h-full w-full object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
          />
        </div>
      );

    case "barline":
      return (
        <div className="flex h-full items-center justify-center overflow-hidden bg-bg-surface">
          <img
            src={`${base}/barline-hero.png`}
            alt=""
            aria-hidden
            className="h-full w-full object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
          />
        </div>
      );

    case "callvaders":
      return (
        <div className="flex h-full items-center justify-center overflow-hidden bg-[#0b0d1a] p-1">
          <img
            src={`${base}/callvaders-hero.webp`}
            alt=""
            aria-hidden
            className="h-full w-full object-cover transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
          />
        </div>
      );

    default:
      return null;
  }
}

// The photo / in-game comparison from the top of playableme.com. The card is a
// link, so the split follows a hovering mouse instead of needing a click. On
// touch a sideways drag moves it and swallows the tap that would navigate.
function CompareSlider({ before, after }: { before: string; after: string }) {
  const [split, setSplit] = useState(50);
  const touch = useRef<{ x: number; moved: boolean } | null>(null);
  const swallowClick = useRef(false);

  const follow = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setSplit(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      aria-hidden
      className="relative h-full cursor-ew-resize touch-pan-y select-none overflow-hidden bg-[#090b10]"
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse") touch.current = { x: e.clientX, moved: false };
      }}
      onPointerMove={(e) => {
        if (e.pointerType === "mouse") return follow(e);
        if (!touch.current) return;
        if (Math.abs(e.clientX - touch.current.x) > 6) touch.current.moved = true;
        if (touch.current.moved) follow(e);
      }}
      onPointerUp={() => {
        swallowClick.current = touch.current?.moved ?? false;
        touch.current = null;
      }}
      onPointerCancel={() => (touch.current = null)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setSplit(50)}
      onClickCapture={(e) => {
        if (!swallowClick.current) return;
        e.preventDefault();
        swallowClick.current = false;
      }}
    >
      <img
        src={before}
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
      />
      <img
        src={after}
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        style={{ clipPath: `inset(0 0 0 ${split}%)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-[#e05e2b]"
        style={{ left: `${split}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e05e2b] bg-[#090b10]/85 text-[#e05e2b]"
        style={{ left: `${split}%` }}
      >
        <ChevronsLeftRight className="h-3.5 w-3.5" />
      </div>
      <span className="pointer-events-none absolute left-2 top-2 rounded-sm bg-[#090b10]/80 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white/85">
        Starfield
      </span>
      <span className="pointer-events-none absolute bottom-2 left-2 rounded-sm bg-[#090b10]/80 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-white/70">
        Photo
      </span>
      <span className="pointer-events-none absolute bottom-2 right-2 rounded-sm bg-[#090b10]/80 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[#e05e2b]">
        In game
      </span>
    </div>
  );
}
