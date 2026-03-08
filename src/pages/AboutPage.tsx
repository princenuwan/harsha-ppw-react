import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
