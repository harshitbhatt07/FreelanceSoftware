import { BrandTitle } from "./BrandTitle";

export function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
        <BrandTitle text={title} />
      </h2>
      {desc && <p className="mt-5 text-lg leading-8 text-white/50">{desc}</p>}
    </div>
  );
}
