import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Number 11 Berlin — Immersive Sports Arena & Premium Hospitality at Sony Center",
  description: "Experience Europe’s most advanced immersive sports venue. Giant cinematic domes, premium bar culture, private suites and a vibrant food market — opening Q4 2026 at Sony Center, Berlin.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-gray-900 via-black to-black opacity-90 absolute z-10"></div>
          <Image
            src="/hall4.webp"
            alt="Number 11 Arena"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight uppercase">The Vision</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Number 11 Berlin transforms live sports into a multi-sensory, cinematic experience. Designed for passionate fans, tourists, corporates and premium hospitality seekers.
          </p>
        </div>

        {/* Arena Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[80vh] md:h-[60vh]">
            <div className="relative h-full rounded-2xl overflow-hidden group border border-white/10">
              <Image src="/hall1.webp" alt="Main Arena View" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                <h3 className="text-xl font-bold text-white">Cinematic Scale</h3>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="relative h-full rounded-2xl overflow-hidden group border border-white/10">
                <Image src="/hall2.webp" alt="Arena Atmosphere" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="relative h-full rounded-2xl overflow-hidden group border border-white/10">
                  <Image src="/hall3.webp" alt="Premium Seating" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="relative h-full rounded-2xl overflow-hidden group border border-white/10">
                  <Image src="/hall4.webp" alt="Wide Angle View" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Zig-Zag Section */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

          {/* Feature 1: The Bar */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-y-1 transform transition-all hover:skew-y-0">
              <Image src="/bar.webp" alt="Premium Bar" fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">World-Class Bar</h3>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Not just a sports bar, but a destination in itself. Featuring signature cocktails, craft beers from Berlin’s finest breweries, and a curated selection of spirits.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Expert Mixology</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Premium Lounge Areas</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Late Night Atmosphere</li>
              </ul>
            </div>
          </div>

          {/* Feature 2: Private Rooms (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl -skew-y-1 transform transition-all hover:skew-y-0">
              <Image src="/privaterooms.webp" alt="Private Suites" fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/2 text-right md:text-left"> {/* Aligned text left for consistency or right for style? Kept left/standard for readability usually better, but let's try right aligned to match the zig zag? No, keep standard align for text but layout is reversed. */}
              <div className="md:text-right">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Private Suites</h3>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  For the ultimate exclusive experience. 10 private suites offering VIP seating, dedicated service, and guaranteed privacy for corporate events or private parties.
                </p>
                <div className="flex flex-col md:items-end space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full md:order-2"></span> Minimum Spend Guarantee</div>
                  <div className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full md:order-2"></span> Dedicated Host</div>
                  <div className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-500 rounded-full md:order-2"></span> Customizable Catering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Food Court */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-y-1 transform transition-all hover:skew-y-0">
              <Image src="/foodcourt.webp" alt="Food Market" fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">The Food Market</h3>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                A vibrant culinary marketplace featuring multiple vendors and external operators. From gourmet street food to refined dining options.
              </p>
              <Link href="/food">
                <button className="px-8 py-3 border border-yellow-500/50 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition-all">
                  View Vendors
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Other Features Grid (Sound, Location) - Keep simple */}
      <section className="py-20 bg-neutral-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Stadium-Grade Sound</h3>
              <p className="text-gray-400">Engineered surround systems that deliver the true roar of the stadium. Feel every cheer and chant as if you were there.</p>
            </div>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Iconic Location</h3>
              <p className="text-gray-400">Located in the heart of Berlin at the legendary Sony Center at Potsdamer Platz. Easily accessible and surrounded by history.</p>
            </div>
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