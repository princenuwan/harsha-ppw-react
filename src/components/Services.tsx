import { Leaf, Dumbbell, Apple, BookOpen } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  { icon: Apple, title: "Personalized Meal Plans", desc: "Custom dietary strategies tailored to individual health goals and preferences." },
  { icon: Leaf, title: "Lifestyle & Wellness Coaching", desc: "Holistic guidance integrating nutrition with sustainable lifestyle habits." },
  { icon: Dumbbell, title: "Weight Management Support", desc: "Evidence-based programmes for healthy, maintainable weight goals." },
  { icon: BookOpen, title: "Nutrition Education Workshops", desc: "Engaging sessions for communities, schools, and corporate groups." },
];

const Services = () => (
  <section id="services" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 text-center">Coming Soon</p>
        <h2 className="section-title text-center mb-4">Future Professional Services</h2>
        <p className="section-subtitle mx-auto text-center mb-16">
          Upon completing my internship and certification, I plan to offer these specialised nutrition services.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 80}>
            <div className="glass-card rounded-2xl p-6 text-center hover-lift">
              <div className="w-14 h-14 mx-auto rounded-full bg-accent flex items-center justify-center mb-5">
                <s.icon size={24} className="text-primary" />
              </div>
              <h4 className="font-serif font-semibold text-foreground mb-2">{s.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
