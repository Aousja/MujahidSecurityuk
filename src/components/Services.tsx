// I'll paste both updated components with purple glow shadow on hover,
// service text animations, and removed the underline below the heading.

import { Button } from "@/components/ui/button";
import { Camera, ShieldCheck, Building2, Users, Dog, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import guardImage from "@/assets/guard-service.jpg";
import cctvImage from "@/assets/cctv-monitoring.jpg";
import eventsecurity from "@/assets/event-security-1200x675.jpg";
import commericalsecurity from "@/assets/commercial-security-systems-1040x555.jpeg";
import herosecurity from "@/assets/hero-security.jpg";
import eight from "@/assets/8.jpg";
import imagee from "@/assets/images.jpeg";


const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Manned Security",
      description: "Professional SIA licensed security guards for your premises",
      image: guardImage,
    },
    {
      icon: Camera,
      title: "24x7 CCTV Surveillance",
      description: "Track criminal activity and secure all premises with advanced monitoring",
      image: cctvImage,
    },
    {
      icon: Building2,
      title: "Business Security",
      description: "Local response backed by national support for your enterprise",
      image: commericalsecurity,
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Comprehensive security solutions for events of all sizes",
      image: eventsecurity,
    },
    {
      icon: Dog,
      title: "K9 Security Units",
      description: "Dogs patrol suspicious areas, track offenders and detect threats",
      image: imagee,
    },
    {
      icon: AlertCircle,
      title: "Alarm Response",
      description: "Rapid response to security alarms and emergency situations",
      image: eight,
    },
  ];

  const handleEnquire = () => {
    window.location.href = "/contact-us";
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading with animation and underline removed */}
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p 
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-primary uppercase tracking-wider mb-2"
          >
            residential, business & event
          </motion.p>

          <motion.h2 
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            SECURITY SERVICES
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We tailor a range of security services to meet individual client needs
            with excellence, sustainability and innovation.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(128,0,255,0.6)] hover:-translate-y-2"
            >
              {service.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <service.icon className="h-20 w-20 text-primary" />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground flex items-center gap-2">
                  <service.icon className="h-5 w-5 text-primary" />
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button
                  onClick={handleEnquire}
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                >
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;