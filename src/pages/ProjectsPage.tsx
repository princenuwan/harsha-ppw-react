import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
// import FadeIn from "@/components/FadeIn";

const ProjectsPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        {/* <FadeIn>
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-4 text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">My Work</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Academic and community projects that reflect my commitment to impactful nutrition practice.
            </p>
          </div>
        </FadeIn> */}
        <Projects />
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
