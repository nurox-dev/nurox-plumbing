import { Button } from "@/components/ui/button";
import heroPlumber from "@/assets/hero-plumber.jpg";
const Hero = () => {
  return <section id="home" className="bg-plumbing-dark text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg font-medium opacity-90">
                Expert Plumbing Solutions, On Time, Every Time
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Trusted Local Plumber for{" "}
                <span className="text-plumbing-red text-slate-50">Fast, Reliable Service</span>
              </h1>
              <p className="text-lg lg:text-xl opacity-90 max-w-2xl">
                At Nurox Plumbing, we provide top-notch plumbing services across your local area. 
                Whether it's a leaky faucet, clogged drain, or a complete system installation, 
                our licensed and experienced plumbers are here to handle it all.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-plumbing-red hover:bg-plumbing-red/90 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-hover">
                Book an Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black !hover:text-black hover:bg-white px-8 py-3 text-lg rounded-lg transition-all duration-300">
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-hover">
              <img src={heroPlumber} alt="Professional Nurox plumber providing expert service" className="w-full h-[500px] lg:h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-plumbing-dark text-white p-6 rounded-xl shadow-card">
              <div className="text-3xl font-bold text-plumbing-blue">25+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-plumbing-red text-white p-6 rounded-xl shadow-card">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm font-medium">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;