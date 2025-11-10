import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Handshake } from "lucide-react";

const CTASection = () => {
  const actions = [
    {
      icon: TrendingUp,
      title: "Invest With Us",
      description: "Join our journey of innovation and growth",
      path: "/investors",
      variant: "default" as const,
    },
    {
      icon: Users,
      title: "Join Our Team",
      description: "Build your career with purpose",
      path: "/careers",
      variant: "accent" as const,
    },
    {
      icon: Handshake,
      title: "Collaborate & Partner",
      description: "Let's create impact together",
      path: "/contact",
      variant: "cta" as const,
    },
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Be Part of the Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Multiple ways to connect with Santomeridia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {actions.map((action) => (
            <div
              key={action.path}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-elegant hover-lift"
            >
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <action.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {action.description}
                  </p>
                </div>

                <Link to={action.path} className="block">
                  <Button 
                    variant={action.variant} 
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
