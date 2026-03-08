import { GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";

const courses = [
  "Clinical Nutrition",
  "Community Nutrition",
  "Food Science",
  "Medical Nutrition Therapy",
  "Biochemistry",
];

const Education = () => (
  <section id="education" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 text-center">Education</p>
        <h2 className="section-title text-center mb-16">Academic Foundation</h2>
      </FadeIn>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <FadeIn delay={100}>
          <div className="relative flex flex-col md:flex-row md:items-start gap-6 mb-12">
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10">
              <GraduationCap size={20} className="text-primary" />
            </div>

            {/* Card */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">2021 – 2026 (Expected)</span>
              <h3 className="font-serif text-xl font-semibold text-foreground mt-1">BSc Nutrition & Dietetics</h3>
              <p className="text-muted-foreground text-sm mt-1">University of Nigeria, Nsukka</p>
            </div>
          </div>
        </FadeIn>

        {/* Coursework */}
        <FadeIn delay={200}>
          <div className="ml-16 md:ml-auto md:w-1/2 md:pl-16">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Key Coursework</h4>
            <div className="flex flex-wrap gap-3">
              {courses.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default Education;
