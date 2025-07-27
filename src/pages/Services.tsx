import { Helmet } from 'react-helmet-async';
import { 
  FileCheck, Shield, Scale, BarChart3, Globe, Building, Users, BookOpen, 
  TreePine, Factory, Laptop, FlaskConical, GraduationCap, Zap,
  CheckCircle, Star, ArrowRight, Phone, Mail, MessageCircle,
  Target, Search, FileText, Eye, Headphones, Lightbulb, Award, TrendingUp
} from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import WhatsAppButton from '../components/WhatsAppButton';

// Testimonial images imports
import testimonialSarah from '../assets/testimonial-sarah.jpg';
import testimonialMichael from '../assets/testimonial-michael.jpg';
import testimonialAmanda from '../assets/testimonial-amanda.jpg';

const Services = () => {
  const environmentalServices = [
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Environmental Impact Assessment (EIA) Reports",
      description: "Identify and manage the environmental consequences of your projects before they start. We conduct detailed EIA studies and deliver actionable reports that ensure your projects align with regulatory requirements and best sustainability practices.",
      features: ["Comprehensive impact studies", "Regulatory compliance", "Risk mitigation", "Stakeholder consultation"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Environmental Clearance Reports",
      description: "Navigate complex environmental clearance processes with ease. Our team assists you at every stage—from impact assessment to final appraisal—helping your projects obtain timely approvals and minimize environmental risks.",
      features: ["Fast-track approvals", "Authority liaison", "Documentation support", "Timeline management"]
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Environmental Compliance Services",
      description: "Stay ahead of regulations and reduce risk. We provide expert guidance on air and water quality, waste management, audits, permits, and more—ensuring your operations always meet legal and sustainability standards.",
      features: ["Legal compliance", "Quality monitoring", "Permit management", "Audit support"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Environmental & Social Due Diligence (ESDD)",
      description: "Make informed decisions with confidence. Our ESDD services evaluate both environmental and social risks and opportunities for your investments or projects, supporting responsible business practices and long-term compliance.",
      features: ["Risk assessment", "Investment protection", "Social impact analysis", "Due diligence reports"]
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Environmental Quality Mapping (EQM)",
      description: "See the bigger picture. We use advanced GIS and analytics to map environmental quality factors—air, water, land use, pollution—giving you valuable insights for planning, resource management, and policy making.",
      features: ["GIS mapping", "Data analytics", "Real-time monitoring", "Spatial analysis"]
    },
    {
      icon: <TreePine className="w-8 h-8 text-primary" />,
      title: "Sustainability (ESG) Reporting",
      description: "Demonstrate your commitment to the planet, people, and progress. We help you measure, report, and communicate your environmental, social, and governance (ESG) metrics, building trust with stakeholders.",
      features: ["ESG metrics", "Stakeholder reporting", "Performance tracking", "Transparency building"]
    }
  ];

  const iprServices = [
    {
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      title: "Patent Search & Analytics",
      description: "Comprehensive patent research and analysis services including patentability searches, validity analysis, infringement searches, and freedom to operate assessments.",
      features: ["Novelty search", "Validity analysis", "Infringement search", "FTO analysis"]
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-blue" />,
      title: "Patent Drafting & Filing",
      description: "Professional patent application services from technical specifications to legal claims and drawings, ensuring robust applications that withstand scrutiny.",
      features: ["Complete applications", "Technical drafting", "Legal claims", "Professional drawings"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand-blue" />,
      title: "Strategic IP Intelligence",
      description: "Business intelligence for intellectual property including landscape analysis, competitor analysis, and technology assessments to guide strategic decisions.",
      features: ["Landscape analysis", "Competitor intelligence", "Portfolio analysis", "White-space assessment"]
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-blue" />,
      title: "IP Portfolio Management",
      description: "Comprehensive management of your intellectual property portfolio to maximize value and ensure optimal protection across jurisdictions.",
      features: ["Portfolio strategy", "Global filing", "Renewal management", "Licensing support"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "250+", label: "Satisfied Clients", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  const processSteps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Initial Consultation",
      description: "We begin with a comprehensive assessment of your environmental needs and project requirements."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Our experts develop a customized environmental strategy tailored to your specific objectives."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research & Analysis",
      description: "We conduct thorough environmental assessments using advanced tools and methodologies."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Implementation & Compliance",
      description: "We implement solutions and ensure full compliance with all environmental regulations."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Monitoring & Support",
      description: "Ongoing monitoring and support to ensure continued compliance and environmental performance."
    }
  ];

  const industries = [
    { 
      name: "Environmental Technology", 
      icon: <TreePine className="w-6 h-6" />, 
      description: "Green tech solutions and environmental innovation"
    },
    { 
      name: "Manufacturing", 
      icon: <Factory className="w-6 h-6" />, 
      description: "Industrial processes and compliance solutions"
    },
    { 
      name: "Biotechnology", 
      icon: <FlaskConical className="w-6 h-6" />, 
      description: "Bio-tech environmental applications and research"
    },
    { 
      name: "Research & Academia", 
      icon: <GraduationCap className="w-6 h-6" />, 
      description: "Academic research and educational institutions"
    },
    { 
      name: "Energy & Power", 
      icon: <Zap className="w-6 h-6" />, 
      description: "Renewable energy and sustainable power solutions"
    },
    { 
      name: "Information Technology", 
      icon: <Laptop className="w-6 h-6" />, 
      description: "IT infrastructure and sustainable technology practices"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Environmental Director, GreenTech Solutions",
      content: "EnviroAndIPR's environmental compliance services helped us achieve our sustainability goals while maintaining operational efficiency. Their expertise is unmatched.",
      rating: 5,
      image: testimonialSarah
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, EcoManufacturing Inc.",
      content: "The EIA reports and clearance support from EnviroAndIPR were instrumental in getting our project approved on time. Highly professional team.",
      rating: 5,
      image: testimonialMichael
    },
    {
      name: "Amanda Foster",
      role: "Sustainability Manager, CleanEnergy Corp",
      content: "Outstanding ESG reporting services. They helped us communicate our environmental impact effectively to stakeholders and improved our sustainability ratings.",
      rating: 5,
      image: testimonialAmanda
    }
  ];

  const faqItems = [
    {
      question: "What types of environmental projects do you handle?",
      answer: "We handle a wide range of environmental projects including EIA reports, environmental clearances, compliance audits, sustainability reporting, and regulatory consulting across various industries."
    },
    {
      question: "How long does the environmental clearance process take?",
      answer: "The timeline varies depending on project complexity and regulatory requirements. Typically, environmental clearances can take 3-6 months, but we work to expedite the process wherever possible."
    },
    {
      question: "Do you provide ongoing environmental compliance support?",
      answer: "Yes, we offer comprehensive ongoing support including compliance monitoring, regulatory updates, periodic audits, and consultation services to ensure continuous environmental compliance."
    },
    {
      question: "Can you help with ESG and sustainability reporting?",
      answer: "Absolutely. We specialize in ESG reporting, sustainability assessments, and CSR documentation to help organizations communicate their environmental and social impact effectively."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including manufacturing, energy, biotechnology, IT, research institutions, and many others. Our expertise spans across sectors requiring environmental compliance and sustainability solutions."
    }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "918919518016";
    const message = "Hello EnviroAndIPR! I'm interested in your environmental consultancy services. Can we discuss my requirements?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <Helmet>
        <title>Environmental & IPR Services | EnviroAndIPR</title>
        <meta name="description" content="Comprehensive environmental consultancy and intellectual property services. Expert EIA, compliance, patent filing, IP strategy, and sustainability solutions." />
        <meta name="keywords" content="environmental consultancy, IPR services, patent filing, EIA reports, environmental compliance, intellectual property, sustainability reporting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue/10 via-background to-brand-green/5 py-16 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-8 text-sm font-semibold border-brand-blue/30 text-brand-blue">
              <TreePine className="w-4 h-4 mr-2" />
              Environmental & IPR Services
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-brand-blue via-primary to-brand-green bg-clip-text text-transparent leading-tight">
              Drive Innovation. Protect the Planet.
              <span className="block mt-2">Secure Your Future.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              At EnviroAndIPR, we provide comprehensive solutions for both environmental compliance and intellectual property protection. Our integrated approach helps organizations innovate responsibly while safeguarding their innovations and meeting sustainability goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-elegant"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Services */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-green">Environmental Consultancy Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive environmental solutions from compliance to sustainability reporting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {environmentalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 hover-scale">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-brand-green/10 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-green leading-tight">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:scale-105 transition-all duration-300 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-green-foreground"
                    onClick={handleWhatsAppContact}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IPR Services */}
      <section className="py-16 md:py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-blue">Intellectual Property Rights Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Expert patent services and IP strategy to protect and maximize your innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {iprServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 hover-scale">
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="p-4 bg-brand-blue/10 rounded-xl group-hover:bg-brand-blue/20 transition-colors mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-brand-blue leading-tight">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground leading-relaxed mb-6 text-base text-center">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:scale-105 transition-all duration-300 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground"
                    onClick={handleWhatsAppContact}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Trusted by Organizations Worldwide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the way in environmental consulting with proven results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary/20 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand-blue mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to environmental consulting excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized environmental solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 hover-scale text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {industry.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from organizations we've helped achieve their environmental goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-brand-blue">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4 bg-accent/10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-brand-blue">Why Choose EnviroAndIPR?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground"><strong className="text-brand-blue">Decades of experience</strong> in environmental consulting and research</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground"><strong className="text-brand-blue">Integrated, end-to-end solutions</strong> from compliance to knowledge transfer</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground"><strong className="text-brand-blue">Trusted by corporates, government agencies,</strong> and academic institutions</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground"><strong className="text-brand-blue">Commitment to sustainability, transparency,</strong> and measurable results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our environmental consultancy services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-brand-blue hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-footer-dark">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Start Your Environmental Project?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              Join hundreds of organizations worldwide who trust EnviroAndIPR for their environmental consulting needs. 
              Let's discuss how we can help you achieve compliance and sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-footer-dark hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Services;