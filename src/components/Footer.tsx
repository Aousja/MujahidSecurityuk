import { Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-bold text-lg">MUJAHID SECURITY</h3>
                <p className="text-xs opacity-80">LTD UK</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Providing professional security services with excellence and reliability since 1990.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Manned Security</li>
              <li>CCTV Surveillance</li>
              <li>Event Security</li>
              <li>K9 Units</li>
              <li>Business Security</li>
              <li>Alarm Response</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="tel:08005677662" className="hover:text-accent transition-colors">
                  0800 5677662
                </a>
              </li>
              <li>
                <a href="mailto:info@mujahidsecurity.co.uk" className="hover:text-accent transition-colors">
                  info@mujahidsecurity.co.uk
                </a>
              </li>
              <li>United Kingdom</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Mujahid Security Ltd UK. All rights reserved. | SIA Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
