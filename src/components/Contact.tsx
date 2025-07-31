import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "(555) 123-4567",
      subtitle: "24/7 Emergency Service"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@nuroxplumbing.com",
      subtitle: "Quick Response Guaranteed"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Local Area & Surrounding",
      subtitle: "Covering 25+ Mile Radius"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-6PM",
      subtitle: "Weekends & Emergency: 24/7"
    },
  ];

  const services = [
    "Sewer and Drain",
    "Water Leak Repair", 
    "Leak Detection",
    "Kitchen and Bath",
    "Remodeling Services",
    "Water Heater",
    "Water Purification",
    "Commercial Plumbing"
  ];

  return (
    <section id="contact" className="py-20 bg-plumbing-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-plumbing-blue font-medium mb-4 text-white">
            Get in Touch with Nurox Plumbing & Services
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Reach Out to Your Trusted Local Plumbers
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-400 border-4 border-plumbing-red/30 shadow-card shadow-lg hover:shadow-blue-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-plumbing-dark mb-6">
                Request a Service Call
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-plumbing-dark mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" required className="bg-white border-gray-300 text-plumbing-dark font-semibold" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-plumbing-dark mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" required className="bg-white border-gray-300 text-plumbing-dark font-semibold" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-plumbing-dark mb-2">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" required className="bg-white border-gray-300 text-plumbing-dark font-semibold" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-plumbing-dark mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your@email.com" className="bg-white border-gray-300 text-plumbing-dark font-semibold" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-plumbing-dark mb-2">
                    Service Needed *
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white border-gray-300 text-plumbing-dark font-semibold">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')} className="text-plumbing-dark font-semibold">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-plumbing-dark mb-2">
                    Address
                  </label>
                  <Input placeholder="Enter your address" className="bg-white border-gray-300 text-plumbing-dark font-semibold" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-plumbing-dark mb-2">
                    Describe Your Plumbing Issue
                  </label>
                  <Textarea 
                    placeholder="Please describe your plumbing issue in detail..." 
                    className="bg-white border-gray-300 text-plumbing-dark font-semibold min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-plumbing-red hover:bg-plumbing-red/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-hover"
                >
                  Request Service Call
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-gray-400 border-4 border-plumbing-red/30 shadow-card hover:shadow-hover transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-plumbing-blue/10 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-plumbing-blue" />
                        </div>
                        <div>
                          <h3 className="font-bold text-plumbing-dark mb-1">{info.title}</h3>
                          <p className="text-lg font-bold text-plumbing-blue mb-1">{info.details}</p>
                          <p className="text-sm text-plumbing-dark font-semibold">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Call-out */}
            <Card className="bg-gradient-hero text-white border-0 shadow-hover">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Emergency Plumbing?</h3>
                <p className="mb-6 opacity-90">
                  Don't wait! Our emergency plumbers are available 24/7 to handle urgent plumbing issues.
                </p>
                <Button 
                  size="lg"
                  className="bg-plumbing-red hover:bg-plumbing-red/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300"
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;