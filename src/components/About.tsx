import { Heart, Microscope, ShieldCheck, Users } from "lucide-react";
import FadeIn from "./FadeIn";
import aboutImg from "@/assets/harsha-pp-about.png";

const values = [
  { icon: Heart, label: "Empathy", desc: "Compassionate, people-centered care" },
  { icon: Microscope, label: "Scientific Integrity", desc: "Evidence-based practice always" },
  { icon: ShieldCheck, label: "Preventive Care", desc: "Health before illness" },
  { icon: Users, label: "Community Impact", desc: "Nutrition for everyone" },
];

const About = () => (
  <section id="about" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <FadeIn>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] -rotate-3" />
            <img
              src={aboutImg}
              alt="Adaeze in a professional setting with fresh produce"
              className="relative rounded-[2rem] w-full object-cover shadow-xl"
              loading="lazy"
            />
          </div>
        </FadeIn>

        {/* Text */}
        <div>
          <FadeIn>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Me</p>
            <h2 className="section-title mb-6">Driven by Science,<br />Guided by Empathy</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a final-year Nutrition & Dietetics student with a deep passion for
              evidence-based nutrition practice. Throughout my academic journey, I have
              developed strong clinical assessment skills, community nutrition planning
              capabilities, and a genuine desire to make preventive healthcare accessible
              to all.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Currently awaiting internship placement, I am eager to apply my theoretical
              knowledge in real-world clinical and community settings — bridging the gap
              between research and practice to improve nutritional outcomes.
            </p>
          </FadeIn>

          {/* Value cards */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <FadeIn key={v.label} delay={150 + i * 80}>
                <div className="glass-card rounded-xl p-5 hover-lift">
                  <v.icon size={22} className="text-primary mb-3" />
                  <h4 className="font-serif font-semibold text-foreground text-sm mb-1">{v.label}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
