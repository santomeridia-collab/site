import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Knowledge from "./pages/Knowledge";
import Smit from "./pages/divisions/Acadience";
import Smile from "./pages/divisions/Centora";
import Smss from "./pages/divisions/Azyra";
import Smrd from "./pages/divisions/Catalysta";
import Smdg from "./pages/divisions/Digital";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/smit" element={<Smit />} />
          <Route path="/smile" element={<Smile />} />
          <Route path="/smss" element={<Smss />} />
          <Route path="/smrd" element={<Smrd />} />
          <Route path="/smdg" element={<Smdg />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
