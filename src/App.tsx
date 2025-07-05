
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Studio from "./pages/departments/Studio";
import Marketing from "./pages/departments/Marketing";
import Design from "./pages/departments/Design";
import Tech from "./pages/departments/Tech";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import LifeAtKaki from "./pages/LifeAtKaki";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Preloader from "./components/Preloader";
import CaseStudyDetail from "./pages/CaseStudyDetail";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-kaki-black text-kaki-white">
            <Preloader />
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/departments/studio" element={<Studio />} />
              <Route path="/departments/marketing" element={<Marketing />} />
              <Route path="/departments/design" element={<Design />} />
              <Route path="/departments/tech" element={<Tech />} />
              <Route path="/works" element={<Works />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
              <Route path="/life-at-kaki" element={<LifeAtKaki />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
