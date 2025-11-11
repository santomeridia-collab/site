import { Link } from "react-router-dom";
import { Linkedin, Youtube, Twitter, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Santomeridia</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-smooth">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/about#leadership" className="hover:text-primary transition-smooth">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/about#csr" className="hover:text-primary transition-smooth">
                  CSR Initiatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Divisions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Divisions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/acadience" className="hover:text-primary transition-smooth">
                  ACADIENCE
                </Link>
              </li>
              <li>
                <Link to="/centora" className="hover:text-primary transition-smooth">
                  CENTORA
                </Link>
              </li>
              <li>
                <Link to="/azyra" className="hover:text-primary transition-smooth">
                  AZYRA
                </Link>
              </li>
              <li>
                <Link to="/catalysta" className="hover:text-primary transition-smooth">
                  CATALYSTA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Corporate Governance</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/investors" className="hover:text-primary transition-smooth">
                  For Investors
                </Link>
              </li>
              <li>
                <Link to="/investors#reports" className="hover:text-primary transition-smooth">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link to="/investors#compliance" className="hover:text-primary transition-smooth">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="h-9 text-sm"
                />
                <Button variant="cta" size="sm">
                  Subscribe
                </Button>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/careers" className="hover:text-primary transition-smooth">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-smooth">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
           
            © 2025 Santomeridia Research Labs Pvt. Ltd. | CIN: [XXXX] |  An initiative of Santomeridia Global
          <br/>A Collective Identity for Santomeridia international offices | 
            {/* <br /> A Collective Identity of Santomeridia India (under registration) | */}
            {/* & Santomeridia UK (in progress) */}
            <br /> Head Office: Kerala, India |
            {/* International Liaison: London, United Kingdom */}
            <br /> ✉ infohub@santomeridia.com | 🌐 www.santomeridia.com |
            <br /> India Enquiries: in.infohub@santomeridia.com
            {/* <br /> UK Enquiries: uk.infohub@santomeridia.com */}
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>📍 Kerala, India</span>
            <span>•</span>
            <a
              href="mailto:infohub@santomeridia.com"
              className="hover:text-primary transition-smooth inline-flex items-center gap-1"
            >
              <Mail className="h-4 w-4" />
              infohub@santomeridia.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
