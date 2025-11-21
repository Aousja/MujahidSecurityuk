import { ShieldCheck, BadgeCheck, Eye, Siren } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const text = "WELCOME TO MUJAHID SECURITY";

  const features = [
    {
      icon: ShieldCheck,
      title: "SIA Licensed",
      description: "All our security personnel are fully SIA licensed and trained",
    },
    {
      icon: BadgeCheck,
      title: "Professional Team",
      description: "Highly trained staff with extensive security experience",
    },
    {
      icon: Eye,
      title: "30+ Years Experience",
      description: "Decades of combined experience in high-risk environments",
    },
    {
      icon: Siren,
      title: "24/7 Support",
      description: "Rapid emergency response & monitoring teams",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-foreground overflow-hidden whitespace-nowrap mx-auto flex items-center justify-center"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "linear" }}
          >
            {text}
            <span className="inline-block w-1 h-10 bg-primary animate-pulse ml-1" />
          </motion.h2>

          {/* Paragraph fade animation */}
          <motion.p
            className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             At Mujahid Security Services we are committed to providing you with the highest level 
            of protection to your enterprise, assets and the safety of your personnel. We aim to 
            achieve this by investing in our staff, by providing them with a high level of training 
            and ongoing personal development. Have no doubts that your security needs will always 
            be met to the highest standards.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.18 }}
                className="
                  bg-card p-6 rounded-xl shadow-lg transition-all duration-300 text-center
                  hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(128,0,255,0.7)]
                "
              >
                {/* Icon Hover Animation */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon className="h-8 w-8 text-primary" />
                </motion.div>

                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
