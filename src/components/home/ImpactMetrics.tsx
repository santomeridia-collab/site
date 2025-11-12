import { useEffect, useState } from "react";

const metrics = [
  { value: 10000, label: "Learners", suffix: "+" },
  { value: 60, label: "Research Projects", suffix: "+" },
  { value: 120, label: "Clients", suffix: "+" },
  { value: 3, label: "Countries", suffix: "" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent inline-block">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Impact in Numbers
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Measured in People. Proven in Progress.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <div className="mt-3 text-base sm:text-lg font-medium text-gray-600">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
