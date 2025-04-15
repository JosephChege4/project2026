export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      {/* Site Title */}
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
        Project 2026
      </h1>

      {/* Hero Section */}
      <section className="mb-20">
        <h2 className="text-xl sm:text-2xl font-medium text-zinc-300 mb-3">
          A personal journey through Sonic, Zelda, and Xenoblade
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          Chronicling my deep-dive through decades of legendary games. From 8-bit
          beginnings to modern masterpieces, this is a long-form passion project — built
          with love, lore, and lots of game time.
        </p>
      </section>

      {/* Phase Directory */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Phase Directory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Map this from data later */}
          {[
            "Zelda Origins",
            "Sonic Origins",
            "Early Zelda Adventures",
            "Classic Sonic Revisited",
          ].map((phase, idx) => (
            <div
              key={idx}
              className="bg-zinc-800 border border-zinc-700 p-5 rounded-xl hover:bg-zinc-700 transition duration-200 cursor-pointer shadow-md"
            >
              <h3 className="text-lg font-semibold text-white">{phase}</h3>
              <p className="text-sm text-zinc-400">Phase {idx + 1}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
