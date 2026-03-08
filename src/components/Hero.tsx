import { ArrowDown, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import portraitImg from "@/assets/harsha-pp.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/50 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Nutrition & Dietetics
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                Harsha<br />
                <span className="text-gradient-sage">Chathurani</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground italic font-serif mb-6">
                "Promoting Evidence-Based Nutrition for a Healthier Future"
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-muted-foreground leading-relaxed max-w-lg mb-10">
                A passionate Nutrition & Dietetics undergraduate dedicated to translating
                scientific research into practical, personalized nutrition strategies that
                empower individuals to live healthier, fuller lives.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <FileText size={16} />
                  Download CV
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary text-primary rounded-full font-medium text-sm hover:bg-primary/5 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Portrait */}
          <FadeIn delay={200} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-[2rem] rotate-6 scale-105" />
              <img
                src={portraitImg}
                alt="Adaeze Nwosu — Nutrition & Dietetics professional portrait"
                className="relative rounded-[2rem] w-80 md:w-96 object-cover shadow-2xl"
                loading="eager"
              />
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
