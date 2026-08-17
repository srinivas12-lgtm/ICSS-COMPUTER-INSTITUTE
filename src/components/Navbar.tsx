import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-navy-ink/90 border-b border-cyan-signal/20 text-paper-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-display font-bold text-xl tracking-tight text-pure-white">ICSS</span>
          <span className="font-mono text-[10px] text-cyan-signal tracking-widest uppercase">Temple of Learning</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-body text-sm font-medium">
          <Link href="/courses" className="hover:text-cyan-signal transition-colors">Courses</Link>
          <Link href="/about" className="hover:text-cyan-signal transition-colors">About</Link>
          <Link href="/gallery" className="hover:text-cyan-signal transition-colors">Gallery</Link>
          <a href="tel:9949087771" className="flex items-center gap-2 bg-royal-blue hover:bg-electric-blue text-pure-white px-5 py-2.5 rounded-lg transition-all shadow-[0_8px_30px_rgba(29,78,216,0.3)]">
            <Phone size={16} />
            <span>99490 87771</span>
          </a>
        </div>
        <button className="md:hidden p-2 text-pure-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
