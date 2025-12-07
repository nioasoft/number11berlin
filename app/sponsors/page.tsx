export const metadata = {
  title: "Sponsorship Opportunities – Number 11 Berlin",
  description: "Partner with Number 11 Berlin — Europe’s most advanced immersive sports arena. High-visibility brand integrations, digital screens, beverage partnerships and betting affiliates.",
};

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-neutral-900 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 uppercase">Sponsorship Opportunities</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
          Partner with Number 11 Berlin — Europe’s most advanced immersive sports arena.
        </p>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white uppercase tracking-wide">Why Partner With Us</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Number 11 Berlin is built for massive visibility. Brands benefit from prime location, high-tech integration, and a captive audience of passionate fans.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                "70k monthly visitors (optimistic scenario)",
                "Prime location in Germany's entertainment district",
                "100+ screens and LED surfaces",
                "Bar & beverage activations",
                "Betting affiliate opportunities",
                "VIP events & corporate hospitality"
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-yellow-500 mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-80 bg-neutral-800 rounded-xl flex items-center justify-center border border-white/10">
            <img src="/sponsor-integration.webp" alt="Sponsor Integration Mockup" className="w-full h-full object-cover rounded-xl opacity-80" />
          </div>
        </div>
      </section>

      {/* Sponsor Packages */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center text-white uppercase tracking-wide">Sponsor Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gold */}
            <div className="bg-gradient-to-b from-yellow-500/10 to-black p-8 rounded-2xl border border-yellow-500/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 uppercase">Gold</h3>
              <p className="text-sm text-gray-400 mb-6 h-12">Naming rights, exclusive category rights, integrated branding in arena.</p>
              <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors">Contact Us</button>
            </div>

            {/* Silver */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gray-400 transition-all">
              <h3 className="text-2xl font-bold text-gray-300 mb-4 uppercase">Silver</h3>
              <p className="text-sm text-gray-400 mb-6 h-12">LED integration, bar-area branding, event takeovers.</p>
              <button className="w-full py-3 bg-transparent border border-gray-500 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Contact Us</button>
            </div>

            {/* Bronze */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gray-400 transition-all">
              <h3 className="text-2xl font-bold text-amber-700 mb-4 uppercase">Bronze</h3>
              <p className="text-sm text-gray-400 mb-6 h-12">Social media, on-screen ads, campaign-based partnerships.</p>
              <button className="w-full py-3 bg-transparent border border-gray-500 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
