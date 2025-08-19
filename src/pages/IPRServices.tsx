import { Shield, Search, FileText, BarChart3, CheckCircle, MessageCircle, Mail, ArrowRight, Users, Clock, Globe, Award, Lightbulb, Target, TrendingUp, BookOpen, Star, GraduationCap, Eye, Building, Zap, Brain, Lock, Fingerprint, Settings, HelpCircle, DollarSign, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Layout from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import testimonialSarah from '@/assets/testimonial-sarah.jpg';
import testimonialMichael from '@/assets/testimonial-michael.jpg';
import testimonialAmanda from '@/assets/testimonial-amanda.jpg';
import iprHeroIllustration from '@/assets/ipr-hero-illustration.jpg';
import processIllustration from '@/assets/process-illustration.jpg';
import ctaIllustration from '@/assets/cta-illustration.jpg';

const IPRServices = () => {
  const services = [
    {
      title: "Patentability Search",
      icon: Search,
      description: "Assess invention uniqueness before filing with comprehensive global searches."
    },
    {
      title: "Validity/Invalidity Search", 
      icon: Eye,
      description: "Validate or challenge patents with exhaustive prior art research."
    },
    {
      title: "Infringement Search",
      icon: Shield,
      description: "Identify enforceable patents that might overlap with your innovations."
    },
    {
      title: "Freedom to Operate (FTO)",
      icon: Zap,
      description: "Ensure your innovation can proceed without infringing existing patents."
    },
    {
      title: "Patent Drafting",
      icon: FileText,
      description: "Craft robust, compliant applications that withstand scrutiny."
    },
    {
      title: "State-of-the-Art Search",
      icon: Brain,
      description: "Map technology landscapes to spot opportunities and direct R&D."
    },
    {
      title: "Patent Landscape Study",
      icon: BarChart3,
      description: "Understand competitor IP strategies and identify market gaps."
    },
    {
      title: "Competitor Analysis",
      icon: Building,
      description: "Analyze rival portfolios to identify threats and opportunities."
    },
    {
      title: "Portfolio Analysis",
      icon: Target,
      description: "Evaluate existing patents for licensing and investment decisions."
    },
    {
      title: "Technology Assessment",
      icon: Lightbulb,
      description: "Uncover innovation opportunities and fuel smarter development."
    },
    {
      title: "White-space Analysis",
      icon: Globe,
      description: "Identify low patent density areas for new innovation opportunities."
    },
    {
      title: "IP Education & Training",
      icon: GraduationCap,
      description: "Patent agent exam prep, workshops, and IP courses for teams."
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Decades of experience in patent research and IP strategy"
    },
    {
      icon: TrendingUp,
      title: "Business-Oriented",
      description: "IP advisory that drives real commercial value"
    },
    {
      icon: Lock,
      title: "Confidential Service",
      description: "Trusted by inventors, startups, corporates, and institutions"
    },
    {
      icon: Target,
      title: "Actionable Insights",
      description: "Transform IP into competitive advantage with clear strategies"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: FileText },
    { number: "200+", label: "Satisfied Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Understand your innovation and IP needs",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "Strategic Planning",
      description: "Develop customized IP strategy",
      icon: Target
    },
    {
      step: 3,
      title: "Research & Analysis",
      description: "Comprehensive searches and landscape analysis",
      icon: Search
    },
    {
      step: 4,
      title: "Implementation",
      description: "Professional drafting and portfolio management",
      icon: Shield
    },
    {
      step: 5,
      title: "Monitoring & Support",
      description: "Ongoing portfolio monitoring and strategic advice",
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "TechStart Innovations",
      role: "CTO",
      content: "EnviroAndIPR's expertise helped us secure crucial IP protection for our breakthrough technology. Exceptional attention to detail.",
      rating: 5,
      image: testimonialSarah
    },
    {
      name: "Michael Chen",
      company: "GreenTech Solutions",
      role: "Founder",
      content: "Perfect partner for our patent strategy. Their deep understanding of both environmental tech and IP law is invaluable.",
      rating: 5,
      image: testimonialMichael
    },
    {
      name: "Prof. Amanda Rodriguez",
      company: "Research Institute",
      role: "Director",
      content: "Outstanding patent landscape analysis. They identified white spaces that guided our R&D investments effectively.",
      rating: 5,
      image: testimonialAmanda
    }
  ];

  const industries = [
    { name: "Environmental Technology", icon: Globe, description: "Clean energy, waste management, pollution control" },
    { name: "Biotechnology", icon: Lightbulb, description: "Pharmaceuticals, medical devices, bioengineering" },
    { name: "Information Technology", icon: Settings, description: "Software, AI, telecommunications, electronics" },
    { name: "Manufacturing", icon: Award, description: "Industrial processes, automation, materials" },
    { name: "Research & Academia", icon: BookOpen, description: "Universities, research institutions, think tanks" },
    { name: "Startups & SMEs", icon: TrendingUp, description: "Emerging companies, innovation hubs, incubators" }
  ];

  const faqs = [
    {
      question: "How long does patent filing take?",
      answer: "Initial application preparation takes 2-4 weeks, followed by 18-36 months for patent office examination, depending on jurisdiction and complexity."
    },
    {
      question: "What are patent filing costs?",
      answer: "Costs vary based on application type, claims, and jurisdictions. We provide detailed estimates after consultation and work within various budgets."
    },
    {
      question: "Can I file patents internationally?",
      answer: "Yes, we assist with international filing through PCT applications and direct national entries in multiple countries worldwide."
    },
    {
      question: "How do you develop IP strategy for startups?",
      answer: "We analyze your technology, market position, and goals to create tailored IP strategies that maximize protection while optimizing costs and timeline."
    },
    {
      question: "What is freedom to operate analysis?",
      answer: "FTO analysis identifies existing patents that might block your product from market entry, helping navigate potential infringement issues."
    },
    {
      question: "Do you provide patent agent exam coaching?",
      answer: "Yes, we offer comprehensive preparation including study materials, mock tests, and personalized coaching for patent agent examinations."
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "919195180016";
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
      <section className="relative bg-gradient-to-br from-brand-blue/5 via-background to-brand-green/5 py-16 md:py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="text-sm font-semibold border-brand-blue/30 text-brand-blue">
                <Shield className="w-4 h-4 mr-2" />
                IPR Consultancy Services
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-blue leading-tight">
                Safeguard Your Ideas. 
                <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
                  Accelerate Your Growth.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Helping inventors, startups, and enterprises secure and maximize their intellectual property with expert searches, drafting, and strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleWhatsAppClick} className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground hover-lift shadow-elegant">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" asChild className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground hover-lift">
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={iprHeroIllustration} 
                alt="IPR and innovation illustration" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-blue">Our IPR Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive intellectual property services to protect and maximize your innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-brand-blue/10 rounded-xl group-hover:bg-brand-blue/20 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-blue">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-muted/30 to-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">Trusted by Innovators Worldwide</h2>
            <p className="text-lg text-muted-foreground">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-xl shadow-elegant hover-lift transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-green/10 rounded-xl">
                    <stat.icon className="w-8 h-8 text-brand-green" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={processIllustration} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultation to ongoing support, we guide you through every step
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-brand-green-foreground font-bold text-xl shadow-lg hover-lift transition-all duration-300">
                      {step.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-16 w-16 h-0.5 bg-brand-blue/30"></div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <step.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-bold mb-3 text-brand-blue">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Specialized expertise across diverse sectors and emerging technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 group border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-brand-blue/10 rounded-xl group-hover:bg-brand-blue/20 transition-all duration-300">
                      <industry.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-blue">{industry.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-brand-blue/5 to-brand-green/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by innovators and IP professionals worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-brand-blue">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic text-sm leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">Why Choose EnviroAndIPR</h2>
            <p className="text-lg text-muted-foreground">Four key reasons innovators trust us with their IP</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-brand-green/10 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-brand-green" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-3 text-brand-blue">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-blue">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Get answers to common IP and patent questions</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border-0 shadow-elegant">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-brand-blue" />
                      <span className="font-medium text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-brand-green to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={ctaIllustration} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Secure Your Next Big Idea?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert IP consultation and protect your innovations with proven strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsAppClick} className="bg-white text-brand-green hover:bg-white/90 hover-lift shadow-xl">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start WhatsApp Chat
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-brand-green hover-lift">
              <a href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default IPRServices;