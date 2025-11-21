import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            GET IN TOUCH
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your security is our concern. Contact us today for a free consultation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Left Section */}
          <div className="space-y-8">

            {/* Contact Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>

              <div className="space-y-6">

                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.03, translateX: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-md hover:shadow-purple-500/40 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                  </motion.div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+447786041851" className="text-muted-foreground hover:text-primary transition-colors">
                      +44 778 6041851
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.03, translateX: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-md hover:shadow-purple-500/40 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </motion.div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:Mh_mujahid70@yahoo.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
                      Mh_mujahid70@yahoo.co.uk
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.03, translateX: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-md hover:shadow-purple-500/40 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                  </motion.div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">BB1 3EU, Blackburn, United Kingdom</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-md hover:shadow-purple-500/40 transition-all"
            >
              <h4 className="font-bold text-lg mb-3 text-card-foreground">Why Choose Us?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> SIA Licensed Front Line Staff</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> 30+ Years Combined Experience</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> 24/7 Monitoring & Response</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">✓</span> Tailored Security Solutions</li>
              </ul>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-card p-10 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition-all duration-500"
>
  <h3 className="text-3xl font-bold mb-8 text-card-foreground text-center">
    Send Us a Message
  </h3>

  <form
    action="https://formspree.io/f/yourFormId" // <-- replace with your Formspree URL
    method="POST"
    className="space-y-6"
  >
    {/* Name */}
    <div className="relative">
      <Input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="bg-background border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-4 px-5 w-full text-card-foreground"
        required
      />
    </div>

    {/* Email */}
    <div className="relative">
      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="bg-background border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-4 px-5 w-full text-card-foreground"
        required
      />
    </div>

    {/* Phone */}
    <div className="relative">
      <Input
        name="phone"
        type="tel"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
        className="bg-background border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-4 px-5 w-full text-card-foreground"
        required
      />
    </div>

    {/* Message */}
    <div className="relative">
      <Textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        value={formData.message}
        onChange={handleChange}
        className="bg-background border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-4 px-5 w-full text-card-foreground resize-none"
        required
      />
    </div>

    {/* Submit Button */}
    <Button
      type="submit"
      className="w-full bg-primary hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-400/40 text-white text-lg font-semibold py-4 rounded-lg transition-all duration-300"
    >
      Send Message
    </Button>
  </form>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
