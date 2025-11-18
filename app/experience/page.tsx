export const metadata = {
  title: "The Experience – Immersive Arena & Venue at Number 11 Berlin",
  description: "Explore Europe’s most advanced immersive sports arena. 360° projection, stadium audio, private rooms and premium bar experiences at Sony Center, Berlin.",
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-b from-neutral-900 to-black">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 uppercase">The Experience</h1>
          <p className="text-xl text-gray-300">
            Explore Europe’s most advanced immersive sports arena. 360° projection, stadium audio, private rooms and premium bar experiences at Sony Center, Berlin.
          </p>
        </div>
      </div>

      {/* Immersive Arena Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-500 uppercase tracking-wide">Immersive Arena</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Step inside Europe’s largest purpose-built sports viewing dome. Designed to replicate the intensity of being in the stadium, but with better views and service.
            </p>
            <ul className="space-y-4">
              {[
                "20m+ wide curved projection surfaces",
                "State-of-the-art 4K/8K laser projectors",
                "True-to-life brightness & contrast",
                "Smart switching between multiple live feeds",
                "Seating for up to 800 guests"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-yellow-500">▪</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-80 bg-neutral-800 rounded-xl flex items-center justify-center border border-white/10">
             <span className="text-gray-600 font-mono text-sm">[Placeholder: Immersive Arena Wide Shot]</span>
          </div>
        </div>
      </section>

      {/* Premium Bar Experience Section */}
      <section className="py-20 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <div className="order-last lg:order-first h-80 bg-neutral-800 rounded-xl flex items-center justify-center border border-white/10">
             <span className="text-gray-600 font-mono text-sm">[Placeholder: Premium Bar Interior]</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-500 uppercase tracking-wide">Premium Bar Experience</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              An elevated drinking experience inspired by modern stadium lounges and boutique cocktail bars. No more waiting for stale beer.
            </p>
            <ul className="space-y-4">
              {[
                "40m main bar",
                "50+ screens throughout the venue",
                "Beer towers, signature drinks, craft cocktails",
                "Average consumption: 2 liters of beer per guest on major match days"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-yellow-500">▪</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Food Market Section (Brief) */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wide">Food Market</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            An indoor market curated with independent operators. We lease the stalls + earn % of revenue — ensuring diversity, freshness and constant traffic.
          </p>
          <a href="/food-market" className="text-yellow-500 hover:text-yellow-400 underline decoration-yellow-500/50 hover:decoration-yellow-400 underline-offset-4">Learn more about the Food Market &rarr;</a>
        </div>
      </section>

      {/* Technology Behind the Magic */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-white uppercase tracking-wide">Technology Behind the Magic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               "Custom media servers",
               "Multi-feed event switching",
               "Immersive lighting system",
               "Data-driven crowd management",
               "Dynamic sound arrays"
             ].map((tech, i) => (
               <div key={i} className="bg-black border border-white/10 p-6 rounded-lg hover:border-yellow-500/50 transition-colors">
                 <h3 className="text-white font-semibold text-lg">{tech}</h3>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
