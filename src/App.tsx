
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Helmet>
            <title>Rajeev Ranjan - Digital Consultant & Business Strategist</title>
            <meta name="description" content="Expert digital consulting services by Rajeev Ranjan. Strategic planning, business process optimization, and risk management solutions for sustainable growth." />
            <meta name="keywords" content="digital consultant, business strategy, process optimization, risk management, digital transformation, business consulting, strategic planning" />
            <meta name="author" content="Rajeev Ranjan" />
            <link rel="canonical" href="https://rajeev-ranjan.com" />
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Rajeev Ranjan - Digital Consultant & Business Strategist" />
            <meta property="og:description" content="Expert digital consulting services for business transformation and strategic growth." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://rajeev-ranjan.com" />
            <meta property="og:image" content="https://rajeev-ranjan.com/og-image.jpg" />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Rajeev Ranjan - Digital Consultant" />
            <meta name="twitter:description" content="Expert digital consulting services for business transformation." />
            <meta name="twitter:image" content="https://rajeev-ranjan.com/twitter-image.jpg" />
            
            {/* Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Rajeev Ranjan Consulting",
                "description": "Digital consulting and business strategy services",
                "url": "https://rajeev-ranjan.com",
                "telephone": "+91-98765-43210",
                "email": "rajeev@example.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New Delhi",
                  "addressCountry": "India"
                },
                "founder": {
                  "@type": "Person",
                  "name": "Rajeev Ranjan"
                },
                "sameAs": [
                  "https://linkedin.com/in/rajeev-ranjan",
                  "https://facebook.com/rajeev.ranjan"
                ]
              })}
            </script>
          </Helmet>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
