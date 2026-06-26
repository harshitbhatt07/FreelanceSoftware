import { Code2, Play, Plus } from "lucide-react";

export function AgencyVisual({ compact = false, variant = "editor" }) {
  if (variant === "radar") return <RadarVisual compact={compact} />;
  if (variant === "stack") return <StackVisual compact={compact} />;

  return (
    <div className={`relative mx-auto ${compact ? "max-w-sm" : "max-w-3xl"}`}>
      <div className="editor-shell overflow-hidden rounded-2xl border border-white/10">
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#151515] px-3">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-white px-3 py-1 text-xs font-black text-black">Canvas</span>
            <Plus size={18} className="text-white/45" />
          </div>
          <span className="text-xs font-black text-white">Site</span>
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-[#222] px-3 py-1 text-xs font-black text-white">Invite</span>
            <span className="rounded-lg bg-[#0a84ff] px-3 py-1 text-xs font-black text-white">Publish</span>
          </div>
        </div>
        <div className="grid min-h-[310px] grid-cols-[110px_1fr_118px]">
          <div className="border-r border-white/10 bg-[#141414] p-3">
            <b className="text-xs text-white">Pages</b>
            {["Home", "Services", "Contact"].map((item, index) => (
              <div
                className={`mt-3 rounded-lg px-3 py-2 text-xs font-bold ${
                  index === 0 ? "bg-white text-black" : "bg-white/5 text-white/55"
                }`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="relative grid place-items-center overflow-hidden bg-[#0b0b0b] p-5">
            <div className="scanline absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-[#0a84ff]/0 via-[#0a84ff]/30 to-[#0a84ff]/0" />
            <div className="w-full rounded-xl border border-white/10 bg-black p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <b className="text-white">HAUS</b>
                <span className="text-[10px] font-bold text-white/45">Work Services About</span>
              </div>
              <h3 className="max-w-xs text-3xl font-black leading-none text-white">Modern Website UI</h3>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div className="h-16 rounded-lg bg-white/10" key={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="border-l border-white/10 bg-[#141414] p-3">
            <b className="rounded-lg bg-white px-3 py-2 text-xs text-black">Agent</b>
            <div className="mt-4 rounded-xl bg-white/5 p-3 text-xs font-bold leading-5 text-white/70">
              Build a fast animated portfolio with clean sections.
            </div>
            <button className="mt-4 grid h-10 w-10 place-items-center rounded-lg bg-white text-black">
              <Play size={16} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadarVisual({ compact }) {
  return (
    <div className={`relative mx-auto aspect-square ${compact ? "max-w-sm" : "max-w-lg"}`}>
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-10 rounded-full border border-white/10" />
      <div className="absolute inset-20 rounded-full border border-white/10" />
      <div className="visual-orbit absolute inset-8 rounded-full border-t border-[#0a84ff]" />
      <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white text-center text-black">
        <Code2 />
        <b className="text-sm">Web Apps</b>
      </div>
      {["React", "API", "MERN", "UI"].map((item, index) => (
        <span
          className="absolute rounded-full bg-[#111] px-4 py-2 text-sm font-black text-white ring-1 ring-white/10"
          style={{
            left: `${index % 2 ? 68 : 12}%`,
            top: `${index < 2 ? 22 : 70}%`,
          }}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function StackVisual({ compact }) {
  return (
    <div className={`relative mx-auto ${compact ? "max-w-sm" : "max-w-lg"}`}>
      {[0, 1, 2].map((index) => (
        <div
          className="relative mb-4 rounded-2xl border border-white/10 bg-[#111] p-5 shadow-2xl"
          style={{ transform: `translateX(${index * 18}px)` }}
          key={index}
        >
          <div className="mb-4 h-3 w-28 rounded-full bg-white/15" />
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 h-20 rounded-xl bg-white/10" />
            <div className="h-20 rounded-xl bg-[#0a84ff]" />
          </div>
        </div>
      ))}
    </div>
  );
}
