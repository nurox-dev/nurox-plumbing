import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const services = [
    "Water Heater Services",
    "Sewer & Drain Cleaning", 
    "Leak Detection",
    "Water Leak Repair",
    "Kitchen & Bath Plumbing",
    "Remodeling Services",
    "Water Purification",
    "Commercial Plumbing"
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Contact Us", href: "#contact" },
    { name: "Blog", href: "#blog" },
    { name: "Emergency Service", href: "#contact" },
    { name: "Get Quote", href: "#contact" }
  ];

  return (
    <footer className="bg-plumbing-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img src="/nurox-logo.svg" alt="Nurox Plumbing Logo" className="h-16 w-auto mb-4" />
              <p className="text-gray-300 leading-relaxed">
                Your trusted local plumbing experts with over 25 years of experience. 
                We provide reliable, professional plumbing services 24/7.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-plumbing-blue" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-plumbing-blue" />
                <span>info@nuroxplumbing.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-plumbing-blue" />
                <span>Serving Local Area & Surrounding</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href="#services"
                  className="block text-gray-300 hover:text-plumbing-blue transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-100 hover:text-plumbing-blue transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="block text-gray-100 hover:text-plumbing-blue transition-colors duration-300">
                About Us
              </a>
              <a href="#services" className="block text-gray-100 hover:text-plumbing-blue transition-colors duration-300">
                Our Services
              </a>
              <a href="#team" className="block text-gray-100 hover:text-plumbing-blue transition-colors duration-300">
                Our Team
              </a>
              <a href="#contact" className="block text-gray-100 hover:text-plumbing-blue transition-colors duration-300">
                Contact Us
              </a>
              <a href="#contact" className="block text-gray-100 hover:text-plumbing-blue transition-colors duration-300">
                Emergency Service
              </a>
              <a href="#contact" className="block text-gray-100 hover:text-plumbing-blue transition-colors duration-300">
                Get Quote
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Get plumbing tips and special offers delivered to your inbox.
            </p>
            
            <div className="space-y-3 mb-6">
              <Input 
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-plumbing-blue hover:bg-plumbing-blue/90 text-white">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-300 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="bg-white/10 p-2 rounded-lg hover:bg-plumbing-blue transition-colors duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300">
              © 2025 Nurox Plumbing & Services. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-plumbing-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-plumbing-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-plumbing-blue transition-colors duration-300">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;