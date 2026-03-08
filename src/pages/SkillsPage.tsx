import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
// import FadeIn from "@/components/FadeIn";

const SkillsPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        {/* <FadeIn>
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-4 text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">What I Bring</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Competencies</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A growing toolkit of clinical, research, and interpersonal skills refined through academic training.
            </p>
          </div>
        </FadeIn> */}
        <Skills />
      </div>
      <Footer />
    </main>
  );
};

export default SkillsPage;
