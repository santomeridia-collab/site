import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Code, FlaskConical } from "lucide-react";

const divisions = [
  {
    name: "ACADIENCE",
    tagline: "Upskill for Tomorrow",
    path: "/acadience",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "CENTORA",
    tagline: "Nurturing Bright Minds",
    path: "/centora",
    icon: BookOpen,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "AZYRA",
    tagline: "Engineering the Future",
    path: "/azyra",
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "CATALYSTA",
    tagline: "Inventing New Realities",
    path: "/catalysta",
    icon: FlaskConical,
    gradient: "from-orange-500 to-red-500",
  },
];

const DivisionsGateway = () => {
  return (
    <section id="divisions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-in fade-in slide-in-from-bottom-2">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Innovation Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four specialized divisions working in harmony to create lasting impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((division, index) => (
            <Link
              key={division.path}
              to={division.path}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift shadow-card hover:shadow-glow overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10 space-y-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${division.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <division.icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {division.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {division.tagline}
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsGateway;
