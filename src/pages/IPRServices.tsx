import { Shield, Search, FileText, BarChart3, CheckCircle, MessageCircle, Mail, ArrowRight, Users, Clock, Globe, Award, Lightbulb, Target, TrendingUp, BookOpen, Star, GraduationCap, Eye, Building, Zap, Brain, Lock, Fingerprint, Settings, HelpCircle, DollarSign, ChevronDown } from 'lucide-react';
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
import heroIprPatents from '@/assets/hero-ipr-patents.jpg';
import testimonialAvatar1 from '@/assets/testimonial-avatar-1.jpg';
import testimonialAvatar2 from '@/assets/testimonial-avatar-2.jpg';
import testimonialAvatar3 from '@/assets/testimonial-avatar-3.jpg';

const IPRServices = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Patentability Search",
      description: "Assess invention uniqueness before filing with comprehensive global prior art searches.",
      details: "Comprehensive patentability searches to evaluate the novelty and non-obviousness of your invention. Our expert team conducts thorough searches across global patent databases, technical literature, and commercial products to assess patentability prospects. We provide detailed analysis reports with strategic recommendations for patent filing, claim drafting guidance, and competitive landscape insights to maximize your IP protection strategy."
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Validity/Invalidity Search",
      description: "Validate or challenge patents with exhaustive prior art research and legal analysis.",
      details: "Expert validity and invalidity searches to strengthen or challenge existing patents. Our comprehensive analysis includes prior art searches, claim construction analysis, and legal precedent review. We provide detailed invalidity contentions, expert witness support, and strategic advice for patent litigation, licensing negotiations, and portfolio optimization decisions."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Infringement Search",
      description: "Identify enforceable patents that might overlap with your innovations and products.",
      details: "Thorough infringement analysis to identify patents that may pose risks to your products or services. Our team conducts detailed claim mapping, provides infringement risk assessments, and develops design-around strategies. We offer comprehensive FTO opinions, litigation risk analysis, and strategic recommendations for product development and commercialization decisions."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Freedom to Operate (FTO)",
      description: "Ensure your innovation can proceed without infringing existing patent rights.",
      details: "Comprehensive Freedom to Operate analysis ensuring your products can be commercialized without patent infringement risks. Our FTO studies include patent landscape mapping, claim analysis, and risk assessment across relevant jurisdictions. We provide strategic recommendations for product development, design-around options, and licensing opportunities to enable successful market entry."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Patent Drafting & Preparation",
      description: "Craft robust, compliant patent applications that withstand examination scrutiny.",
      details: "Professional patent drafting services combining technical expertise with legal precision. Our experienced team prepares high-quality patent specifications, claims, and drawings that maximize protection scope while ensuring compliance with patent office requirements. We specialize in complex technical inventions across multiple jurisdictions with strategic claim architecture."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "State-of-the-Art Search",
      description: "Map comprehensive technology landscapes to identify opportunities and guide R&D.",
      details: "Comprehensive state-of-the-art searches providing complete technology landscape analysis. Our research covers patent and non-patent literature, emerging technologies, and market trends. We deliver strategic insights for R&D planning, competitive intelligence, technology forecasting, and innovation opportunity identification to guide your technology development investments."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Patent Landscape Study",
      description: "Understand competitor IP strategies and identify white spaces for innovation.",
      details: "Detailed patent landscape analysis providing comprehensive market intelligence and competitive insights. Our studies include patent mapping, competitor analysis, technology trends, and white space identification. We deliver actionable intelligence for strategic planning, licensing opportunities, acquisition targets, and technology development priorities."
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Competitor Analysis",
      description: "Analyze rival patent portfolios to identify threats, opportunities, and strategic gaps.",
      details: "In-depth competitor patent analysis providing strategic competitive intelligence. Our analysis includes portfolio strength assessment, filing strategies, technology focus areas, and licensing activities. We identify competitive advantages, potential collaboration opportunities, and strategic threats to inform business development and IP strategy decisions."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Patent Portfolio Analysis",
      description: "Evaluate existing patent portfolios for licensing potential and investment decisions.",
      details: "Comprehensive patent portfolio evaluation and optimization services. Our analysis includes patent strength assessment, commercialization potential, maintenance cost analysis, and strategic value evaluation. We provide recommendations for portfolio pruning, licensing opportunities, monetization strategies, and strategic acquisitions to maximize portfolio ROI."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Technology Assessment",
      description: "Uncover innovation opportunities and fuel smarter technology development decisions.",
      details: "Strategic technology assessment combining patent intelligence with market analysis. Our assessments evaluate technology maturity, commercial potential, competitive landscape, and development opportunities. We provide strategic recommendations for technology investments, partnership opportunities, and innovation roadmap development to optimize R&D resource allocation."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "White-space Analysis",
      description: "Identify low patent density areas for new innovation opportunities and development.",
      details: "Comprehensive white-space analysis identifying untapped innovation opportunities. Our research maps patent-free areas within technology domains, emerging application areas, and underexplored technical solutions. We provide strategic guidance for R&D focus areas, new product development, and market entry strategies in patent-light territories."
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "IP Education & Training",
      description: "Patent agent exam preparation, workshops, and comprehensive IP training programs.",
      details: "Comprehensive IP education and training programs for professionals, students, and organizations. Our services include patent agent exam coaching, IP awareness workshops, portfolio management training, and strategic IP education. We offer customized curricula covering patent law, filing procedures, prosecution strategies, and IP commercialization for various stakeholder groups."
    }
  ];

  const stats = [
    { icon: <FileText className="w-12 h-12" />, number: "500+", label: "Projects Completed" },
    { icon: <Users className="w-12 h-12" />, number: "200+", label: "Satisfied Clients" },
    { icon: <Target className="w-12 h-12" />, number: "98%", label: "Success Rate" },
    { icon: <Clock className="w-12 h-12" />, number: "24/7", label: "Support Available" }
  ];

  const process = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Initial Consultation",
      description: "Understand your innovation goals and IP protection needs"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Develop customized IP strategy and protection roadmap"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research & Analysis",
      description: "Comprehensive searches and competitive landscape analysis"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Implementation & Filing",
      description: "Professional drafting, filing, and portfolio management"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Monitoring & Support",
      description: "Ongoing portfolio monitoring and strategic IP guidance"
    }
  ];

  const industries = [
    {
      title: "Environmental Technology",
      icon: <Globe className="w-8 h-8" />,
      description: "Clean energy, waste management, pollution control innovations"
    },
    {
      title: "Biotechnology",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Pharmaceuticals, medical devices, bioengineering solutions"
    },
    {
      title: "Information Technology",
      icon: <Settings className="w-8 h-8" />,
      description: "Software, AI, telecommunications, and electronics innovations"
    },
    {
      title: "Manufacturing",
      icon: <Award className="w-8 h-8" />,
      description: "Industrial processes, automation, and advanced materials"
    },
    {
      title: "Research & Academia",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Universities, research institutions, and innovation centers"
    },
    {
      title: "Startups & SMEs",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Emerging companies, innovation hubs, and technology incubators"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "CTO",
      company: "TechStart Innovations",
      content: "EnviroAndIPR's expertise helped us secure crucial IP protection for our breakthrough environmental technology.",
      rating: 5,
      avatar: testimonialAvatar1
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "GreenTech Solutions",
      content: "Perfect partner for our patent strategy. Their deep understanding of both environmental tech and IP law is invaluable.",
      rating: 5,
      avatar: testimonialAvatar2
    },
    {
      name: "Prof. Amanda Rodriguez",
      role: "Research Director",
      company: "Innovation Institute",
      content: "Outstanding patent landscape analysis that identified white spaces and guided our R&D investments effectively.",
      rating: 5,
      avatar: testimonialAvatar3
    }
  ];

  const whyChoose = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Knowledge",
      description: "Decades of experience in patent research, IP strategy, and technology analysis"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business-Oriented",
      description: "IP advisory services that drive real commercial value and competitive advantage"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Confidential Service",
      description: "Trusted by inventors, startups, corporates, and academic institutions worldwide"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Actionable Insights",
      description: "Transform IP intelligence into strategic business advantage with clear recommendations"
    }
  ];

  const faqTabs = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "General",
      value: "general",
      faqs: [
        {
          question: "How long does patent filing take?",
          answer: "Initial application preparation takes 2-4 weeks, followed by 18-36 months for patent office examination, depending on jurisdiction and complexity."
        },
        {
          question: "Can I file patents internationally?",
          answer: "Yes, we assist with international filing through PCT applications and direct national entries in multiple countries worldwide."
        },
        {
          question: "What is freedom to operate analysis?",
          answer: "FTO analysis identifies existing patents that might block your product from market entry, helping navigate potential infringement issues before commercialization."
        }
      ]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Process",
      value: "process",
      faqs: [
        {
          question: "How do you develop IP strategy for startups?",
          answer: "We analyze your technology, market position, and goals to create tailored IP strategies that maximize protection while optimizing costs and timeline."
        },
        {
          question: "What's included in patent landscape studies?",
          answer: "Comprehensive analysis including patent mapping, competitor strategies, technology trends, white space identification, and strategic recommendations."
        },
        {
          question: "Do you provide ongoing portfolio management?",
          answer: "Yes, we offer complete portfolio management including maintenance, monitoring, licensing opportunities, and strategic optimization services."
        }
      ]
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      label: "Pricing",
      value: "pricing",
      faqs: [
        {
          question: "What are patent filing costs?",
          answer: "Costs vary based on application type, claims complexity, and jurisdictions. We provide detailed estimates after consultation and work within various budgets."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment arrangements for ongoing services and can structure payments based on project milestones and client needs."
        },
        {
          question: "Are there additional costs for international filing?",
          answer: "International filing involves additional official fees and translation costs. We provide transparent cost estimates covering all associated expenses upfront."
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

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <Layout>
      <Helmet>
        <title>IPR Consultancy Services - Patent Search, Filing & IP Strategy | EnviroAndIPR</title>
        <meta name="description" content="Expert IPR consultancy services including patent search, patent filing, IP strategy, and intellectual property protection. Professional patent services for inventors and businesses." />
        <meta name="keywords" content="IPR consultancy, patent search, patent filing, intellectual property, patent drafting, IP strategy, patent landscape analysis, patent portfolio" />
      </Helmet>

      <HeroSplit
        headline="Safeguard Your Ideas. Accelerate Your Growth."
        subheadline="Comprehensive intellectual property services helping inventors, startups, and enterprises secure and maximize their IP potential through expert research, strategy, and protection."
        ctaPrimary="Get Free Consultation"
        ctaSecondary="Contact Us"
        imageUrl={heroIprPatents}
        imageAlt="Intellectual property and patent protection"
        onPrimaryClick={handleWhatsAppClick}
        onSecondaryClick={handleContactClick}
      />

      <IconCardGrid 
        services={services}
        title="Our IPR Services"
        subtitle="Comprehensive intellectual property services to protect, enhance, and monetize your innovations"
      />

      <StatsStrip stats={stats} />

      <Timeline5 
        steps={process}
        title="Our Proven Process"
        subtitle="From consultation to ongoing support, we guide you through every step of IP protection and strategy"
      />

      <IndustriesGrid 
        industries={industries}
        title="Industries We Serve"
        subtitle="Specialized IP expertise across diverse sectors and emerging technology domains"
      />

      <Testimonials3 
        testimonials={testimonials}
        title="What Our Clients Say"
        subtitle="Trusted by innovators, entrepreneurs, and IP professionals worldwide"
      />

      <WhyChoose4 
        items={whyChoose}
        title="Why Choose EnviroAndIPR"
        subtitle="Your strategic partner for comprehensive IP protection and business-driven intellectual property solutions"
      />

      <FAQTabs 
        tabs={faqTabs}
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our IP services, processes, and strategic approach"
      />

      <CTAFullWidth
        headline="Ready to Secure Your Next Big Idea?"
        subheadline="Transform your innovations into competitive advantages with expert IP strategy, comprehensive protection, and strategic portfolio management."
        ctaPrimary="WhatsApp Consultation"
        ctaSecondary="Contact Us"
        onPrimaryClick={handleWhatsAppClick}
        onSecondaryClick={handleContactClick}
      />
    </Layout>
  );
};

export default IPRServices;