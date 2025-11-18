import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">Number 11 Berlin</h3>
          <p className="text-sm leading-relaxed text-gray-400 max-w-md">
            The future of watching sports. Experience Europe’s most advanced immersive sports venue at the Sony Center, Berlin.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/experience" className="hover:text-yellow-500 transition-colors">The Experience</Link></li>
            <li><Link href="/suites" className="hover:text-yellow-500 transition-colors">Private Suites</Link></li>
            <li><Link href="/food-market" className="hover:text-yellow-500 transition-colors">Food Market</Link></li>
            <li><Link href="/sponsors" className="hover:text-yellow-500 transition-colors">Sponsors</Link></li>
            <li><Link href="/investors" className="hover:text-yellow-500 transition-colors">Investors</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Contact</h4>
          <p className="text-sm text-gray-400">
            Opening Q4 2026
            <br />
            Sony Center, Berlin
            <br />
            <br />
            <a href="mailto:info@number11berlin.com" className="hover:text-white transition-colors">info@number11berlin.com</a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Number 11 Berlin. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
