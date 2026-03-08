import { Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    text: "Adaeze's nutrition advice during our community outreach was incredibly insightful. She made complex dietary concepts accessible and actionable for everyone.",
    name: "Dr. Emeka Obi",
    role: "Community Health Supervisor",
  },
  {
    text: "Her research skills are outstanding. The dietary pattern study she led was thorough, well-structured, and produced meaningful results for our department.",
    name: "Prof. Chidinma Eze",
    role: "Academic Adviser",
  },
  {
    text: "Working with Adaeze on the campus wellness project was a pleasure. She brought energy, empathy, and real scientific rigour to every session.",
    name: "Ngozi Amadi",
    role: "Peer & Project Collaborator",
  },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 text-center">Testimonials</p>
        <h2 className="section-title text-center mb-16">What People Say</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 100}>
            <div className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col">
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-6">"{t.text}"</p>
              <div>
                <p className="font-serif font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
