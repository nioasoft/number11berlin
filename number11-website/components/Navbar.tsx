import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl tracking-wider uppercase">
              Number 11 <span className="text-yellow-500">Berlin</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/experience" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">The Experience</Link>
              <Link href="/suites" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Suites</Link>
              <Link href="/food-market" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Food Market</Link>
              <Link href="/sponsors" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sponsors</Link>
              <Link href="/investors" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Investors</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
