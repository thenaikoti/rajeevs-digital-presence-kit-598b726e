
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import EnvironmentalServices from "./pages/EnvironmentalServices";
import IPRServices from "./pages/IPRServices";
import LPOServices from "./pages/LPOServices";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import EnvironmentalComplianceIndia from "./pages/blog/EnvironmentalComplianceIndia";
import IPRProtectionSmallBusinessIndia from "./pages/blog/IPRProtectionSmallBusinessIndia";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/environmental-services" element={<EnvironmentalServices />} />
            <Route path="/ipr-services" element={<IPRServices />} />
            <Route path="/lpo-services" element={<LPOServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/environmental-compliance-regulations-india" element={<EnvironmentalComplianceIndia />} />
            <Route path="/blogs/ipr-protection-small-business-india" element={<IPRProtectionSmallBusinessIndia />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
