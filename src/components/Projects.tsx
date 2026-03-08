import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Personalized Meal Plan for Young Adults",
    desc: "Developed a 7-day culturally adapted meal plan targeting university students with limited budgets, focusing on macro- and micronutrient balance.",
  },
  {
    title: "Community Nutrition Awareness Campaign",
    desc: "Led an outreach programme educating rural communities on childhood malnutrition prevention through locally available, nutrient-dense foods.",
  },
  {
    title: "Research Study on Balanced Diet Patterns",
    desc: "Conducted a cross-sectional survey analyzing dietary patterns among young Nigerian women and their association with BMI and metabolic markers.",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 text-center">Portfolio</p>
        <h2 className="section-title text-center mb-4">Featured Projects</h2>
        <p className="section-subtitle mx-auto text-center mb-16">
          Academic and community projects that reflect my commitment to impactful nutrition practice.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 100}>
            <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <span className="font-serif font-bold text-accent-foreground text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{p.desc}</p>
              <button className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                View Details <ArrowRight size={14} />
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
