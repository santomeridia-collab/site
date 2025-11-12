import { ArrowRight } from "lucide-react";

const VisionFlow = () => {
  const steps = [
    { title: "Research", color: "from-blue-500 to-cyan-500" },
    { title: "Learning", color: "from-purple-500 to-pink-500" },
    { title: "Application", color: "from-green-500 to-emerald-500" },
    { title: "Societal Impact", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-background via-gray-50 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Unified Vision
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Santomeridia integrates education, innovation, and technology under one purpose — 
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
                    className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md hover:shadow-xl transition-transform duration-500 group-hover:scale-105`}
                  >
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg px-3 leading-snug">
                      {step.title}
                    </span>
                  </div>
                </div>

                {/* Arrow (Desktop and Mobile) */}
                {index < steps.length - 1 && (
                  <>
                    <ArrowRight className="hidden md:block h-8 w-8 mx-4 text-muted-foreground" />
                    <ArrowRight className="md:hidden h-8 w-8 my-4 rotate-90 text-muted-foreground" />
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
