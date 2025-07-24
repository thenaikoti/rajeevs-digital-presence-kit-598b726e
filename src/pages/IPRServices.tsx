import { Shield, Search, FileText, BarChart3, CheckCircle, MessageCircle, Mail, ArrowRight, Users, Clock, Globe, Award, Lightbulb, Target, TrendingUp, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

  const stats = [
    { number: "500+", label: "Patents Filed", icon: FileText },
    { number: "150+", label: "Satisfied Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We understand your innovation, business goals, and IP needs through detailed consultation.",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "Strategic Planning",
      description: "Our experts develop a customized IP strategy tailored to your specific requirements.",
      icon: Target
    },
    {
      step: 3,
      title: "Research & Analysis",
      description: "Comprehensive patent searches and landscape analysis to identify opportunities and risks.",
      icon: Search
    },
    {
      step: 4,
      title: "Implementation",
      description: "Professional patent drafting, filing, and ongoing portfolio management services.",
      icon: Shield
    },
    {
      step: 5,
      title: "Monitoring & Support",
      description: "Continuous monitoring of your IP portfolio with regular updates and strategic advice.",
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "TechStart Innovations",
      role: "CTO",
      content: "EnviroAndIPR's expertise in patent search and filing helped us secure crucial IP protection for our breakthrough technology. Their thorough approach and attention to detail is exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GreenTech Solutions",
      role: "Founder",
      content: "The team's deep understanding of both environmental technology and IP law made them the perfect partner for our patent strategy. Highly recommended for any serious innovator.",
      rating: 5
    },
    {
      name: "Prof. Amanda Rodriguez",
      company: "Research Institute",
      role: "Director",
      content: "Outstanding service in patent landscape analysis. They helped us identify white spaces in our research area and guided our R&D investments effectively.",
      rating: 5
    }
  ];

  const industries = [
    { name: "Environmental Technology", icon: Globe, description: "Clean energy, waste management, pollution control" },
    { name: "Biotechnology", icon: Lightbulb, description: "Pharmaceuticals, medical devices, bioengineering" },
    { name: "Information Technology", icon: Search, description: "Software, AI, telecommunications, electronics" },
    { name: "Manufacturing", icon: Award, description: "Industrial processes, automation, materials science" },
    { name: "Research & Academia", icon: BookOpen, description: "Universities, research institutions, think tanks" },
    { name: "Startups & SMEs", icon: TrendingUp, description: "Emerging companies, innovation hubs, incubators" }
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

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Innovators Worldwide</h2>
            <p className="text-lg text-muted-foreground">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to ongoing support, we guide you through every step of your IP journey
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      {index < process.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-16 w-24 h-0.5 bg-primary/30"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across diverse sectors and emerging technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{industry.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by innovators, researchers, and industry leaders</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-accent/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose EnviroAndIPR?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-left font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Get answers to common questions about our IPR services</p>
            </div>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-3 w-full mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-6">
                <div className="bg-accent/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">What types of patents can you help me file?</h3>
                  <p className="text-muted-foreground">We assist with utility patents, design patents, and provisional patent applications across all technology sectors including environmental technology, biotechnology, software, and manufacturing.</p>
                </div>
                <div className="bg-accent/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">How long does the patent process take?</h3>
                  <p className="text-muted-foreground">Patent prosecution typically takes 1-3 years depending on the complexity and jurisdiction. We provide regular updates throughout the process and work to expedite whenever possible.</p>
                </div>
                <div className="bg-accent/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Do you work with international patents?</h3>
                  <p className="text-muted-foreground">Yes, we handle patent filings globally including PCT applications, direct national filings, and provide strategic advice on international IP portfolio management.</p>
                </div>
              </TabsContent>
              <TabsContent value="process" className="space-y-6">
                <div className="bg-accent/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">What information do I need to provide for a patent search?</h3>
                  <p className="text-muted-foreground">We need a detailed description of your invention, its technical specifications, intended use, and any existing prior art you're aware of. The more detailed the information, the more comprehensive our search will be.</p>
                </div>
                <div className="bg-accent/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">How do you ensure confidentiality?</h3>
                  <p className="text-muted-foreground">All client information is protected under strict confidentiality agreements. Our team follows rigorous security protocols and we can provide additional NDAs if required.</p>
                </div>
              </TabsContent>
              <TabsContent value="pricing" className="space-y-6">
                <div className="bg-accent/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">What are your consultation fees?</h3>
                  <p className="text-muted-foreground">Initial consultations are complimentary. We provide transparent pricing for all services with detailed quotes based on your specific requirements and scope of work.</p>
                </div>
                <div className="bg-accent/20 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Do you offer package deals for multiple services?</h3>
                  <p className="text-muted-foreground">Yes, we offer comprehensive IP package solutions that combine search, filing, and portfolio management services at competitive rates for long-term partnerships.</p>
                </div>
              </TabsContent>
            </Tabs>
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