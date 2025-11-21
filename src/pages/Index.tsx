import { Parallax } from "react-parallax";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import guardImage from "@/assets/guard-service.jpg";
import cctvImage from "@/assets/cctv-monitoring.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <Parallax
        blur={0}
        bgImage={guardImage}
        bgImageAlt="Security Guard"
        strength={300}
      >
        <div className="h-32 bg-gradient-to-r from-secondary/80 to-primary/70" />
      </Parallax>

      <About />
      
      <Parallax
        blur={0}
        bgImage={cctvImage}
        bgImageAlt="CCTV Monitoring"
        strength={300}
      >
        <div className="h-32 bg-gradient-to-r from-primary/70 to-secondary/80" />
      </Parallax>

      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
