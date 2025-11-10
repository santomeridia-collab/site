import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "../../assets/images/logo.jpeg"

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-smooth">
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-hero">
              <span className="text-xl font-bold text-primary-foreground">S</span>
            </div> */}
            <img src={logo} alt="Santomeridia Logo" className="h-10 w-10 rounded-lg" />
        
            <div className="hidden lg:block">
              <div className="text-lg font-bold text-foreground leading-tight">
                Santomeridia Research Labs
              </div>
              <div className="text-xs text-muted-foreground">Where Innovation Meets Impact</div>
            </div>
            <div className="lg:hidden">
              <div className="text-base font-bold text-foreground">Santomeridia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant="ghost" 
                className={cn(isActive("/") && "bg-accent")}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="ghost"
                className={cn(isActive("/about") && "bg-accent")}
              >
                About
              </Button>
            </Link>

            {/* Divisions Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                    Divisions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] md:grid-cols-2 bg-popover">
                      {divisions.map((division) => (
                        <Link
                          key={division.path}
                          to={division.path}
                          className="group block space-y-1 rounded-lg p-4 hover:bg-accent transition-smooth"
                        >
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-smooth">
                            {division.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {division.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/careers">
              <Button 
                variant="ghost"
                className={cn(isActive("/careers") && "bg-accent")}
              >
                Careers
              </Button>
            </Link>
            <Link to="/investors">
              <Button 
                variant="ghost"
                className={cn(isActive("/investors") && "bg-accent")}
              >
                Investors
              </Button>
            </Link>
            <Link to="/knowledge">
              <Button 
                variant="ghost"
                className={cn(isActive("/knowledge") && "bg-accent")}
              >
                Knowledge Hub
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="ghost"
                className={cn(isActive("/contact") && "bg-accent")}
              >
                Contact
              </Button>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
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
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                About
              </Button>
            </Link>
            
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-muted-foreground mb-2">Divisions</div>
              <div className="space-y-1 pl-2">
                {divisions.map((division) => (
                  <Link
                    key={division.path}
                    to={division.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="ghost" className="w-full justify-start text-sm">
                      {division.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Careers
              </Button>
            </Link>
            <Link to="/investors" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Investors
              </Button>
            </Link>
            <Link to="/knowledge" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Knowledge Hub
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
