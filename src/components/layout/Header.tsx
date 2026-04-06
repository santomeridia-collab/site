import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const divisions = [
    { name: "SMIT", path: "/smit", description: "Advanced Learning Technologies", gradient: "from-[#159ab7] to-[#9ac5d3]" },
    { name: "SMILE", path: "/smile", description: "Intelligent Tutoring Systems", gradient: "from-[#1e5067] to-[#159ab7]" },
    { name: "SMS²", path: "/smss", description: "Digital Engineering Excellence", gradient: "from-[#9ac5d3] to-[#cbd8df]" },
    { name: "SMRD", path: "/smrd", description: "Breakthrough Research & Innovation", gradient: "from-[#141e26] to-[#1e5067]" },
     { name: "SMDG", path: "/smdg", description: "Breakthrough Research & Innovation", gradient: "from-[#141e26] to-[#1e5067]" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled
      ? 'bg-[#141e26]/95 backdrop-blur-2xl border-b border-[#1e5067]/30 shadow-2xl'
      : 'bg-[#141e26]/90 backdrop-blur-xl border-b border-[#1e5067]/20'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#159ab7]/20 to-[#9ac5d3]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={logo}
                alt="Santomeridia Logo"
                className="relative h-10 w-10 rounded-xl object-contain shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#159ab7] to-[#9ac5d3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-base font-bold text-[#cbd8df] group-hover:text-[#9ac5d3] transition-all duration-300">
                Santomeridia Research Labs
              </div>
              <div className="text-xs text-[#9ac5d3]/80 font-medium opacity-80">
              AI-first innovation. Phased frontier technologies. Global impact
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { label: "Home", path: "/" },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm font-medium px-4 py-2 hover:bg-[#1e5067]/20 transition-all duration-300 relative overflow-hidden group text-[#cbd8df] hover:text-[#9ac5d3]",
                    isActive(item.path) && "text-[#159ab7]"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#159ab7] to-[#9ac5d3] transform transition-all duration-300"></div>
                  )}
                </Button>
              </Link>
            ))}

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-[#1e5067]/20 text-sm font-medium px-4 py-2 transition-all duration-300 text-[#cbd8df] hover:text-[#9ac5d3]">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-6 w-[400px] bg-[#141e26]/95 backdrop-blur-xl border border-[#1e5067]/50 shadow-2xl rounded-2xl">
                      <Link
                        to="/about"
                        className="group block space-y-2 rounded-xl p-4 hover:bg-gradient-to-r hover:from-[#1e5067]/20 hover:to-[#159ab7]/10 transition-all duration-300 border border-transparent hover:border-[#1e5067]/30"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#159ab7] to-[#9ac5d3]"></div>
                          <div className="text-sm font-bold text-[#cbd8df] group-hover:text-[#9ac5d3]">
                            About Us
                          </div>
                        </div>
                        <div className="text-xs text-[#9ac5d3]/80 leading-relaxed">
                          Learn about our mission, vision, and values
                        </div>
                      </Link>
                      <Link
                        to="/careers"
                        className="group block space-y-2 rounded-xl p-4 hover:bg-gradient-to-r hover:from-[#1e5067]/20 hover:to-[#159ab7]/10 transition-all duration-300 border border-transparent hover:border-[#1e5067]/30"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1e5067] to-[#159ab7]"></div>
                          <div className="text-sm font-bold text-[#cbd8df] group-hover:text-[#9ac5d3]">
                            Careers
                          </div>
                        </div>
                        <div className="text-xs text-[#9ac5d3]/80 leading-relaxed">
                          Join our team and build your career with purpose
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Divisions Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-[#1e5067]/20 text-sm font-medium px-4 py-2 transition-all duration-300 text-[#cbd8df] hover:text-[#9ac5d3]">
                    Divisions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-6 w-[600px] md:grid-cols-2 bg-[#141e26]/95 backdrop-blur-xl border border-[#1e5067]/50 shadow-2xl rounded-2xl">
                      {divisions.map((division) => (
                        <Link
                          key={division.path}
                          to={division.path}
                          className="group block space-y-2 rounded-xl p-4 hover:bg-gradient-to-r hover:from-[#1e5067]/20 hover:to-[#159ab7]/10 transition-all duration-300 border border-transparent hover:border-[#1e5067]/30"
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${division.gradient}`}></div>
                            <div className="text-sm font-bold text-[#cbd8df] group-hover:text-[#9ac5d3]">
                              {division.name}
                            </div>
                          </div>
                          <div className="text-xs text-[#9ac5d3]/80 leading-relaxed">
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
              { label: "Investors", path: "/investors" },
              { label: "Knowledge Hub", path: "/knowledge" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-sm font-medium px-4 py-2 hover:bg-[#1e5067]/20 transition-all duration-300 relative overflow-hidden text-[#cbd8df] hover:text-[#9ac5d3]",
                    isActive(item.path) && "text-[#159ab7]"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#159ab7] to-[#9ac5d3] transform transition-all duration-300"></div>
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right-side buttons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex h-9 w-9 hover:bg-[#1e5067]/20 transition-all duration-300 group"
            >
              <Search className="h-4 w-4 text-[#cbd8df] group-hover:text-[#9ac5d3] transition-colors" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 hover:bg-[#1e5067]/20 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 text-[#cbd8df]" /> : <Menu className="h-4 w-4 text-[#cbd8df]" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#1e5067]/30 py-4 space-y-2 animate-in slide-in-from-top-2">
            {[
              { label: "Home", path: "/" },
            ].map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-[#cbd8df] hover:text-[#9ac5d3] hover:bg-[#1e5067]/20">
                  {item.label}
                </Button>
              </Link>
            ))}

            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-[#9ac5d3] mb-2">
                Services
              </div>
              <div className="space-y-1 pl-2">
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm text-[#cbd8df] hover:text-[#9ac5d3] hover:bg-[#1e5067]/20"
                  >
                    About Us
                  </Button>
                </Link>
                <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm text-[#cbd8df] hover:text-[#9ac5d3] hover:bg-[#1e5067]/20"
                  >
                    Careers
                  </Button>
                </Link>
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-[#9ac5d3] mb-2">
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
                      className="w-full justify-start text-sm text-[#cbd8df] hover:text-[#9ac5d3] hover:bg-[#1e5067]/20"
                    >
                      {division.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            {[
              { label: "Investors", path: "/investors" },
              { label: "Knowledge Hub", path: "/knowledge" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-[#cbd8df] hover:text-[#9ac5d3] hover:bg-[#1e5067]/20">
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
