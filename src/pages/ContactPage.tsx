import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Build message as plain string
  const message = `New Contact Form Submission
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp API link (without '+')
  const phoneNumber = "447786041851";
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  // Open WhatsApp in the same tab
  window.location.href = whatsappURL;

  // Optional: clear form
  setFormData({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
};

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative h-[38vh] flex items-center justify-center mt-[120px]">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-primary/85" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground border-4 border-primary-foreground px-10 py-4 inline-block">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT SIDE – FORM */}
            <div className="bg-secondary p-10 md:p-12 rounded-xl shadow-xl space-y-6">
              <h2 className="text-3xl font-bold text-secondary-foreground">
                HAVE A QUERY?
              </h2>
              <p className="text-secondary-foreground/80 mt-2 mb-4">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12 w-full bg-background/10 border-background/30 text-secondary-foreground placeholder:text-secondary-foreground/60"
                  />

                  <Input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 w-full bg-background/10 border-background/30 text-secondary-foreground placeholder:text-secondary-foreground/60"
                  />
                </div>

                {/* Phone + Service */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="tel"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="h-12 w-full bg-background/10 border-background/30 text-secondary-foreground placeholder:text-secondary-foreground/60"
                  />

                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="h-12 w-full bg-background/10 border-background/30 text-secondary-foreground">
                      <SelectValue placeholder="Select Service *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manned-security">Manned Security</SelectItem>
                      <SelectItem value="cctv">24x7 CCTV Surveillance</SelectItem>
                      <SelectItem value="business">Business Security</SelectItem>
                      <SelectItem value="event">Event Security</SelectItem>
                      <SelectItem value="k9">K9 Security Units</SelectItem>
                      <SelectItem value="alarm">Alarm Response</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <Textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full bg-background/10 border-background/30 text-secondary-foreground placeholder:text-secondary-foreground/60 resize-none"
                />

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* RIGHT SIDE – INFO */}
            <div className="space-y-6">

              {/* Address */}
              <div className="flex gap-4 p-5 bg-card rounded-xl shadow hover:shadow-lg transition">
                <MapPin className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">Address</h3>
                  <p className="text-muted-foreground">BB1 3EU, Blackburn, UK</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-5 bg-card rounded-xl shadow hover:shadow-lg transition">
                <Phone className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">Phone</h3>
                  <a
                    href="tel:+447786041851"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    +44 7786 041851
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-5 bg-card rounded-xl shadow hover:shadow-lg transition">
                <Mail className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">Email</h3>
                  <a
                    href="mailto:Mh_mujahid70@yahoo.co.uk"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    Mh_mujahid70@yahoo.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MAP BELOW */}
          <div className="mt-10 h-[330px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.409612590713!2d-2.4789938!3d53.7499729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba50a2f7d3a71%3A0x0000000000000000!2sBB1%203EU!5e0!3m2!1sen!2suk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Mujahid Security Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
