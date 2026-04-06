import { ArrowRight } from "lucide-react";
import img1 from "@/assets/slides/research.png";
import img2 from "@/assets/slides/learning.jpeg";
import img3 from "@/assets/slides/Applicat.png";
import img4 from "@/assets/slides/Social impact banner.jpeg";

const VisionFlow = () => {
  const steps = [
    { title: "Research",      bgImage: img1 },
    { title: "Learning",      bgImage: img2 },
    { title: "Application",   bgImage: img3 },
    { title: "Social Impact", bgImage: img4 },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#151313]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our <span className="bg-gradient-to-r from-[#159ab7] to-[#9ac5d3] bg-clip-text text-transparent">Unified Vision</span>
          </h2>
          <p className="text-base sm:text-lg text-[#59646b] max-w-3xl mx-auto">
            Santomeridia integrates education, innovation, and technology under one purpose ΓÇö
            to shape the future through applied intelligence.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto"
              >
                {/* Circle / Box */}
                <div className="text-center group flex flex-col items-center">
                  <div
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-cover bg-center flex items-center justify-center shadow-md hover:shadow-xl transition-transform duration-500 group-hover:scale-105 relative overflow-hidden"
                    style={{ backgroundImage: `url(${step.bgImage})` }}
                  >
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg px-3 leading-snug relative z-10 text-center">
                      {step.title}
                    </span>
                  </div>
                </div>

                {/* Arrow (Desktop and Mobile) */}
                {index < steps.length - 1 && (
                  <>
                    <ArrowRight className="hidden md:block h-8 w-8 mx-4 text-[#7b705e]" />
                    <ArrowRight className="md:hidden h-8 w-8 my-4 rotate-90 text-[#7b705e]" />
                  </>
                )}
              </div>
           
           ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionFlow;
