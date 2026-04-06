import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import img6 from "@/assets/slides/Investors.png";
import img2 from "@/assets/slides/Join our team.jpg.jpeg";
import img3 from "@/assets/slides/cp.jpeg";

const CTASection = () => {
  const actions = [
    {
      title: "Invest With Us",
      description: "Join our journey of innovation and growth",
      path: "/investors",
      image: img6,
    },
    {
      title: "Join Our Team",
      description: "Build your career with purpose",
      path: "/careers",
      image: img2,
    },
    {
      title: "Collaborate & Partner",
      description: "Let's create impact together",
      path: "/contact",
      image: img3,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#d0d5dd] via-[#929db0] to-[#d0d5dd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-[#141e26] leading-tight">
            Be Part of the <span className="text-[#159ab7]">Journey</span> 
          </h2>
          <p className="text-lg text-[#536583]">
            Multiple ways to connect with Santomeridia
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {actions.map((action) => (
            <div
              key={action.path}
              className="group flex-1 rounded-2xl border border-[#929db0] hover:border-[#536583] transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden bg-cover bg-center relative min-h-[400px]"
              style={{ backgroundImage: `url(${action.image})` }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>

              {/* Content Section */}
              <div className="relative z-10 h-full p-4 lg:p-6 flex flex-col justify-end">
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-bold text-white">
                    {action.title}
                  </h3>
                  <p className="text-white/90 text-sm lg:text-base">
                    {action.description}
                  </p>
                  <Link to={action.path} className="inline-block mt-4">
                    <Button
                      className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300 text-sm lg:text-base  hover:bg-[#002147] hover:text-white hover:shadow-[#159ab7]/25"
                    >
                      Learn More
                      
                      
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
