import { TreePine, FileCheck, Shield, Scale, BarChart3, Globe, Building, BookOpen, CheckCircle, MessageCircle, Mail, ArrowRight, Users, Clock, Target, TrendingUp, Star, Search, FileText, Eye, Factory, FlaskConical, GraduationCap, Zap, Laptop, Leaf, Droplets, Recycle, Wind, Award, HelpCircle, Mountain, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import HeroSplit from '@/components/sections/HeroSplit';
import IconCardGrid from '@/components/sections/IconCardGrid';
import StatsStrip from '@/components/sections/StatsStrip';
import Timeline5 from '@/components/sections/Timeline5';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import Testimonials3 from '@/components/sections/Testimonials3';
import WhyChoose4 from '@/components/sections/WhyChoose4';
import FAQTabs from '@/components/sections/FAQTabs';
import CTAFullWidth from '@/components/sections/CTAFullWidth';
import heroSustainability from '@/assets/hero-sustainability.jpg';
import testimonialAvatar1 from '@/assets/testimonial-avatar-1.jpg';
import testimonialAvatar2 from '@/assets/testimonial-avatar-2.jpg';
import testimonialAvatar3 from '@/assets/testimonial-avatar-3.jpg';

const EnvironmentalServices = () => {
  const services = [
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "EIA Reports",
      description: "Comprehensive environmental impact analysis for project compliance and regulatory approval.",
      details: "Our Environmental Impact Assessment (EIA) services provide thorough analysis of potential environmental effects of proposed projects. We conduct detailed studies covering air quality, water resources, soil conditions, biodiversity, and socio-economic impacts. Our experienced team ensures compliance with national and international standards, helping clients navigate complex regulatory requirements while minimizing environmental risks and maximizing project viability."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Environmental Clearance", 
      description: "Expert guidance through clearance processes and government approvals.",
      details: "Navigate the complex environmental clearance process with our expert guidance. We assist with Category A and B project clearances, Forest Clearances, Coastal Regulation Zone (CRZ) clearances, and Wildlife clearances. Our team manages the entire process from initial application to final approval, ensuring all documentation meets regulatory standards and expediting approval timelines through strategic stakeholder engagement."
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: "Compliance Services",
      description: "Ensure full regulatory compliance and meet all legal environmental requirements.",
      details: "Comprehensive compliance management covering all aspects of environmental regulations. We provide ongoing monitoring, audit services, permit renewals, and regulatory reporting. Our services include air and water pollution compliance, waste management compliance, noise pollution monitoring, and environmental management system implementation to ensure continuous adherence to evolving environmental regulations."
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Environmental & Social Due Diligence (ESDD)",
      description: "Environmental and social risk assessment for investments and acquisitions.",
      details: "Comprehensive due diligence services that evaluate environmental and social risks associated with business transactions. Our ESDD covers historical contamination assessment, regulatory compliance review, environmental liability evaluation, social impact analysis, and stakeholder engagement assessment. This critical service helps investors and acquirers make informed decisions while identifying potential risks and opportunities."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Environmental Quality Mapping (EQM)",
      description: "Advanced GIS-based environmental quality assessment and spatial analysis.",
      details: "State-of-the-art environmental quality mapping using Geographic Information Systems (GIS) and remote sensing technologies. We provide spatial analysis of air quality, water quality, soil contamination, land use patterns, and biodiversity mapping. Our EQM services support planning decisions, environmental monitoring programs, and regulatory compliance through precise geospatial data analysis and visualization."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "ESG Reporting",
      description: "Comprehensive sustainability and ESG performance reporting and strategy.",
      details: "Professional ESG (Environmental, Social, and Governance) reporting services aligned with global frameworks including GRI, SASB, TCFD, and CDPN. We help organizations measure, manage, and communicate their sustainability performance through comprehensive data collection, analysis, and stakeholder reporting. Our services include materiality assessments, target setting, progress tracking, and investor-grade ESG disclosures."
    },
    {
      icon: <TreePine className="w-12 h-12" />,
      title: "CSR Reporting",
      description: "Corporate Social Responsibility impact documentation and compliance.",
      details: "Comprehensive CSR reporting services ensuring compliance with regulatory requirements while maximizing social impact. We assist with CSR policy development, project identification and implementation, impact assessment, and annual reporting. Our services cover education, healthcare, rural development, environmental sustainability, and skills development programs with detailed impact measurement and stakeholder communication."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Legal & Regulatory Compliance",
      description: "Navigate complex environmental regulations and legal frameworks effectively.",
      details: "Expert guidance through the complex landscape of environmental laws and regulations. Our legal compliance services cover central and state pollution control laws, environmental protection acts, forest conservation regulations, and international environmental agreements. We provide legal advisory, compliance audits, penalty mitigation, and regulatory liaison services to ensure full legal compliance."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Knowledge Management",
      description: "Environmental data organization, analysis, and strategic business insights.",
      details: "Advanced knowledge management systems for environmental data and information. We develop customized databases, information management systems, and decision support tools that integrate environmental data with business intelligence. Our services include data standardization, analytics platforms, reporting dashboards, and knowledge sharing systems that enable data-driven environmental decision making."
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Teaching & Research Support",
      description: "Environmental education, training, research support from UG to PhD levels.",
      bulletPoints: [
        "Curriculum development for environmental science programs at undergraduate and postgraduate levels",
        "Research methodology training and thesis supervision for M.Tech, M.Sc, and PhD students",
        "Publication support including research paper writing, journal selection, and peer review process guidance",
        "Competitive exam preparation for UGC-NET, UPSC Environmental Science, and state-level environmental officer positions",
        "Workshop and seminar organization on latest environmental technologies and research methodologies"
      ],
      details: "Comprehensive educational and research support services spanning undergraduate to doctoral levels. We provide curriculum development, research methodology training, thesis supervision, publication support, and competitive exam preparation including UGC-NET and UPSC environmental science papers. Our academic services bridge the gap between theoretical knowledge and practical environmental applications."
    }
  ];

  const stats = [
    { icon: <FileText className="w-12 h-12" />, number: "500+", label: "Projects Completed" },
    { icon: <Users className="w-12 h-12" />, number: "250+", label: "Satisfied Clients" },
    { icon: <Target className="w-12 h-12" />, number: "98%", label: "Success Rate" },
    { icon: <Clock className="w-12 h-12" />, number: "24/7", label: "Support Available" }
  ];

  const process = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Initial Consultation",
      description: "Assess environmental needs and project requirements"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning", 
      description: "Develop customized environmental strategy and roadmap"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research & Analysis",
      description: "Thorough assessments using advanced methodologies"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Implementation & Compliance",
      description: "Execute solutions and ensure regulatory compliance"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Monitoring & Support",
      description: "Ongoing monitoring for continued compliance and improvement"
    }
  ];

  const industries = [
    {
      title: "Environmental Technology",
      icon: <TreePine className="w-8 h-8" />,
      description: "Clean energy, waste management, pollution control solutions"
    },
    {
      title: "Energy & Power",
      icon: <Zap className="w-8 h-8" />,
      description: "Renewable energy projects, sustainable power solutions"
    },
    {
      title: "Biotechnology", 
      icon: <FlaskConical className="w-8 h-8" />,
      description: "Bio-tech environmental applications and regulatory compliance"
    },
    {
      title: "Manufacturing",
      icon: <Factory className="w-8 h-8" />,
      description: "Industrial processes, environmental compliance, and sustainability"
    },
    {
      title: "Information Technology",
      icon: <Laptop className="w-8 h-8" />,
      description: "IT infrastructure sustainability and green technology practices"
    },
    {
      title: "Research & Academia",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Universities, research institutions, and academic studies"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Environmental Director",
      company: "GreenTech Solutions",
      content: "EnviroAndIPR's compliance services helped us achieve sustainability goals while maintaining operational efficiency.",
      rating: 5,
      avatar: testimonialAvatar1
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "EcoManufacturing Inc.",
      content: "The EIA reports and clearance support were instrumental in getting our project approved on schedule.",
      rating: 5,
      avatar: testimonialAvatar2
    },
    {
      name: "Prof. Amanda Foster",
      role: "Research Director", 
      company: "Sustainability Institute",
      content: "Outstanding ESG reporting services that improved our sustainability performance and stakeholder communication.",
      rating: 5,
      avatar: testimonialAvatar3
    }
  ];

  const whyChoose = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Consulting",
      description: "Decades of experience in environmental science and regulatory compliance"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "End-to-End Solutions",
      description: "Complete environmental services from assessment to ongoing compliance monitoring"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trusted Partner",
      description: "Relied upon by corporates, government agencies, and academic institutions"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Measurable Results",
      description: "Sustainability outcomes with full transparency and accountability"
    }
  ];

  const faqTabs = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "General",
      value: "general",
      faqs: [
        {
          question: "How long does EIA reporting take?",
          answer: "EIA preparation typically takes 4-8 weeks depending on project complexity, followed by regulatory review periods that vary by jurisdiction and project scale."
        },
        {
          question: "What is Environmental Clearance process?",
          answer: "EC involves detailed environmental impact assessment, public consultation, and regulatory approval. We guide you through each stage from application to approval."
        },
        {
          question: "Do you handle both Category A and B projects?",
          answer: "Yes, we handle both Category A (requiring central clearance) and Category B (requiring state clearance) projects across all sectors."
        }
      ]
    },
    {
      icon: <Scale className="w-5 h-5" />,
      label: "Compliance",
      value: "compliance", 
      faqs: [
        {
          question: "What compliance services do you offer?",
          answer: "We provide comprehensive compliance support including regulatory assessments, permit applications, monitoring programs, and ongoing compliance management."
        },
        {
          question: "How do you ensure ongoing compliance?",
          answer: "Through regular monitoring, compliance audits, regulatory updates, and proactive management of all environmental permits and obligations."
        },
        {
          question: "Do you help with penalty mitigation?",
          answer: "Yes, we provide legal advisory and representation for environmental penalty cases, helping clients achieve favorable outcomes."
        }
      ]
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Reporting",
      value: "reporting",
      faqs: [
        {
          question: "Do you help with ESG reporting standards?",
          answer: "Yes, we assist with various ESG frameworks including GRI, SASB, TCFD, and custom reporting aligned with stakeholder requirements and industry standards."
        },
        {
          question: "Can you support CSR initiatives?",
          answer: "Absolutely. We help develop, implement, and report on CSR programs that align with business objectives and community needs while meeting regulatory requirements."
        },
        {
          question: "What about international reporting standards?",
          answer: "We support international frameworks including CDP, UN Global Compact, DJSI, and other globally recognized sustainability reporting standards."
        }
      ]
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "919195180016";
    const message = "Hi, I'm interested in your Environmental Consultancy services. I'd like to schedule a consultation to discuss my environmental compliance and sustainability needs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <Layout>
      <Helmet>
        <title>Environmental Consultancy Services - EIA, Compliance & Sustainability | EnviroAndIPR</title>
        <meta name="description" content="Expert environmental consultancy services including EIA reports, environmental clearance, compliance, sustainability reporting, and ESG consulting. Professional environmental solutions for businesses." />
        <meta name="keywords" content="environmental consultancy, EIA reports, environmental compliance, sustainability reporting, ESG consulting, environmental clearance, environmental impact assessment" />
      </Helmet>

      <HeroSplit
        headline="Drive Sustainable Progress. Ensure Environmental Compliance."
        subheadline="Partner with EnviroAndIPR for comprehensive environmental assessments, regulatory clearances, compliance management, and sustainability reporting."
        ctaPrimary="Get Free Consultation"
        ctaSecondary="Contact Us"
        imageUrl={heroSustainability}
        imageAlt="Environmental sustainability and compliance"
        onPrimaryClick={handleWhatsAppClick}
        onSecondaryClick={handleContactClick}
      />

      <IconCardGrid 
        services={services}
        title="Our Environmental Services"
        subtitle="Comprehensive environmental solutions to ensure compliance and drive sustainable business practices"
      />

      <StatsStrip stats={stats} />

      <Timeline5 
        steps={process}
        title="Our Proven Process"
        subtitle="From consultation to ongoing support, we guide you through every step of environmental compliance"
      />

      <IndustriesGrid 
        industries={industries}
        title="Industries We Serve"
        subtitle="Specialized expertise across diverse sectors and emerging environmental technologies"
      />

      <Testimonials3 
        testimonials={testimonials}
        title="What Our Clients Say"
        subtitle="Trusted by environmental leaders and sustainability champions worldwide"
      />

      <WhyChoose4 
        items={whyChoose}
        title="Why Choose EnviroAndIPR"
        subtitle="Your trusted partner for comprehensive environmental solutions and regulatory compliance"
      />

      <FAQTabs 
        tabs={faqTabs}
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our environmental services and compliance processes"
      />

      <CTAFullWidth
        headline="Ready to Drive Your Next Sustainability Initiative?"
        subheadline="Transform your environmental impact with expert guidance, comprehensive compliance solutions, and strategic sustainability planning."
        ctaPrimary="WhatsApp Consultation"
        ctaSecondary="Contact Us"
        onPrimaryClick={handleWhatsAppClick}
        onSecondaryClick={handleContactClick}
      />
    </Layout>
  );
};

export default EnvironmentalServices;