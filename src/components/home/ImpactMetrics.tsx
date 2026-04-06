import { useEffect, useState, useRef } from "react";
import { Users, Beaker, Briefcase, Globe } from "lucide-react";

const metrics = [
  {
    value: 10000,
    label: "Learners Empowered",
    suffix: "+",
    icon: Users,
    color: "bg-[#0f6aba]",
    description: "Students transformed through education"
  },
  {
    value: 60,
    label: "Research Projects",
    suffix: "+",
    icon: Beaker,
    color: "bg-[#598bb8]",
    description: "Groundbreaking studies completed"
  },
  {
    value: 120,
    label: "Trusted Partners",
    suffix: "+",
    icon: Briefcase,
    color: "bg-[#0f6aba]",
    description: "Organizations we collaborate with"
  },
  {
    value: 3,
    label: "Countries Reached",
    suffix: "",
    icon: Globe,
    color: "bg-[#598bb8]",
    description: "Global presence and impact"
  },
];

const AnimatedMetricCard = ({
  metric,
  index
}: {
  metric: typeof metrics[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = metric.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = 100 / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= 100) {
          setProgress(100);
          clearInterval(timer);
        } else {
          setProgress(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl bg-[#ffffff] border border-[#cddce8] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 150}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease-out'
      }}
    >
      {/* Gradient Background Animation */}
      <div className={`absolute inset-0 ${metric.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative p-8 space-y-6">
        {/* Icon with Pulse Animation */}
        <div className="relative">
          <div className={`w-16 h-16 rounded-2xl ${metric.color} p-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
            <Icon className="w-full h-full text-white" strokeWidth={2} />
          </div>
          {isVisible && (
            <div className={`absolute inset-0 w-16 h-16 rounded-2xl ${metric.color} animate-ping opacity-20`} />
          )}
        </div>

        {/* Progress Circle/Bar */}
        <div className="space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <div className={`text-5xl font-black text-[#0f6aba]`}>
                {isVisible ? metric.value.toLocaleString() : '0'}{metric.suffix}
              </div>
              <div className="text-sm font-semibold text-[#598bb8] uppercase tracking-wider mt-1">
                {metric.label}
              </div>
            </div>
          </div>

          {/* Animated Progress Bar */}
          <div className="relative h-2 bg-[#cddce8] rounded-full overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 ${metric.color} rounded-full transition-all duration-2000 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#598bb8] leading-relaxed">
          {metric.description}
        </p>

        {/* Decorative Element */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-5">
          <Icon className="w-full h-full text-[#cddce8]" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="py-20 bg-[#ffffff] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#cddce8]/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#598bb8]/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delayed-2" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#0f6aba]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delayed-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-[#0f6aba] rounded-full text-white text-sm font-semibold mb-4">
            Our Impact
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f6aba]">
            Making a <span className="text-[#598bb8]">Difference</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#598bb8] max-w-2xl mx-auto">
            Transforming lives through innovation, research, and collaboration
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <AnimatedMetricCard
              key={metric.label}
              metric={metric}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
