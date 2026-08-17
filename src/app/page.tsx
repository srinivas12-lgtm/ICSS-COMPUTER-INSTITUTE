import Link from "next/link";
import { ArrowRight, BookOpen, Monitor, Award, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-navy-ink pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,18,41,1)_0%,rgba(29,78,216,0.5)_55%,rgba(34,211,238,0.2)_100%)] opacity-50 z-0"></div>
        {/* Archway Motif Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-cyan-signal/20 rounded-full opacity-30 blur-[2px] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-cyan-signal/30 rounded-full opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="font-mono text-cyan-signal tracking-[0.2em] text-xs font-semibold mb-4 uppercase">
              Computer Institute &bull; Internet Center &bull; Sales & Service
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-pure-white leading-tight mb-6">
              Build Your Digital Future With the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-signal to-electric-blue">Right Skills</span>
            </h1>
            <p className="font-body text-paper-white/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Professional computer education, practical training, and career-focused courses designed for the next generation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/courses" className="w-full sm:w-auto px-8 py-3 bg-royal-blue hover:bg-electric-blue text-pure-white rounded-lg font-medium transition-all shadow-[0_8px_30px_rgba(29,78,216,0.4)] flex items-center justify-center gap-2">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-3 bg-transparent border border-paper-white/30 hover:border-pure-white text-pure-white rounded-lg font-medium transition-all flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-t-[40%] rounded-b-2xl border border-cyan-signal/30 p-2 bg-navy-ink/50 backdrop-blur-sm overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-transparent z-10 group-hover:opacity-50 transition-opacity duration-700"></div>
              {/* Replace with real image in production */}
              <div className="w-full h-full bg-ink-body rounded-t-[38%] rounded-b-xl overflow-hidden relative flex items-center justify-center">
                <Monitor className="text-cyan-signal/50 w-32 h-32" strokeWidth={1} />
                <div className="absolute bottom-4 left-0 w-full text-center text-cyan-signal/60 font-mono text-sm tracking-widest">PRACTICAL TRAINING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#050914] py-12 border-b border-navy-ink/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-cyan-signal/10 text-center">
          <div>
            <div className="font-mono text-3xl font-bold text-cyan-signal mb-1">18 MO</div>
            <div className="font-body text-paper-white/60 text-sm uppercase tracking-wider">PGDSE Track</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-cyan-signal mb-1">1 YR</div>
            <div className="font-body text-paper-white/60 text-sm uppercase tracking-wider">PGDCA Track</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-cyan-signal mb-1">6 MO</div>
            <div className="font-body text-paper-white/60 text-sm uppercase tracking-wider">DCA Track</div>
          </div>
          <div>
            <div className="font-mono text-3xl font-bold text-cyan-signal mb-1">30-90D</div>
            <div className="font-body text-paper-white/60 text-sm uppercase tracking-wider">Short Courses</div>
          </div>
        </div>
      </section>

      {/* ABOUT - TEMPLE OF LEARNING */}
      <section className="py-24 bg-paper-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-ink-body/5 z-10"></div>
              {/* Placeholder for brochure photo */}
              <div className="w-full h-full bg-navy-ink/5 flex items-center justify-center border border-navy-ink/10">
                <BookOpen className="text-navy-ink/20 w-24 h-24" />
                <span className="absolute bottom-4 right-6 font-mono text-xs text-navy-ink/40">BROCHURE_PHOTO_01.JPG</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-whisper/10 text-violet-whisper text-sm font-semibold mb-6">
              <Award size={16} /> Est. Shadnagar
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-ink mb-6">A True Temple of Learning</h2>
            <p className="font-body text-ink-body/80 text-lg leading-relaxed mb-6">
              At ICSS, we don't just teach software; we build careers. Located near Vignan Junior College in Shadnagar, our institute is a dedicated space for focused learning, practical hardware experience, and professional software development training.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-royal-blue font-semibold hover:text-electric-blue transition-colors group">
              Learn more about our journey <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-pure-white border-t border-paper-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-ink mb-4">The ICSS Advantage</h2>
            <p className="font-body text-ink-body/70 max-w-2xl mx-auto">Expert instruction combining theory with intensive practical labs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Practical Labs", desc: "Hands-on experience with real systems, from hardware assembly to full-stack code." },
              { title: "Experienced Faculty", desc: "Learn directly from instructors who understand industry requirements and practical applications." },
              { title: "Career Focused", desc: "Curriculum designed to make you employable immediately after graduation." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-paper-white border border-navy-ink/5 hover:border-cyan-signal/30 hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)] transition-all group">
                <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-royal-blue rounded-md"></div>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-ink mb-3">{feature.title}</h3>
                <p className="font-body text-ink-body/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
