import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
