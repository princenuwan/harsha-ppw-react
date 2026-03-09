import { Mail, Phone, Linkedin, Send } from "lucide-react";
import FadeIn from "./FadeIn";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3 text-center">Get In Touch</p>
          <h2 className="section-title text-center mb-4">Let's Connect</h2>
          <p className="section-subtitle mx-auto text-center mb-16">
            I'm open to internship opportunities, collaborations, and conversations about nutrition science.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <FadeIn delay={100}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm">dmhckumari@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground text-sm">Phone</h4>
                  <p className="text-muted-foreground text-sm">+94 71 493 2394</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground text-sm">LinkedIn</h4>
                  <p className="text-muted-foreground text-sm">linkedin.com/in/adaeze-nwosu</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={200}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="font-serif text-xl font-semibold text-foreground mb-2">Thank you!</p>
                  <p className="text-muted-foreground text-sm">Your message has been received. I'll respond shortly.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 w-full justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
