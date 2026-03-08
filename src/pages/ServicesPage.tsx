import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
// import FadeIn from "@/components/FadeIn";

const ServicesPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        {/* <FadeIn>
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-4 text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">What I Offer</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Upon completing my internship and certification, I plan to offer these specialised nutrition services.
            </p>
          </div>
        </FadeIn> */}
        <Services />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
