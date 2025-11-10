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
    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent inline-block">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600">
            Measured in People. Proven in Progress.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <div className="mt-2 text-lg font-medium text-gray-600">
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
