export const metadata = {
  title: "Food Market at Number 11 — Curated Vendors & Lease Opportunities",
  description: "Explore the Number 11 Food Market — a curated collection of culinary vendors. Lease a premium unit at Sony Center and access 45,000–70,000 monthly visitors.",
};

export default function FoodMarket() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero/Intro */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white uppercase">
              Food Market
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              A curated market of Berlin and international flavors — operated by external vendors on a hybrid lease + revenue-share model.
            </p>
          </div>
          <div className="h-64 md:h-80 bg-neutral-800 rounded-xl flex items-center justify-center border border-white/10">
            <img src="/food-market-hall.webp" alt="Food Market Hall" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Operator Benefits */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center text-white uppercase tracking-wide">Operator Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "High Footfall", desc: "45k–70k monthly visitors expected" },
              { title: "Prime Location", desc: "Located in the heart of Sony Center" },
              { title: "Visibility", desc: "Exposure to tourists, locals & corporates" },
              { title: "Marketing", desc: "Full support & cross-promotion with events" }
            ].map((item, i) => (
              <div key={i} className="bg-neutral-900/50 p-8 rounded-xl border border-white/5 hover:border-yellow-500/30 transition-all">
                <h3 className="text-xl font-bold text-yellow-500 mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Potential Vendors */}
      <section className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white uppercase tracking-wide">For Potential Vendors</h2>
          <p className="text-lg text-gray-300 mb-12">
            We provide the infrastructure so you can focus on the food.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              "Built-out stall infrastructure",
              "Utilities & backstage storage",
              "Integrated POS system",
              "Access to event-driven traffic"
            ].map((item, i) => (
              <div key={i} className="flex items-center p-4 bg-black rounded-lg border border-white/10">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <button className="px-8 py-4 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all">
              Apply as Vendor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
