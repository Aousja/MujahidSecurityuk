import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const handleEnquire = () => {
    window.location.href = "/contact-us";
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-primary/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground pt-32 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            WE ENSURE OUR CLIENTS SAFETY
            <br />
            <motion.span
              className="text-accent"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              IS PARAMOUNT
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            Over 30 years of combined experience in the most demanding environments
          </motion.p>

          {/* Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <Button
              onClick={handleEnquire}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
            >
              ENQUIRE NOW
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
