import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const divisions = [
    { name: "ACADIENCE", path: "/acadience", description: "FutureTech Learning" },
    { name: "CENTORA", path: "/centora", description: "Smart Tutoring" },
    { name: "AZYRA", path: "/azyra", description: "Digital Engineering" },
    { name: "CATALYSTA", path: "/catalysta", description: "Research & Innovation" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition"
          >
            <img
              src={logo}
              alt="Santomeridia Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm sm:text-base md:text-lg font-bold text-foreground">
                Santomeridia Research Labs
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">
                Where Innovation Meets Impact
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm md:text-base",
                    isActive(item.path) && "bg-accent"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}

            {/* Divisions Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent text-sm md:text-base">
                    Divisions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 sm:p-6 w-[90vw] sm:w-[600px] md:grid-cols-2 bg-popover">
                      {divisions.map((division) => (
                        <Link
                          key={division.path}
                          to={division.path}
                          className="group block space-y-1 rounded-lg p-3 sm:p-4 hover:bg-accent transition"
                        >
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary">
                            {division.name}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground">
                            {division.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {[
              { label: "Careers", path: "/careers" },
              { label: "Investors", path: "/investors" },
              { label: "Knowledge Hub", path: "/knowledge" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm md:text-base",
                    isActive(item.path) && "bg-accent"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right-side buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2 animate-in slide-in-from-top-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
            ].map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.label}
                </Button>
              </Link>
            ))}

            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-muted-foreground mb-2">
                Divisions
              </div>
              <div className="space-y-1 pl-2">
                {divisions.map((division) => (
                  <Link
                    key={division.path}
                    to={division.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm hover:bg-accent"
                    >
                      {division.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            {[
              { label: "Careers", path: "/careers" },
              { label: "Investors", path: "/investors" },
              { label: "Knowledge Hub", path: "/knowledge" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
