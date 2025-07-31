import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplets, Search, Shield, ChefHat, Hammer, Filter, Building } from "lucide-react";

import waterHeaterImg from "@/assets/water-heater-service.jpg";
import sewerDrainImg from "@/assets/sewer-drain-service.jpg";
import leakDetectionImg from "@/assets/leak-detection.jpg";
import leakRepairImg from "@/assets/leak-repair.jpg";
import kitchenBathImg from "@/assets/kitchen-bath.jpg";
import remodelingImg from "@/assets/remodeling.jpg";
import waterPurificationImg from "@/assets/water-purification.jpg";
import commercialImg from "@/assets/commercial-plumbing.jpg";

const Services = () => {
  const services = [
    {
      title: "Water Heater",
      description: "Ensure a steady supply of hot water with expert water heater installation, repair, and maintenance services.",
      icon: Wrench,
      image: waterHeaterImg,
    },
    {
      title: "Sewer & Drain",
      description: "Get fast and effective sewer and drain cleaning to prevent clogs, backups, and other plumbing issues.",
      icon: Droplets,
      image: sewerDrainImg,
    },
    {
      title: "Leak Detection",
      description: "Our advanced leak detection services help identify and resolve hidden leaks before they cause damage.",
      icon: Search,
      image: leakDetectionImg,
    },
    {
      title: "Water Leak Repair",
      description: "Quick and reliable water leak repairs to protect your home from costly water damage.",
      icon: Shield,
      image: leakRepairImg,
    },
    {
      title: "Kitchen and Bath",
      description: "Expert plumbing installations and repairs for your kitchen and bathroom upgrades.",
      icon: ChefHat,
      image: kitchenBathImg,
    },
    {
      title: "Remodeling Services",
      description: "Transform your home with seamless plumbing solutions for kitchen and bathroom remodels.",
      icon: Hammer,
      image: remodelingImg,
    },
    {
      title: "Water Purification",
      description: "Enjoy clean, purified water with our water filtration and purification system installation services.",
      icon: Filter,
      image: waterPurificationImg,
    },
    {
      title: "Commercial Plumbing",
      description: "Comprehensive plumbing solutions for businesses, ensuring smooth operations and compliance.",
      icon: Building,
      image: commercialImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-plumbing-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-plumbing-blue font-medium mb-4 text-white">From Repairs to Installations, We Handle It All</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Plumbing Services You Can Rely On
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-white border-4 border-plumbing-red/30 shadow-lg hover:shadow-blue-500/20"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plumbing-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-card">
                      <IconComponent className="h-6 w-6 text-plumbing-blue" />
                    </div>
                  </div>
                  
                  <div className="bg-plumbing-dark text-white p-6 rounded-xl shadow-card">
                    <h3 className="text-xl font-bold text-white group-hover:text-plumbing-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mt-2">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;