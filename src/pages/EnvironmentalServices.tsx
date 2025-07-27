import { TreePine, FileCheck, Shield, Scale, BarChart3, Globe, Building, BookOpen, CheckCircle, MessageCircle, Mail, ArrowRight, Users, Clock, Target, TrendingUp, Star, Search, FileText, Eye, Factory, FlaskConical, GraduationCap, Zap, Laptop } from 'lucide-react';
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

const EnvironmentalServices = () => {
  const services = [
    {
      title: "Environmental Impact Assessment (EIA) Reports",
      icon: FileCheck,
      description: "Comprehensive environmental impact analysis and reporting services",
      subServices: [
        {
          name: "Detailed Impact Studies",
          description: "Identify and manage the environmental consequences of your projects before they start. We conduct detailed EIA studies that ensure regulatory compliance."
        },
        {
          name: "Regulatory Compliance Assessment", 
          description: "Navigate complex environmental regulations with our expert guidance, ensuring your projects meet all legal requirements and sustainability standards."
        },
        {
          name: "Risk Mitigation Planning",
          description: "Develop comprehensive risk mitigation strategies to minimize environmental impact and protect your business from regulatory issues."
        },
        {
          name: "Stakeholder Consultation",
          description: "Facilitate meaningful stakeholder engagement and consultation processes to build community support and address concerns."
        }
      ]
    },
    {
      title: "Environmental Clearance & Compliance",
      icon: Shield,
      description: "Expert guidance through environmental clearance processes",
      subServices: [
        {
          name: "Environmental Clearance Reports",
          description: "Navigate complex environmental clearance processes with ease. Our team assists you at every stage—from impact assessment to final appraisal."
        }
      ]
    },
    {
      title: "Sustainability & ESG Reporting",
      icon: BarChart3,
      description: "Comprehensive sustainability and ESG consulting services",
      subServices: [
        {
          name: "ESG Strategy Development",
          description: "Demonstrate your commitment to the planet, people, and progress. We help you measure, report, and communicate your ESG metrics effectively."
        },
        {
          name: "Sustainability Assessments",
          description: "Comprehensive sustainability assessments to evaluate your environmental performance and identify improvement opportunities."
        },
        {
          name: "CSR Reporting Services",
          description: "Showcase your positive impact with professional CSR reporting that highlights your environmental, social, and economic contributions."
        },
        {
          name: "Environmental Quality Mapping",
          description: "Advanced GIS and analytics to map environmental quality factors—air, water, land use, pollution—for strategic planning and decision-making."
        }
      ]
    }
  ];

  const benefits = [
    "Decades of experience in environmental consulting and research",
    "Integrated, end-to-end solutions from compliance to knowledge transfer", 
    "Trusted by corporates, government agencies, and academic institutions",
    "Commitment to sustainability, transparency, and measurable results"
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: FileText },
    { number: "250+", label: "Satisfied Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We begin with a comprehensive assessment of your environmental needs and project requirements.",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "Strategic Planning",
      description: "Our experts develop a customized environmental strategy tailored to your specific objectives.",
      icon: Target
    },
    {
      step: 3,
      title: "Research & Analysis",
      description: "We conduct thorough environmental assessments using advanced tools and methodologies.",
      icon: Search
    },
    {
      step: 4,
      title: "Implementation & Compliance",
      description: "We implement solutions and ensure full compliance with all environmental regulations.",
      icon: Shield
    },
    {
      step: 5,
      title: "Monitoring & Support",
      description: "Ongoing monitoring and support to ensure continued compliance and environmental performance.",
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "GreenTech Solutions",
      role: "Environmental Director",
      content: "EnviroAndIPR's environmental compliance services helped us achieve our sustainability goals while maintaining operational efficiency. Their expertise in EIA and regulatory guidance is exceptional.",
      rating: 5,
      image: testimonialSarah
    },
    {
      name: "Michael Rodriguez",
      company: "EcoManufacturing Inc.",
      role: "CEO",
      content: "The EIA reports and clearance support from EnviroAndIPR were instrumental in getting our project approved on time. Their thorough approach and attention to detail is outstanding.",
      rating: 5,
      image: testimonialMichael
    },
    {
      name: "Prof. Amanda Foster",
      company: "Sustainability Institute",
      role: "Research Director",
      content: "Outstanding ESG reporting and environmental consulting services. They helped us communicate our environmental impact effectively and improved our sustainability performance significantly.",
      rating: 5,
      image: testimonialAmanda
    }
  ];

  const industries = [
    { name: "Environmental Technology", icon: TreePine, description: "Clean energy, waste management, pollution control" },
    { name: "Manufacturing", icon: Factory, description: "Industrial processes, environmental compliance, sustainability" },
    { name: "Biotechnology", icon: FlaskConical, description: "Bio-tech environmental applications, regulatory compliance" },
    { name: "Energy & Power", icon: Zap, description: "Renewable energy, sustainable power solutions" },
    { name: "Research & Academia", icon: GraduationCap, description: "Universities, research institutions, environmental studies" },
    { name: "Information Technology", icon: Laptop, description: "IT infrastructure, sustainable technology practices" }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "919195180016";
    const message = "Hi, I'm interested in your Environmental Consultancy services. I'd like to schedule a consultation to discuss my environmental compliance and sustainability needs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <Helmet>
        <title>Environmental Consultancy Services - EIA, Compliance & Sustainability | EnviroAndIPR</title>
        <meta name="description" content="Expert environmental consultancy services including EIA reports, environmental clearance, compliance, sustainability reporting, and ESG consulting. Professional environmental solutions for businesses." />
        <meta name="keywords" content="environmental consultancy, EIA reports, environmental compliance, sustainability reporting, ESG consulting, environmental clearance, environmental impact assessment" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-green/10 via-background to-brand-blue/5 py-16 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-8 text-sm font-semibold border-brand-green/30 text-brand-green">
              <TreePine className="w-4 h-4 mr-2" />
              Environmental Consultancy Services
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-brand-green via-primary to-brand-blue bg-clip-text text-transparent leading-tight">
              Drive Sustainable Progress. Ensure Environmental Compliance.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              At EnviroAndIPR, we empower organizations, businesses, and institutions to meet their sustainability goals 
              while staying fully compliant with environmental regulations. Our experienced team provides comprehensive 
              environmental consultancy services that support responsible growth, protect ecosystems, and build public trust.
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-green">Our Environmental Service Offerings</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive environmental solutions to ensure compliance and drive sustainability
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-brand-green/10 rounded-xl group-hover:bg-brand-green/20 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-brand-green" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-brand-green">{service.title}</CardTitle>
                      <CardDescription className="text-lg font-medium">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.subServices.map((subService, subIndex) => (
                      <div key={subIndex} className="p-6 border border-brand-green/20 rounded-xl hover:bg-brand-green/5 transition-all duration-300 hover-lift">
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
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-brand-green/10 to-brand-blue/10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-green">Trusted by Organizations Worldwide</h2>
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
                <div className="text-4xl md:text-5xl font-bold text-brand-green mb-3">{stat.number}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-green">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From initial consultation to ongoing support, we guide you through every step of your environmental journey
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
                        <div className="hidden md:block absolute top-10 left-20 w-24 h-1 bg-brand-green/30 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <step.icon className="w-8 h-8 text-brand-green" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg text-brand-green">{step.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-green">Industries We Serve</h2>
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
                    <h3 className="font-bold text-xl text-brand-green">{industry.name}</h3>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-green">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by environmental leaders and sustainability champions</p>
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
                      <div className="font-bold text-lg text-brand-green">{testimonial.name}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-green">Why Choose EnviroAndIPR?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leading environmental consultancy with proven expertise and commitment to sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 border-0 shadow-elegant hover:shadow-hover">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-brand-green/10 rounded-2xl">
                      <CheckCircle className="w-10 h-10 text-brand-green" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-green">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about our environmental consultancy services</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="general" className="text-lg">General</TabsTrigger>
                <TabsTrigger value="compliance" className="text-lg">Compliance</TabsTrigger>
                <TabsTrigger value="reporting" className="text-lg">Reporting</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-6">
                <Card className="border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-brand-green">What types of environmental projects do you handle?</h3>
                    <p className="text-muted-foreground leading-relaxed">We handle a wide range of environmental projects including EIA reports, environmental clearances, compliance audits, sustainability reporting, and regulatory consulting across various industries including manufacturing, energy, biotechnology, and more.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-brand-green">How long does the environmental clearance process take?</h3>
                    <p className="text-muted-foreground leading-relaxed">The timeline varies depending on project complexity and regulatory requirements. Typically, environmental clearances can take 3-6 months, but we work to expedite the process wherever possible through our expertise and established relationships with regulatory bodies.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="compliance" className="space-y-6">
                <Card className="border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-brand-green">Do you provide ongoing environmental compliance support?</h3>
                    <p className="text-muted-foreground leading-relaxed">Yes, we offer comprehensive ongoing support including compliance monitoring, regulatory updates, periodic audits, and consultation services to ensure continuous environmental compliance and help you stay ahead of changing regulations.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-brand-green">What industries do you serve for environmental compliance?</h3>
                    <p className="text-muted-foreground leading-relaxed">We serve diverse industries including manufacturing, energy, biotechnology, IT, research institutions, and many others. Our expertise spans across sectors requiring environmental compliance and sustainability solutions.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reporting" className="space-y-6">
                <Card className="border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-brand-green">Can you help with ESG and sustainability reporting?</h3>
                    <p className="text-muted-foreground leading-relaxed">Absolutely. We specialize in ESG reporting, sustainability assessments, and CSR documentation to help organizations communicate their environmental and social impact effectively to stakeholders and improve their sustainability ratings.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-brand-green">What reporting standards do you follow?</h3>
                    <p className="text-muted-foreground leading-relaxed">We follow internationally recognized standards including GRI, SASB, TCFD, and other relevant frameworks to ensure your sustainability reports meet global best practices and stakeholder expectations.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-brand-green via-brand-green/90 to-brand-blue">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Ready to Drive Your Next Sustainability Initiative?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              From environmental compliance to sustainability reporting, we're here to guide your organization 
              toward a more sustainable and compliant future. Let's discuss how we can help you achieve your environmental goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-white text-brand-green hover:bg-white/90 text-lg px-8 py-4 hover-lift shadow-elegant">
                <MessageCircle className="w-6 h-6 mr-3" />
                Start Your Consultation
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-brand-green text-lg px-8 py-4 hover-lift">
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

export default EnvironmentalServices;