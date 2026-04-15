import { Search, FileText, Eye, Shield, Scale, Users, Clock, Target, Award, Lock, DollarSign, Briefcase, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import HeroSplit from '@/components/sections/HeroSplit';
import IconCardGrid from '@/components/sections/IconCardGrid';
import StatsStrip from '@/components/sections/StatsStrip';
import WhyChoose4 from '@/components/sections/WhyChoose4';
import CTAFullWidth from '@/components/sections/CTAFullWidth';
import heroLpo from '@/assets/hero-lpo-services.jpg';

const LPOServices = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Legal Research",
      description: "Comprehensive legal research across jurisdictions, case law analysis, and statutory interpretation to support informed decision-making.",
      details: "Our legal research services provide thorough analysis of case law, statutes, regulations, and legal precedents across multiple jurisdictions. We deliver well-structured research memoranda, annotated bibliographies, and strategic legal insights that empower attorneys to make informed decisions and build stronger cases."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Contract Drafting & Review",
      description: "Expert drafting, reviewing, and redlining of contracts, agreements, and legal documents for accuracy and compliance.",
      details: "Our team drafts and reviews a wide range of commercial contracts including NDAs, service agreements, licensing agreements, employment contracts, and vendor agreements. We ensure legal accuracy, regulatory compliance, risk mitigation, and alignment with client business objectives through meticulous clause-by-clause analysis."
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Document Review",
      description: "Large-scale document review and analysis for litigation support, due diligence, and regulatory compliance matters.",
      details: "We provide efficient and accurate document review services for litigation, investigations, and regulatory proceedings. Our team handles privilege review, relevance categorization, data extraction, and quality control across large document sets using systematic review protocols and advanced organizational methods."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Compliance Support",
      description: "Regulatory compliance monitoring, policy development, and risk assessment to keep your organization aligned with legal requirements.",
      details: "Comprehensive compliance support including regulatory landscape analysis, policy drafting, compliance audits, risk assessments, and ongoing monitoring. We help organizations navigate complex regulatory environments across industries including healthcare, finance, environmental, and data privacy regulations."
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Legal Process Management",
      description: "Streamlined legal workflow management, process optimization, and operational efficiency for law firms and legal departments.",
      details: "We help law firms and corporate legal departments optimize their operations through workflow analysis, process standardization, technology integration, and performance metrics tracking. Our process management services reduce costs, improve turnaround times, and enhance overall legal service delivery quality."
    }
  ];

  const stats = [
    { icon: <FileText className="w-12 h-12" />, number: "1000+", label: "Documents Reviewed" },
    { icon: <Users className="w-12 h-12" />, number: "150+", label: "Legal Clients" },
    { icon: <Target className="w-12 h-12" />, number: "99%", label: "Accuracy Rate" },
    { icon: <Clock className="w-12 h-12" />, number: "24/7", label: "Support Available" }
  ];

  const whyChoose = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Precision & Accuracy",
      description: "Meticulous attention to detail with rigorous quality control ensuring error-free legal deliverables"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Confidentiality",
      description: "Strict data protection protocols and NDA-backed processes to safeguard sensitive legal information"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Cost-Effectiveness",
      description: "Reduce legal operational costs by up to 60% without compromising quality or turnaround times"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Domain Expertise",
      description: "Qualified legal professionals with deep expertise across multiple practice areas and jurisdictions"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "919195180016";
    const message = "Hi, I'm interested in your Legal Process Outsourcing services. I'd like to schedule a consultation to discuss my legal support needs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <Layout>
      <Helmet>
        <title>LPO Services – Legal Process Outsourcing | EnviroAndIPR</title>
        <meta name="description" content="Professional legal process outsourcing services including legal research, contract drafting, document review, compliance support, and litigation support. Cost-effective legal solutions." />
        <meta name="keywords" content="LPO services, legal process outsourcing, legal research, contract drafting, document review, compliance support, litigation support, legal outsourcing India" />
      </Helmet>

      <HeroSplit
        headline="Efficient Legal Support. Uncompromising Quality."
        subheadline="Streamline your legal operations with our expert Legal Process Outsourcing services — delivering precision, confidentiality, and cost-effective solutions for law firms and corporate legal departments."
        ctaPrimary="Get Free Consultation"
        ctaSecondary="Contact Us"
        imageUrl={heroLpo}
        imageAlt="Legal process outsourcing services"
        onPrimaryClick={handleWhatsAppClick}
        onSecondaryClick={handleContactClick}
      />

      <IconCardGrid
        services={services}
        columns={3}
        title="Our LPO Services"
        subtitle="Comprehensive legal process outsourcing solutions to enhance efficiency and reduce operational costs"
      />

      <StatsStrip stats={stats} />

      <WhyChoose4
        items={whyChoose}
        title="Why Choose EnviroAndIPR for LPO"
        subtitle="Your trusted partner for high-quality, confidential, and cost-effective legal process outsourcing"
      />

      <CTAFullWidth
        headline="Ready to Optimize Your Legal Operations?"
        subheadline="Partner with us to reduce costs, improve efficiency, and access expert legal support tailored to your needs."
        ctaPrimary="WhatsApp Consultation"
        ctaSecondary="Contact Us"
        onPrimaryClick={handleWhatsAppClick}
        onSecondaryClick={handleContactClick}
      />
    </Layout>
  );
};

export default LPOServices;
