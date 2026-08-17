export const metadata = {
  title: "Gallery | ICSS",
};

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl font-bold text-navy-ink mb-4">Institute Gallery</h1>
        <p className="font-body text-ink-body/70 text-lg">A glimpse into our classrooms and practical training sessions.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-[4/3] bg-navy-ink/5 rounded-xl border border-navy-ink/10 flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-navy-ink/0 group-hover:bg-navy-ink/10 transition-colors z-10"></div>
            <span className="font-mono text-sm text-navy-ink/30">PHOTO_{i}.JPG</span>
          </div>
        ))}
      </div>
    </div>
  );
}
