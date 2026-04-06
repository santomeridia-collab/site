import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Code, BrainCircuit, ArrowUpRight, TrendingUp } from "lucide-react";
import { useState } from "react";

const divisions = [
  {
    name: "SMIT",
    tagline: "Upskill for Tomorrow",
    description: "Professional training programs in cutting-edge technologies designed to upskill and reskill the workforce of tomorrow",
    path: "/smit",
    icon: GraduationCap,
    bgColor: "bg-[#159ab7]",
    bgPattern: "bg-[#159ab7]/10",
    
  },
  {
    name: "SMILE",
    tagline: "Nurturing Bright Minds",
    description: "Personalized tutoring and academic support to help students from grades 1-12 achieve their full potential",
    path: "/smile",
    icon: BookOpen,
    bgColor: "bg-[#1e5067]",
    bgPattern: "bg-[#1e5067]/10",
    
  },
  {
    name: "SMS²",
    tagline: "Engineering the Future",
    description: "Transforming ideas into digital reality through innovative software engineering",
    path: "/smss",
    icon: Code,
    bgColor: "bg-[#159ab7]",
    bgPattern: "bg-[#159ab7]/10",
   
  },
  {
    name: "SMRD",
    tagline: "Inventing New Realities",
    description: "Pushing the boundaries of human knowledge through groundbreaking research and innovation across multiple scientific disciplines",
    path: "/smrd",
    icon: BrainCircuit,
    bgColor: "bg-[#141e26]",
    bgPattern: "bg-[#141e26]/10",
   
  },
  {
    name: "SMDG",
    tagline: "Scaling Innovation for Global Impact",
    description: "Accelerating digital growth through data-driven strategies, market expansion, and scalable solutions for global reach",
    path: "/smdg",
    icon: TrendingUp,
    bgColor: "bg-[#159ab7]",
    bgPattern: "bg-[#159ab7]/10",
  },
  
];

const DivisionsGateway = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="divisions" className="py-24 bg-[#cbd8df] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9ac5d3]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#159ab7]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
         

          <h2 className="text-5xl md:text-6xl font-black text-[#141e26] leading-tight">
            Our Innovation
            <br />
            <span className="text-[#159ab7]">
              Ecosystem
            </span>
          </h2>

          <p className="text-xl text-[#1e5067] max-w-3xl mx-auto leading-relaxed">
            Four specialized divisions working in harmony to create lasting impact
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {divisions.map((division, index) => (
            <Link
              key={division.path}
              to={division.path}
              className="group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative h-full p-8 rounded-lg bg-[#ffffff] border-2 border-[#9ac5d3]/50 hover:border-[#159ab7] transition-all duration-500 hover:shadow-2xl hover:shadow-[#159ab7]/20 overflow-hidden ${hoveredIndex === index ? 'scale-105 -translate-y-2' : ''
                }`}>

                {/* Animated Background */}
                <div className={`absolute inset-0 ${division.bgPattern} opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>

                {/* Floating Pattern */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-full h-full ${division.bgColor} rounded-full blur-xl`}></div>
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 rounded-2xl ${division.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                      <division.icon className="h-8 w-8 text-white" />
                    </div>

                    
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-[#141e26] group-hover:text-[#159ab7] transition-colors duration-300">
                      {division.name}
                    </h3>

                    <p className="text-lg font-semibold text-[#159ab7]">
                      {division.tagline}
                    </p>

                    <p className="text-[#1e5067] leading-relaxed">
                      {division.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${division.bgColor} text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                      Explore Division
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl ${division.bgColor}/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700`}></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#1e5067] mb-6">Ready to explore our ecosystem?</p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 group border border-gray-400 bg-transparent text-[#141e26] hover:bg-[#002147] hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-[#159ab7]/25"
          >
            Learn More About Us
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DivisionsGateway;
