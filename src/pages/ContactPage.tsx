import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import FadeIn from "@/components/FadeIn";

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        {/* <FadeIn>
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-4 text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Me</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm open to internship opportunities, collaborations, and conversations about nutrition science.
            </p>
          </div>
        </FadeIn> */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
