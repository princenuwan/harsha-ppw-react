import { ClipboardCheck, Utensils, Activity, BookOpen, MessageCircle, Scale } from "lucide-react";
import FadeIn from "./FadeIn";

const skills = [
  { icon: ClipboardCheck, label: "Nutritional Assessment", level: 85 },
  { icon: Utensils, label: "Personalized Meal Planning", level: 80 },
  { icon: Scale, label: "Weight Management Guidance", level: 75 },
  { icon: Activity, label: "Medical Nutrition Therapy", level: 70 },
  { icon: BookOpen, label: "Research & Academic Writing", level: 90 },
  { icon: MessageCircle, label: "Counseling & Communication", level: 85 },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 text-center">Expertise</p>
        <h2 className="section-title text-center mb-4">Skills & Competencies</h2>
        <p className="section-subtitle mx-auto text-center mb-16">
          A growing toolkit of clinical, research, and interpersonal skills refined through academic training.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <FadeIn key={s.label} delay={i * 80}>
            <div className="glass-card rounded-xl p-6 hover-lift group">
              <s.icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-serif font-semibold text-foreground mb-3">{s.label}</h4>
              {/* Progress bar */}
              <div className="w-full bg-muted rounded-full h-1.5">
                <div
                  className="bg-primary rounded-full h-1.5 transition-all duration-700"
                  style={{ width: `${s.level}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{s.level}%</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
