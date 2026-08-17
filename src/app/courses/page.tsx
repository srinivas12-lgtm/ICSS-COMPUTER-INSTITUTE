import { courses } from "@/data/courses";
import Link from "next/link";
import { Clock, BookOpen, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Courses | ICSS",
};

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-display text-4xl font-bold text-navy-ink mb-6">Our Programs</h1>
        <p className="font-body text-ink-body/70 text-lg">Explore our range of diploma, post-graduate, and short-term certificate courses designed to build practical skills for your career.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col bg-white rounded-2xl border border-navy-ink/10 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(11,18,41,0.08)] transition-all group">
            <div className="p-6 flex-grow">
              <div className="inline-block px-3 py-1 bg-cyan-signal/10 text-cyan-signal font-semibold text-xs rounded-full mb-4 uppercase tracking-wide">
                {course.category}
              </div>
              <h2 className="font-display text-xl font-bold text-navy-ink mb-3">{course.name}</h2>
              <p className="font-body text-ink-body/70 mb-6 text-sm">{course.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-ink-body/80 font-medium">
                  <Clock size={16} className="text-cyan-signal" /> {course.duration}
                </div>
                <div className="flex items-start gap-2 text-sm text-ink-body/80">
                  <BookOpen size={16} className="text-cyan-signal shrink-0 mt-0.5" /> 
                  <span className="line-clamp-2">{course.modules.join(" • ")}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 pt-0 mt-auto">
              <Link href={`/contact?course=${course.id}`} className="w-full py-2.5 rounded-lg border border-navy-ink/10 flex items-center justify-center gap-2 font-medium text-navy-ink group-hover:bg-navy-ink group-hover:text-white transition-colors">
                Enquire Now <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
