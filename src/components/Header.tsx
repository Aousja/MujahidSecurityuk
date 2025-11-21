import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const goToContactPage = () => {
    window.location.href = "/contact-us";
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">

      {/* 🔥 TOP ANIMATED TICKER BAR */}
      <div className="w-full bg-primary text-primary-foreground py-2 overflow-hidden select-none">
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap text-sm font-medium px-4"
          animate={{ x: ["10%", "-80%"] }}
          transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
        >
          {/* Punchline 1 */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Contact Us Here → +447786041851</span>
          </div>

          <span className="opacity-40">•</span>

          {/* Punchline 2 */}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Our Email → Mh_mujahid70@yahoo.co.uk</span>
          </div>

          <span className="opacity-40">•</span>

          {/* Punchline 3 */}
          <span>Your Safety, Our Priority — Mujahid Security Ltd UK</span>

          <span className="opacity-40">•</span>

          {/* Punchline 4 */}
          <span>24/7 Protection Services — Trained & Licensed Officers</span>

          <span className="opacity-40">•</span>

          {/* Punchline 5 */}
          <span>Trusted Security Solutions for Homes & Businesses</span>

          {/* Duplicate for smooth infinite scroll */}
          <span className="opacity-40">•</span>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Contact Us → +447786041851</span>
          </div>

          <span className="opacity-40">•</span>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Email Us → Mh_mujahid70@yahoo.co.uk</span>
          </div>
        </motion.div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo + Branding */}
          <div className="flex items-start gap-3">
            <Shield className="h-10 w-10 text-primary" />

            <div>
              <h1 className="text-xl font-bold text-foreground">
                MUJAHID SECURITY
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                LTD UK
              </p>

              
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={goToContactPage} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
             <a
    href="tel:+447786041851"
    className="text-foreground hover:text-primary transition-colors font-semibold"
  >
    +44 778 604 1851
  </a>

            <ThemeToggle />

            <Button onClick={goToContactPage} className="bg-accent hover:bg-accent/90">
              Request Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors text-left">
              About Us
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors text-left">
              Services
            </button>
            <button onClick={goToContactPage} className="text-foreground hover:text-primary transition-colors text-left">
              Contact
            </button>
            <Button onClick={goToContactPage} className="bg-accent hover:bg-accent/90 w-full">
              Request Consultation
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
