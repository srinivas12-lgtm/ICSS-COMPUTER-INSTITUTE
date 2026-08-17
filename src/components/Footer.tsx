import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-ink text-paper-white/80 py-12 border-t border-cyan-signal/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display font-bold text-pure-white text-lg mb-4">ICSS Computer Institute</h3>
          <p className="font-body text-sm leading-relaxed mb-4">
            Near Vignan Junior College, Beside Zoin High School, Gandhi Nagar Colony, Shadnagar, Telangana 509216
          </p>
          <p className="font-mono text-sm text-cyan-signal">Owner/Instructor: Paladi Venkata Ramana</p>
        </div>
        <div>
          <h4 className="font-display font-bold text-pure-white mb-4">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm">
            <li><Link href="/courses" className="hover:text-cyan-signal transition-colors">All Courses</Link></li>
            <li><Link href="/about" className="hover:text-cyan-signal transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-cyan-signal transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-signal transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-pure-white mb-4">Contact</h4>
          <p className="font-body text-sm mb-2">Phone: <a href="tel:9949087771" className="text-pure-white hover:text-cyan-signal">99490 87771</a></p>
          <a href="https://wa.me/919949087771" className="inline-block mt-4 border border-cyan-signal/50 text-cyan-signal px-6 py-2 rounded-lg font-medium hover:bg-cyan-signal/10 transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
}
