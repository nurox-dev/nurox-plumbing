import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      role: "Master Plumber",
      certification: "Licensed Texas Master Plumber",
      experience: "15+ years",
      specialty: "Water heater installation and repair",
    },
    {
      name: "Sarah Johnson",
      role: "Executive Assistant",
      certification: "Operations Management",
      experience: "8+ years",
      specialty: "Customer service and scheduling",
    },
    {
      name: "David Chen",
      role: "Plumber Apprentice",
      certification: "State Certified Apprentice",
      experience: "3+ years",
      specialty: "Drain cleaning and maintenance",
    },
    {
      name: "James Wilson",
      role: "Licensed Tradesman",
      certification: "Licensed Tradesman Plumber",
      experience: "10+ years",
      specialty: "Leak detection and repair",
    },
    
  ];

  return (
    <section id="team" className="py-20 bg-plumbing-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-plumbing-blue font-medium mb-4 text-white">
            Experienced, Certified, and Dedicated to Serving You
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Meet the Plumbing Experts You Can Trust
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-plumbing-dark border-4 border-plumbing-red/30 overflow-hidden shadow-lg hover:shadow-blue-500/20"
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Avatar */}
                <div className="relative mx-auto w-28 h-28 bg-gradient-to-br from-plumbing-blue to-plumbing-red rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-plumbing-blue/20 to-plumbing-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-plumbing-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <Badge className="bg-plumbing-blue/20 text-plumbing-blue border border-plumbing-blue/30 hover:bg-plumbing-blue/30 px-4 py-1 text-sm font-medium">
                    {member.role}
                  </Badge>
                </div>
                
                {/* Details */}
                <div className="space-y-2 text-sm text-gray-300 bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-400">Certification:</span>
                    <span className="text-white">{member.certification}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-400">Experience:</span>
                    <span className="text-white">{member.experience}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-400">Specialty:</span>
                    <span className="text-white text-right">{member.specialty}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;