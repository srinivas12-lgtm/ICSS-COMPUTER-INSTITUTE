export const metadata = {
  title: "About Us | ICSS",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl font-bold text-navy-ink mb-8">About ICSS</h1>
      <div className="prose prose-lg prose-blue max-w-none font-body text-ink-body/80">
        <p className="text-xl leading-relaxed mb-6">
          ICSS (Computer Institute, Internet Center & Sales & Service) has been a trusted "Temple of Learning" in Shadnagar, providing quality computer education for years.
        </p>
        <p className="mb-6">
          Founded and instructed by <strong>Paladi Venkata Ramana</strong>, the institute focuses on giving students real, practical skills rather than just theoretical knowledge. From comprehensive software engineering (PGDSE) to hardware repair and standard office accounting, ICSS equips the next generation with what they need to succeed in the modern digital workforce.
        </p>
        <div className="bg-navy-ink/5 border-l-4 border-cyan-signal p-6 rounded-r-lg my-10">
          <h3 className="font-display font-bold text-xl text-navy-ink mb-2">Our Mission</h3>
          <p className="m-0">To deliver affordable, high-quality, and practical computer education to the students and professionals of Shadnagar, empowering them to build their digital futures.</p>
        </div>
      </div>
    </div>
  );
}
