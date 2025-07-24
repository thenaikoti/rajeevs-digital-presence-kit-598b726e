import { Shield, Search, FileText, BarChart3, CheckCircle, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';

const IPRServices = () => {
  const services = [
    {
      title: "Patent Search & Analytics",
      icon: Search,
      description: "Comprehensive patent research and analysis services",
      subServices: [
        {
          name: "Patentability (Novelty) Search",
          description: "Assess the uniqueness of your invention before filing. We conduct comprehensive global searches to ensure your idea is eligible for patent protection."
        },
        {
          name: "Patent Validity/Invalidity Search", 
          description: "Validate or challenge patents with exhaustive prior art research—crucial for defending your IP or contesting competitors' claims."
        },
        {
          name: "Patent Infringement Search",
          description: "Protect your business from legal risk by identifying any enforceable patents your product or process might overlap with."
        },
        {
          name: "Freedom to Operate (FTO) Search",
          description: "Make, use, and sell your innovation with confidence. We determine whether your concept can proceed without infringing on others' rights."
        }
      ]
    },
    {
      title: "Patent Drafting & Filing",
      icon: FileText,
      description: "Professional patent application services",
      subServices: [
        {
          name: "Complete Patent Applications",
          description: "Craft robust, compliant patent applications that withstand scrutiny. We manage the entire drafting process, from technical specs to legal claims and drawings."
        }
      ]
    },
    {
      title: "Strategic IP Intelligence",
      icon: BarChart3,
      description: "Business intelligence for intellectual property",
      subServices: [
        {
          name: "State-of-the-Art Search",
          description: "Map the current landscape in your technology area to spot opportunities and direct R&D investments."
        },
        {
          name: "Patent Landscape & Competitor Analysis",
          description: "Understand the IP strategies and portfolios of key players in your sector—identify gaps, threats, and growth opportunities."
        },
        {
          name: "Patent Portfolio Analysis",
          description: "Evaluate your existing patents to guide licensing, litigation, or new investment decisions."
        },
        {
          name: "Technology & White-space Assessment",
          description: "Uncover innovation opportunities and market gaps—fueling smarter product development and business growth."
        }
      ]
    }
  ];

  const benefits = [
    "Unmatched expertise in patent research, strategy, and protection",
    "In-depth knowledge of global IPR regulations and trends", 
    "Confidential, business-oriented service trusted by clients worldwide",
    "Actionable insights for innovators, startups, corporates, and academic institutions"
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "91XXXXXXXXXX";
    const message = "Hi, I'm interested in your IPR consultancy services. I'd like to schedule a consultation to discuss my intellectual property needs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <Helmet>
        <title>IPR Consultancy Services - Patent Search, Filing & IP Strategy | EnviroAndIPR</title>
        <meta name="description" content="Expert IPR consultancy services including patent search, patent filing, IP strategy, and intellectual property protection. Professional patent services for inventors and businesses." />
        <meta name="keywords" content="IPR consultancy, patent search, patent filing, intellectual property, patent drafting, IP strategy, patent landscape analysis, patent portfolio" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              IPR Consultancy Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Safeguard Your Ideas. Accelerate Your Growth.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              At EnviroAndIPR, we help inventors, startups, research organizations, and businesses protect, 
              manage, and maximize the value of their intellectual property. Our expert IPR consultancy 
              ensures your innovations stay secure—and your business stays ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IPR Service Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive intellectual property services to protect and maximize your innovations
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.subServices.map((subService, subIndex) => (
                      <div key={subIndex} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                        <h4 className="font-semibold mb-2 text-foreground">{subService.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{subService.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose EnviroAndIPR?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-background rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-left font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Next Big Idea?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Partner with EnviroAndIPR and protect your intellectual property with confidence. 
              Contact us for a confidential consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleWhatsAppClick}
                className="bg-white text-primary hover:bg-gray-100"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enquire on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="/contact">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IPRServices;