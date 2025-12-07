import Link from "next/link";

export const metadata = {
  title: "Number 11 Berlin — Immersive Sports Arena & Premium Hospitality at Sony Center",
  description: "Experience Europe’s most advanced immersive sports venue. Giant cinematic domes, premium bar culture, private suites and a vibrant food market — opening Q4 2026 at Sony Center, Berlin.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for Hero Image 1 - Immersive Arena */}
          <div className="w-full h-full bg-gradient-to-b from-gray-900 via-black to-black opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/hero-arena.webp')] bg-cover bg-center opacity-40 mix-blend-overlay"></div> 
          {/* Since we don't have the image, we use a dark gradient and potentially a pattern if available */}
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
            Number 11 Berlin — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              The Future of Watching Sports
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            A high-end immersive arena combining cinema-grade projection, stadium audio, curated hospitality, private suites and a world-class bar — all under one iconic roof at Sony Center.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 border border-transparent text-base font-bold rounded-full text-black bg-yellow-500 hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              Book Early Access
            </button>
            <Link href="/suites">
              <button className="px-8 py-4 border border-white/20 text-base font-bold rounded-full text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                Private Suites
              </button>
            </Link>
            <Link href="/investors">
              <button className="px-8 py-4 border border-white/20 text-base font-bold rounded-full text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                Investor Pack
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight uppercase">The Vision</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Number 11 Berlin transforms live sports into a multi-sensory, cinematic experience. Designed for passionate fans, tourists, corporates and premium hospitality seekers — our venue blends cutting-edge technology with exceptional service and atmosphere.
          </p>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 bg-neutral-900/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center tracking-tight uppercase">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Immersive Arena", desc: "Giant curved projection surfaces & 4K/8K laser systems." },
              { title: "Stadium-grade sound", desc: "Surround systems delivering true match energy." },
              { title: "Premium bar", desc: "Signature cocktails, craft beers, curated spirits." },
              { title: "10 Private Suites", desc: "VIP seating, dedicated service, guaranteed minimum spend." },
              { title: "Food Market", desc: "Multiple vendors, external operators, revenue-sharing model." },
              { title: "Central Location", desc: "Sony Center — one of Berlin’s most iconic destinations." }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-500/30 transition-colors group">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening 2026 Section */}
      <section className="py-32 bg-gradient-to-b from-black to-neutral-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <span className="text-[20vw] font-bold text-white leading-none select-none">2026</span>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            Opening <span className="text-yellow-500">2026</span>
          </h2>
          <p className="text-2xl text-gray-300 font-light">
            A destination designed for 45,000–70,000 monthly visitors, year-round.
          </p>
        </div>
      </section>
    </div>
  );
}