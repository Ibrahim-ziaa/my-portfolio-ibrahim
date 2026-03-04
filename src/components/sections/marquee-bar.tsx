const items = [
  "⭐ Top Rated Plus",
  "✦ 100% Job Success",
  "✦ 50+ Projects Delivered",
  "✦ 5★ Reviews",
  "✦ Director @ NebulaAi",
  "✦ AI Automation Expert",
  "✦ Data Scientist",
  "✦ n8n & Make Specialist",
];

export default function MarqueeBar() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#0f0f0f] border-y border-white/5 py-4">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-sm font-semibold tracking-widest uppercase whitespace-nowrap"
          >
            <span className="text-white/50">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
