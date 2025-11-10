import { ArrowRight } from "lucide-react";

const VisionFlow = () => {
  const steps = [
    { title: "Research", color: "from-blue-500 to-cyan-500" },
    { title: "Learning", color: "from-purple-500 to-pink-500" },
    { title: "Application", color: "from-green-500 to-emerald-500" },
    { title: "Societal Impact", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Unified Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Santomeridia integrates education, innovation, and technology under one purpose — 
              to shape the future through applied intelligence.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-center gap-4 w-full md:w-auto">
                  <div className="flex-1 md:flex-initial text-center group">
                    <div className={`mx-auto w-32 h-32 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500 group-hover:scale-110`}>
                      <span className="text-white font-bold text-lg px-2">
                        {step.title}
                      </span>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block h-8 w-8 text-muted-foreground flex-shrink-0" />
                  )}
                  {index < steps.length - 1 && (
                    <ArrowRight className="md:hidden h-8 w-8 text-muted-foreground rotate-90 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionFlow;
