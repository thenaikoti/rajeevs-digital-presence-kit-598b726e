
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import IPRServices from "./pages/IPRServices";
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
            <title>Rajeev Ranjan – Environmental Scientist & IPR Consultant</title>
            <meta name="description" content="Expert consultancy in environmental regulations and intellectual property rights. Services in EIA reports, patents, copyright, and more." />
            <meta name="keywords" content="environmental scientist, IPR consultant, patent filing, EIA reports, environmental compliance, intellectual property, trademark registration, copyright protection" />
            <meta name="author" content="Rajeev Ranjan" />
            <link rel="canonical" href="https://EnviroAndIPR.com" />
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Rajeev Ranjan – Environmental Scientist & IPR Consultant" />
            <meta property="og:description" content="Expert consultancy in environmental regulations and intellectual property rights. Services in EIA reports, patents, copyright, and more." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://EnviroAndIPR.com" />
            <meta property="og:image" content="https://EnviroAndIPR.com/og-image.jpg" />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Rajeev Ranjan – Environmental Scientist & IPR Consultant" />
            <meta name="twitter:description" content="Expert consultancy in environmental regulations and intellectual property rights." />
            <meta name="twitter:image" content="https://EnviroAndIPR.com/twitter-image.jpg" />
            
            {/* Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Rajeev Ranjan Environmental & IPR Consulting",
                "description": "Environmental consultancy and intellectual property rights services",
                "url": "https://EnviroAndIPR.com",
                "telephone": "+91-XXXXXXXXXX",
                "email": "rajeev.ranjan@email.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New Delhi",
                  "addressCountry": "India"
                },
                "founder": {
                  "@type": "Person",
                  "name": "Rajeev Ranjan",
                  "jobTitle": "Environmental Scientist & IPR Consultant"
                },
                "serviceArea": {
                  "@type": "Country",
                  "name": "India"
                },
                "areaServed": "India",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Environmental & IPR Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Environmental Impact Assessment"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Patent Filing Services"
                      }
                    }
                  ]
                }
              })}
            </script>
          </Helmet>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ipr-services" element={<IPRServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
