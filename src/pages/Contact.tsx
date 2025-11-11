import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Let's Build the Future, Together
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We're here to answer your questions and explore collaboration opportunities
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Phone Number" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Division of Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="acadience">ACADIENCE</SelectItem>
                      <SelectItem value="centora">CENTORA</SelectItem>
                      <SelectItem value="azyra">AZYRA</SelectItem>
                      <SelectItem value="catalysta">CATALYSTA</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Your Message" rows={6} />
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Whether you're looking to partner, invest, or simply learn more about 
                    Santomeridia, we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a 
                        href="mailto:infohub@santomeridia.com" 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        infohub@santomeridia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <span className="text-muted-foreground">+91 9745905095</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Headquarters</div>
                      <p className="text-muted-foreground">
                        Santomeridia Research Labs Pvt. Ltd,<br />
                        Second Floor, KC Arcade, Near TV Centre,<br />
                        CSEZ (P.O), Kakkanad, Ernakulam, 682037
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.114248687514!2d76.3424687!3d10.008797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0ed9f41e77%3A0x6aef6f9e1a9e0a2b!2s10%C2%B000'31.7%22N%2076%C2%B020'32.9%22E!5e0!3m2!1sen!2sin!4v1730436500000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 🌍 Global Communication */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl text-center space-y-12">
            <h2 className="text-4xl font-bold mb-8">🌍 Global Communication</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                {/* Website: <a href="https://www.santomeridia.com" className="text-primary hover:underline">www.santomeridia.com</a><br /> */}
                General Email: <a href="mailto:infohub@santomeridia.com" className="text-primary hover:underline">infohub@santomeridia.com</a>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <h3 className="text-2xl font-bold mb-3">🇮🇳 India Office</h3>
                <p className="text-muted-foreground">
                  <strong>Santomeridia Research Labs Pvt. Ltd.</strong><br />
                  Head Office: Kerala, India<br />
                  ✉ <a href="mailto:in.infohub@santomeridia.com" className="text-primary hover:underline">in.infohub@santomeridia.com</a>
                </p>
              </div>

              {/* <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                {/* <h3 className="text-2xl font-bold mb-3">🇬🇧 United Kingdom Office</h3> */}
                <p className="text-muted-foreground">
                  {/* <strong>Santomeridia Research Labs Ltd.</strong> (in progress)<br /> */}
                  {/* International Liaison: London, United Kingdom<br /> */}
                  {/* ✉ <a href="mailto:uk.infohub@santomeridia.com" className="text-primary hover:underline">uk.infohub@santomeridia.com</a> */}
                </p>
              {/* </div> */} 
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4">🤝 Connect With Us</h3>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition"><Youtube className="h-6 w-6" /></a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Handles to be added once finalized</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
