import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
// import FadeIn from "@/components/FadeIn";

const EducationPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        {/* <FadeIn>
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-4 text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">My Journey</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A strong academic foundation in Nutrition & Dietetics, built on rigorous coursework and hands-on learning.
            </p>
          </div>
        </FadeIn> */}
        <Education />
      </div>
      <Footer />
    </main>
  );
};

export default EducationPage;
