const stats = [
  {
    value: "1,000+",
    label: "Roof Sheds & Steel Projects",
  },
  {
    value: "50+",
    label: "Certified Master Fabricators",
  },
  {
    value: "25+",
    label: "Years Industrial Leadership",
  },
  {
    value: "100%",
    label: "Leak-Proof Warranty Satisfaction",
  },
];

export default function StatsCounter() {
  return (
    <section className="bg-[#080D1A] py-10 lg:py-14 border-y border-slate-800/80 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="group relative bg-[#0D1527] hover:bg-[#111B32] border border-slate-800/90 hover:border-red-900/60 rounded-2xl sm:rounded-3xl p-7 lg:p-8 flex flex-col items-center text-center space-y-2.5 shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Big Number Value */}
                <div className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                  {stat.value}
                </div>

                {/* Subtitle Label */}
                <div className="font-cinzel text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider max-w-[220px] leading-snug">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
