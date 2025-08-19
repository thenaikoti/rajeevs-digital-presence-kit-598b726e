import { TreePine, FileCheck, Shield, Scale, BarChart3, Globe, Building, BookOpen, CheckCircle, MessageCircle, Mail, ArrowRight, Users, Clock, Target, TrendingUp, Star, Search, FileText, Eye, Factory, FlaskConical, GraduationCap, Zap, Laptop, Leaf, Droplets, Recycle, Wind, Award, HelpCircle, Mountain } from 'lucide-react';
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
import environmentalHeroIllustration from '@/assets/environmental-hero-illustration.jpg';
import processIllustration from '@/assets/process-illustration.jpg';
import ctaIllustration from '@/assets/cta-illustration.jpg';
const EnvironmentalServices = () => {
  const services = [{
    title: "EIA Reports",
    icon: FileCheck,
    description: "Comprehensive environmental impact analysis for project compliance."
  }, {
    title: "Environmental Clearance",
    icon: Shield,
    description: "Expert guidance through clearance processes and approvals."
  }, {
    title: "Compliance Services",
    icon: Scale,
    description: "Ensure full regulatory compliance and legal requirements."
  }, {
    title: "ESDD",
    icon: Search,
    description: "Environmental & Social Due Diligence for investments."
  }, {
    title: "EQM",
    icon: Globe,
    description: "Environmental Quality Mapping using advanced GIS analytics."
  }, {
    title: "ESG Reporting",
    icon: BarChart3,
    description: "Comprehensive sustainability and ESG performance reporting."
  }, {
    title: "CSR Reporting",
    icon: TreePine,
    description: "Corporate Social Responsibility impact documentation."
  }, {
    title: "Legal Compliance",
    icon: BookOpen,
    description: "Navigate environmental regulations and legal frameworks."
  }, {
    title: "Knowledge Management",
    icon: Target,
    description: "Environmental data organization and strategic insights."
  }, {
    title: "Teaching & Research",
    icon: GraduationCap,
    description: "Environmental education, training, and research support."
  }];
  const benefits = [{
    icon: Award,
    title: "Expert Consulting",
    description: "Decades of experience in environmental science and regulations"
  }, {
    icon: CheckCircle,
    title: "End-to-End Solutions",
    description: "Complete environmental services from assessment to compliance"
  }, {
    icon: Shield,
    title: "Trusted Partner",
    description: "Relied upon by corporates, government, and academia"
  }, {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Sustainability outcomes with transparency and accountability"
  }];
  const stats = [{
    number: "500+",
    label: "Projects Completed",
    icon: FileText
  }, {
    number: "250+",
    label: "Satisfied Clients",
    icon: Users
  }, {
    number: "98%",
    label: "Success Rate",
    icon: Target
  }, {
    number: "24/7",
    label: "Support Available",
    icon: Clock
  }];
  const process = [{
    step: 1,
    title: "Initial Consultation",
    description: "Assess environmental needs and project requirements",
    icon: MessageCircle
  }, {
    step: 2,
    title: "Strategic Planning",
    description: "Develop customized environmental strategy",
    icon: Target
  }, {
    step: 3,
    title: "Research & Analysis",
    description: "Thorough assessments using advanced methodologies",
    icon: Search
  }, {
    step: 4,
    title: "Implementation",
    description: "Execute solutions and ensure regulatory compliance",
    icon: Shield
  }, {
    step: 5,
    title: "Monitoring & Support",
    description: "Ongoing monitoring for continued compliance",
    icon: TrendingUp
  }];
  const testimonials = [{
    name: "Dr. Sarah Chen",
    company: "GreenTech Solutions",
    role: "Environmental Director",
    content: "EnviroAndIPR's compliance services helped us achieve sustainability goals while maintaining efficiency. Exceptional expertise.",
    rating: 5,
    image: testimonialSarah
  }, {
    name: "Michael Rodriguez",
    company: "EcoManufacturing Inc.",
    role: "CEO",
    content: "The EIA reports and clearance support were instrumental in getting our project approved on time. Outstanding service.",
    rating: 5,
    image: testimonialMichael
  }, {
    name: "Prof. Amanda Foster",
    company: "Sustainability Institute",
    role: "Research Director",
    content: "Outstanding ESG reporting services. They improved our sustainability performance and communication significantly.",
    rating: 5,
    image: testimonialAmanda
  }];
  const industries = [{
    name: "Environmental Technology",
    icon: TreePine,
    description: "Clean energy, waste management, pollution control"
  }, {
    name: "Energy & Power",
    icon: Zap,
    description: "Renewable energy, sustainable power solutions"
  }, {
    name: "Biotechnology",
    icon: FlaskConical,
    description: "Bio-tech environmental applications, compliance"
  }, {
    name: "Manufacturing",
    icon: Factory,
    description: "Industrial processes, environmental compliance"
  }, {
    name: "Information Technology",
    icon: Laptop,
    description: "IT infrastructure, sustainable technology practices"
  }, {
    name: "Research & Academia",
    icon: GraduationCap,
    description: "Universities, research institutions, studies"
  }];
  const faqs = [{
    question: "How long does EIA reporting take?",
    answer: "EIA preparation typically takes 4-8 weeks depending on project complexity, followed by regulatory review periods that vary by jurisdiction and project scale."
  }, {
    question: "What is Environmental Clearance process?",
    answer: "EC involves detailed environmental impact assessment, public consultation, and regulatory approval. We guide you through each stage from application to approval."
  }, {
    question: "Do you help with ESG reporting standards?",
    answer: "Yes, we assist with various ESG frameworks including GRI, SASB, TCFD, and custom reporting aligned with stakeholder requirements and industry standards."
  }, {
    question: "What compliance services do you offer?",
    answer: "We provide comprehensive compliance support including regulatory assessments, permit applications, monitoring programs, and ongoing compliance management."
  }, {
    question: "Can you support CSR initiatives?",
    answer: "Absolutely. We help develop, implement, and report on CSR programs that align with business objectives and community needs while meeting regulatory requirements."
  }, {
    question: "Do you provide environmental training?",
    answer: "Yes, we offer specialized training programs, workshops, and courses for environmental professionals, covering topics from pollution control to ESG implementation."
  }];
  const handleWhatsAppClick = () => {
    const phoneNumber = "919195180016";
    const message = "Hi, I'm interested in your Environmental Consultancy services. I'd like to schedule a consultation to discuss my environmental compliance and sustainability needs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <Layout>
      <Helmet>
        <title>Environmental Consultancy Services - EIA, Compliance & Sustainability | EnviroAndIPR</title>
        <meta name="description" content="Expert environmental consultancy services including EIA reports, environmental clearance, compliance, sustainability reporting, and ESG consulting. Professional environmental solutions for businesses." />
        <meta name="keywords" content="environmental consultancy, EIA reports, environmental compliance, sustainability reporting, ESG consulting, environmental clearance, environmental impact assessment" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-green/5 via-background to-brand-blue/5 py-16 md:py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="text-sm font-semibold border-brand-green/30 text-brand-green">
                <TreePine className="w-4 h-4 mr-2" />
                Environmental Consultancy Services
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-green leading-tight">
                Drive Sustainable Progress. 
                <span className="bg-gradient-to-r from-brand-blue to-primary bg-clip-text text-transparent">
                  Ensure Environmental Compliance.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Partner with EnviroAndIPR for assessments, clearances, compliance, ESG/CSR reporting, and sustainability consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleWhatsAppClick} className="bg-brand-green hover:bg-brand-green/90 text-brand-green-foreground hover-lift shadow-elegant">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" asChild className="border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-green-foreground hover-lift">
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={environmentalHeroIllustration} alt="Environmental sustainability illustration" className="w-full h-auto rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-green">Our Environmental Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive environmental solutions to ensure compliance and drive sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => <Card key={index} className="group hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-brand-green/10 rounded-xl group-hover:bg-brand-green/20 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-brand-green" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-green">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-muted/30 to-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-green">Trusted by Organizations Worldwide</h2>
            <p className="text-lg text-muted-foreground">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center p-6 bg-background rounded-xl shadow-elegant hover-lift transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-brand-green/10 rounded-xl">
                    <stat.icon className="w-8 h-8 text-brand-green" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-green mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>)}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-green">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultation to ongoing support, we guide you through every step
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-brand-green-foreground font-bold text-xl shadow-lg hover-lift transition-all duration-300">
                      {step.step}
                    </div>
                    {index < process.length - 1 && <div className="hidden md:block absolute top-8 left-16 w-16 h-0.5 bg-brand-green/30"></div>}
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <step.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="font-bold mb-3 text-brand-green">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-green">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Specialized expertise across diverse sectors and emerging technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => <Card key={index} className="hover-lift transition-all duration-300 group border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-brand-green/10 rounded-xl group-hover:bg-brand-green/20 transition-all duration-300">
                      <industry.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="font-bold text-lg text-brand-green">{industry.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-brand-green/5 to-brand-blue/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-green">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by environmental leaders and sustainability champions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-brand-green">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-muted-foreground italic text-sm leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-green">Why Choose EnviroAndIPR</h2>
            <p className="text-lg text-muted-foreground">Four key reasons organizations trust us with their environmental needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="text-center hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-brand-green/10 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-brand-green" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-3 text-brand-green">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-green">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Get answers to common environmental consulting questions</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border-0 shadow-elegant">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-brand-green" />
                      <span className="font-medium text-left">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>)}
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
            Ready to Drive Your Next Sustainability Initiative?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert environmental consultation and ensure compliance with proven strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 ">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start WhatsApp Chat
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-brand-green hover-lift">
              <a href="/contact" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 ">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>;
};
export default EnvironmentalServices;