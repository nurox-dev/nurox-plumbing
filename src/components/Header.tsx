import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "HOME", href: "#home" },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT US", href: "#about" },
    { name: "OUR TEAM", href: "#team" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-plumbing-dark text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span className="!text-white">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Serving Local Areas</span>
            </div>
          </div>
          <div className="hidden md:block">
            Expert Plumbing Solutions, On Time, Every Time
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gray-300 shadow-card sticky top-0 z-50 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <div className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}nurox-logo.svg`} alt="Nurox Plumbing Logo" className="h-20 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-plumbing-dark hover:text-primary font-semibold text-xl transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-plumbing-red hover:bg-plumbing-red/90 text-white px-8 py-3 rounded-lg text-lg font-bold transition-all duration-300 hover:shadow-hover">
                Contact Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-plumbing-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-plumbing-dark hover:text-primary font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-plumbing-red hover:bg-plumbing-red/90 text-white px-6 py-2 rounded-lg w-fit">
                  Contact Now
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;