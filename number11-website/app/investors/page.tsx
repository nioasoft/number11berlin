export const metadata = {
  title: "Investors – Number 11 Berlin Financials & Opportunity",
  description: "Explore the investment opportunity behind Number 11 Berlin. Premium sports entertainment, 6–8M€ build cost, strong revenue model and high-demand location.",
};

export default function Investors() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-neutral-900 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 uppercase">Investor Overview</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
          A unique opportunity to invest in the future of sports entertainment at one of Berlin's most iconic locations.
        </p>
      </section>

      {/* Core Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-white uppercase tracking-wide border-l-4 border-yellow-500 pl-4">Core Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "Location", value: "Former Sony Center spaces (2,600–4,000 sqm)" },
              { label: "Capex", value: "€6–8M" },
              { label: "Funding", value: "50% Founder / 50% Investors" },
              { label: "Investor Guarantees", value: "Lease guarantees of 6–9 months" },
              { label: "Ownership Offered", value: "50%" },
              { label: "Opening", value: "Q4 2026" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-neutral-900 rounded-lg border border-white/5">
                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-2">{item.label}</h3>
                <p className="text-xl md:text-2xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Model Snapshot */}
      <section className="py-24 bg-neutral-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white uppercase tracking-wide border-l-4 border-yellow-500 pl-4">Financial Model Snapshot</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Visitor Base</h3>
                <p className="text-gray-400 text-lg">45k–70k per month</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Average Spend</h3>
                <p className="text-gray-400 text-lg">€25–30 per person</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Additional Revenue Streams</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    "Ticketing",
                    "Suites",
                    "Sponsorships",
                    "Betting affiliate revenues",
                    "Vendor leases"
                  ].map((stream, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                      {stream}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-black rounded-xl flex items-center justify-center border border-white/10 relative">
            {/* Placeholder for Investor Chart/Presentation */}
             <span className="text-gray-600 font-mono text-sm">[Placeholder: Investor Presentation Shot]</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-yellow-500 text-black text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Join the Revolution</h2>
          <p className="text-xl mb-10 font-medium">Request the full Investor Deck and schedule a meeting with the founders.</p>
          <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transition-all shadow-lg">
            Request Investor Pack
          </button>
        </div>
      </section>
    </div>
  );
}
