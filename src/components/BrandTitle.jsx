export function BrandTitle({ text }) {
  const parts = String(text).trim().split(" ");
  if (parts.length < 2) return text;
  const accent = parts.pop();

  return (
    <>
      {parts.join(" ")} <span className="text-[#0a84ff]">{accent}</span>
    </>
  );
}
