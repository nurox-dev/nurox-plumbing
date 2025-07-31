import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "Fully licensed and insured professionals you can trust"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available around the clock for your urgent plumbing needs"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Over 25 years of combined plumbing expertise"
    },
  ];

  return (
    <section id="about" className="py-20 bg-plumbing-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-plumbing-blue font-medium text-white">About Us</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                Over 25+ Years Experience In Plumbing Service
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Nurox Plumbing professionals are here to handle all your plumbing needs. 
                  Full-Service Plumbing in your local area. Save on water heaters and schedule 
                  an appointment today. Services include Drain Cleaning, Water Filtration, 
                  Water Heater Repair, and Installation.
                </p>
                <p>
                  With years of experience and a trusted reputation, you can have peace of mind 
                  knowing your home and plumbing system are in safe, reliable hands. We'll get 
                  your plumbing back on track quickly and efficiently.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border-4 border-plumbing-red/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="bg-plumbing-blue/20 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-plumbing-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button className="bg-plumbing-blue hover:bg-plumbing-blue/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-hover">
              Learn More About Us
            </Button>
          </div>

          {/* Stats & Image */}
          <div className="relative">
            <div className="bg-gradient-service p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-plumbing-blue">500+</div>
                  <div className="text-sm font-medium text-plumbing-dark">Happy Customers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-plumbing-red">25+</div>
                  <div className="text-sm font-medium text-plumbing-dark">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-plumbing-blue">100%</div>
                  <div className="text-sm font-medium text-plumbing-dark">Satisfaction Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-plumbing-red">24/7</div>
                  <div className="text-sm font-medium text-plumbing-dark">Emergency Service</div>
                </div>
              </div>
            </div>

            {/* Quality Badge */}
            <div className="absolute -top-8 -right-8 bg-plumbing-red text-white p-6 rounded-full shadow-hover">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                <div className="text-sm font-bold">Quality</div>
                <div className="text-xs">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;