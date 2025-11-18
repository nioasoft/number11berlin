import Link from "next/link";

export const metadata = {
  title: "Private Suites – VIP Rooms for Groups & Corporate Events",
  description: "Book a private VIP suite at Number 11 Berlin. Premium seating, dedicated service, food & beverage packages and immersive match viewing.",
};

export default function Suites() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white uppercase">
          Private Suites
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl font-light">
          Private luxury suites for fans, friends, companies and VIP guests — designed for unforgettable match nights.
        </p>
        <div className="mt-10">
          <button className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            Inquire Now
          </button>
        </div>
      </section>

      {/* Suite Features */}
      <section className="py-24 bg-neutral-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white uppercase tracking-wide">Suite Features</h2>
              <ul className="space-y-6">
                {[
                  { title: "Capacity", desc: "10–20 guests" },
                  { title: "Viewing", desc: "Private curved screen & immersive audio" },
                  { title: "Service", desc: "Dedicated waiter throughout the match" },
                  { title: "Drinks", desc: "Premium spirits & beer packages available" },
                  { title: "Access", desc: "Minimum spend model / Corporate packages (seasonal or annual)" }
                ].map((item, i) => (
                  <li key={i} className="border-b border-white/10 pb-4 last:border-0">
                    <span className="block text-yellow-500 font-bold text-sm uppercase tracking-wider mb-1">{item.title}</span>
                    <span className="text-gray-300 text-lg">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[500px] bg-neutral-800 rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden group">
              {/* Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <span className="relative z-20 text-gray-500 font-mono text-sm group-hover:text-yellow-500 transition-colors">[Placeholder: Luxury Private Suite Interior]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-24 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-white">High Demand, High Yield</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Our suites operate at <span className="text-yellow-500 font-bold">85–95% annual occupancy</span>, providing one of the highest-yield areas in the venue. Whether for corporate bonding or the ultimate fan experience, availability is limited.
          </p>
        </div>
      </section>
    </div>
  );
}
