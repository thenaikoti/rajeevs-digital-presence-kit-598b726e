import { Shield, Search, FileText, BarChart3, CheckCircle, MessageCircle, Mail, ArrowRight, Users, Clock, Globe, Award, Lightbulb, Target, TrendingUp, BookOpen, Star, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import testimonialSarah from '@/assets/testimonial-sarah.jpg';
import testimonialMichael from '@/assets/testimonial-michael.jpg';
import testimonialAmanda from '@/assets/testimonial-amanda.jpg';

const IPRServices = () => {
  const services = [
    {
      title: "Patent Search & Analytics",
      icon: Search,
      description: "Comprehensive patent research and analysis services",
      subServices: [
        {
          name: "Patentability (Novelty / Prior Art) Search",
          description: "Assess the uniqueness of your invention before filing. We conduct comprehensive global searches to ensure your idea is eligible for patent protection."
        },
        {
          name: "Patent Validity / Invalidity Search", 
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
      title: "Patent Drafting & Preparation",
      icon: FileText,
      description: "Professional patent application services",
      subServices: [
        {
          name: "Patent Drafting & Preparation",
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
          name: "Patent Landscape Study",
          description: "Understand the IP strategies and portfolios of key players in your sector—identify gaps, threats, and growth opportunities."
        },
        {
          name: "Competitor Analysis",
          description: "Analyze competitor patent portfolios and strategies to identify market opportunities and potential threats."
        },
        {
          name: "Patent Portfolio Analysis",
          description: "Evaluate your existing patents to guide licensing, litigation, or new investment decisions."
        },
        {
          name: "Technology Assessment",
          description: "Uncover innovation opportunities and market gaps—fueling smarter product development and business growth."
        },
        {
          name: "White-space Analysis",
          description: "Identify areas of low patent density where new innovation opportunities exist."
        }
      ]
    },
    {
      title: "IP Education & Training",
      icon: GraduationCap,
      description: "Comprehensive intellectual property education services",
      subServices: [
        {
          name: "Patent Agent Exam Preparation",
          description: "Specialized coaching and preparation for patent agent examinations with expert guidance and proven methodologies."
        },
        {
          name: "IP Workshops & Training",
          description: "Corporate workshops and training sessions on intellectual property management, patent filing, and IP strategy."
        },
        {
          name: "IP Courses",
          description: "Comprehensive courses on intellectual property law, patent drafting, and IP commercialization for professionals and students."
        }
      ]
    }
  ];

  const benefits = [
    "Decades of experience in patent research, strategy, and protection",
    "Business-oriented IP advisory that drives real commercial value",
    "Confidential, trusted service for inventors, startups, corporates, and institutions",
    "Actionable insights that transform IP into competitive advantage"
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
      rating: 5,
      image: testimonialSarah
    },
    {
      name: "Michael Chen",
      company: "GreenTech Solutions",
      role: "Founder",
      content: "The team's deep understanding of both environmental technology and IP law made them the perfect partner for our patent strategy. Highly recommended for any serious innovator.",
      rating: 5,
      image: testimonialMichael
    },
    {
      name: "Prof. Amanda Rodriguez",
      company: "Research Institute",
      role: "Director",
      content: "Outstanding service in patent landscape analysis. They helped us identify white spaces in our research area and guided our R&D investments effectively.",
      rating: 5,
      image: testimonialAmanda
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

  const faqs = [
    {
      category: "Patent Filing",
      questions: [
        {
          question: "How long does the patent filing process take?",
          answer: "The patent filing process typically takes 2-4 weeks for initial application preparation, followed by 18-36 months for examination by the patent office, depending on the jurisdiction and complexity of the invention."
        },
        {
          question: "What is the cost of filing a patent?",
          answer: "Patent filing costs vary based on the type of application, number of claims, and jurisdictions. We provide detailed cost estimates after initial consultation and can work within various budget ranges."
        },
        {
          question: "Can I file patents internationally?",
          answer: "Yes, we assist with international patent filing through PCT (Patent Cooperation Treaty) applications and direct national phase entries in multiple countries worldwide."
        }
      ]
    },
    {
      category: "IP Strategy",
      questions: [
        {
          question: "How do you develop an IP strategy for startups?",
          answer: "We analyze your technology, market position, and business goals to create a tailored IP strategy that maximizes protection while optimizing costs and timeline for startup growth."
        },
        {
          question: "What is a freedom to operate analysis?",
          answer: "FTO analysis identifies existing patents that might block your product or service from entering the market, helping you navigate around potential infringement issues before launch."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "Do you provide patent agent exam coaching?",
          answer: "Yes, we offer comprehensive patent agent exam preparation including study materials, mock tests, and personalized coaching to help you pass the examination successfully."
        },
        {
          question: "Can you help with patent portfolio management?",
          answer: "Absolutely. We provide ongoing patent portfolio analysis, maintenance strategy, licensing guidance, and regular reviews to ensure your IP assets remain valuable and protected."
        }
      ]
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
      <section className="relative bg-gradient-to-br from-brand-blue/10 via-background to-brand-green/5 py-16 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-8 text-sm font-semibold border-brand-blue/30 text-brand-blue">
              <Shield className="w-4 h-4 mr-2" />
              IPR Consultancy Services
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-brand-blue via-primary to-brand-green bg-clip-text text-transparent leading-tight">
              Safeguard Your Ideas. Accelerate Your Growth.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              At EnviroAndIPR, we help inventors, startups, enterprises, and research institutions protect, 
              manage, and maximize the value of their intellectual property. From strategic searches to airtight 
              drafting and training, we keep your innovation secure and your business ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground text-lg px-8 py-4 hover-lift shadow-elegant">
                <MessageCircle className="w-6 h-6 mr-3" />
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" asChild className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground text-lg px-8 py-4 hover-lift">
                <a href="/contact">
                  <Mail className="w-6 h-6 mr-3" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-blue">Our IPR Service Offerings</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive intellectual property services to protect and maximize your innovations
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-brand-blue/10 rounded-xl group-hover:bg-brand-blue/20 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-brand-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-brand-blue">{service.title}</CardTitle>
                      <CardDescription className="text-lg font-medium">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.subServices.map((subService, subIndex) => (
                      <div key={subIndex} className="p-6 border border-brand-blue/20 rounded-xl hover:bg-brand-blue/5 transition-all duration-300 hover-lift">
                        <h4 className="font-bold mb-3 text-lg text-foreground">{subService.name}</h4>
                        <p className="text-muted-foreground leading-relaxed">{subService.description}</p>
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
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-brand-blue/10 to-brand-green/10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Trusted by Innovators Worldwide</h2>
            <p className="text-xl text-muted-foreground">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-background rounded-2xl shadow-elegant hover-lift transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-brand-green/10 rounded-2xl">
                    <stat.icon className="w-10 h-10 text-brand-green" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand-blue mb-3">{stat.number}</div>
                <div className="text-muted-foreground font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From initial consultation to ongoing support, we guide you through every step of your IP journey
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center text-brand-green-foreground font-bold text-2xl shadow-lg hover-lift transition-all duration-300">
                        {step.step}
                      </div>
                      {index < process.length - 1 && (
                        <div className="hidden md:block absolute top-10 left-20 w-24 h-1 bg-brand-blue/30 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <step.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg text-brand-blue">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized expertise across diverse sectors and emerging technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 group border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-brand-green/10 rounded-xl group-hover:bg-brand-green/20 transition-all duration-300">
                      <industry.icon className="w-8 h-8 text-brand-green" />
                    </div>
                    <h3 className="font-bold text-xl text-brand-blue">{industry.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by innovators, researchers, and industry leaders</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-brand-green/20"
                    />
                    <div>
                      <div className="font-bold text-lg text-brand-blue">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                      <div className="text-sm text-brand-green font-semibold">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-brand-green/10 to-brand-blue/10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Why Choose EnviroAndIPR?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for comprehensive intellectual property solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 group border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-brand-blue/10 rounded-2xl group-hover:bg-brand-blue/20 transition-all duration-300">
                      <CheckCircle className="w-10 h-10 text-brand-blue" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-medium">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about our IPR services</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="Patent Filing" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                {faqs.map((category) => (
                  <TabsTrigger key={category.category} value={category.category} className="text-lg">
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {faqs.map((category) => (
                <TabsContent key={category.category} value={category.category} className="space-y-6">
                  {category.questions.map((faq, index) => (
                    <Card key={index} className="hover-lift transition-all duration-300 border-0 shadow-elegant">
                      <CardContent className="p-8">
                        <h3 className="font-bold text-xl mb-4 text-brand-blue">{faq.question}</h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-brand-blue to-brand-green">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-blue-foreground">
              Ready to Secure Your Next Big Idea?
            </h2>
            <p className="text-xl md:text-2xl text-brand-blue-foreground/90 mb-12 leading-relaxed">
              Let our IP experts help you protect your innovations and accelerate your business growth. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-background text-brand-blue hover:bg-background/90 text-lg px-8 py-4 hover-lift shadow-elegant">
                <MessageCircle className="w-6 h-6 mr-3" />
                Start Free Consultation
              </Button>
              <Button size="lg" variant="outline" asChild className="border-brand-blue-foreground text-brand-blue-foreground hover:bg-brand-blue-foreground hover:text-brand-blue text-lg px-8 py-4 hover-lift">
                <a href="/contact">
                  <Mail className="w-6 h-6 mr-3" />
                  Contact Our Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default IPRServices;