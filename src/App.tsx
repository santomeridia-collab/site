import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Knowledge from "./pages/Knowledge";
import Acadience from "./pages/divisions/Acadience";
import Centora from "./pages/divisions/Centora";
import Azyra from "./pages/divisions/Azyra";
import Catalysta from "./pages/divisions/Catalysta";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/acadience" element={<Acadience />} />
          <Route path="/centora" element={<Centora />} />
          <Route path="/azyra" element={<Azyra />} />
          <Route path="/catalysta" element={<Catalysta />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
