import { MessageCircle, Shield, Leaf, GraduationCap, CheckCircle, Users, Clock, Award, Star } from 'lucide-react';
import Layout from '../components/Layout';
import HeroSplit from '../components/sections/HeroSplit';
import TrustBadges from '../components/sections/TrustBadges';
import IconCardGrid from '../components/sections/IconCardGrid';
import WhyChoose4 from '../components/sections/WhyChoose4';
import CaseMini from '../components/sections/CaseMini';
import Testimonials3 from '../components/sections/Testimonials3';
import CTAFullWidth from '../components/sections/CTAFullWidth';
import heroImage from '../assets/hero-innovation-sustainability.jpg';
import ctaImage from '../assets/cta-network-innovation.jpg';
import avatarImage from '../assets/testimonial-avatar-1.jpg';
const Index = () => {
  // Core Services Data
  const coreServices = [{
    icon: <Shield className="w-12 h-12" />,
    title: "IPR Consultancy",
    description: "Secure patents, avoid risks, maximize IP value."
  }, {
    icon: <Leaf className="w-12 h-12" />,
    title: "Environmental Consultancy",
    description: "Meet regulations, pass assessments, prove sustainability."
  }, {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Training & Knowledge",
    description: "Workshops, courses, and resources to empower your team."
  }];

  // Why Choose Data
  const whyChooseItems = [{
    icon: <CheckCircle className="w-12 h-12" />,
    title: "500+ Projects Delivered",
    description: "98% approval success rate across all our client engagements"
  }, {
    icon: <Users className="w-12 h-12" />,
    title: "End-to-End Solutions",
    description: "From strategy to compliance & reporting - we handle everything"
  }, {
    icon: <Award className="w-12 h-12" />,
    title: "Expert Team",
    description: "Scientists, IP specialists, and consultants with deep expertise"
  }, {
    icon: <Clock className="w-12 h-12" />,
    title: "24/7 Support",
    description: "Always available when you need us most for urgent matters"
  }];

  // Case Studies Data
  const caseStudies = [{
    title: "Tech Startup Success",
    challenge: "High IP risk before critical funding round with potential patent conflicts",
    approach: "Comprehensive IP audit and strategic patent portfolio development",
    result: "Reduced IP risk by 70% and secured $2M funding round successfully"
  }, {
    title: "Manufacturing Efficiency",
    challenge: "Complex environmental approvals delaying production launch by months",
    approach: "Streamlined compliance strategy with regulatory liaison support",
    result: "Cleared environmental approvals in record time, saving 6 months"
  }, {
    title: "University Excellence",
    challenge: "Need to train 200+ students on practical IP and sustainability frameworks",
    approach: "Custom curriculum development with hands-on workshops and certification",
    result: "Successfully trained 200+ students with 95% satisfaction rate"
  }];

  // Testimonials Data
  const testimonials = [{
    name: "Sarah Johnson",
    role: "Founder",
    company: "Tech Startup",
    content: "EnviroAndIPR made our patent filing seamless. Couldn't recommend them more!",
    rating: 5,
    avatar: avatarImage
  }, {
    name: "Michael Chen",
    role: "Director",
    company: "Manufacturing Firm",
    content: "They guided us through tough clearance approvals and we saved months of delay.",
    rating: 5,
    avatar: avatarImage
  }, {
    name: "Dr. Amanda Williams",
    role: "Dean",
    company: "Leading University",
    content: "Our students learned practical, industry-ready IP and sustainability skills.",
    rating: 5,
    avatar: avatarImage
  }];
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = "Hi! I found your website and would like to book a free consultation for my environmental and IPR needs.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const handleConsultationClick = () => {
    // Scroll to contact form or open modal
    window.location.href = '/contact';
  };
  return <Layout>
      {/* 1. Hero Section */}
      <HeroSplit headline="Protect Your Ideas. Power Your Growth. Preserve Our Planet." subheadline="EnviroAndIPR helps innovators, businesses, and institutions secure intellectual property and achieve environmental compliance — so you can grow faster, safer, and smarter." ctaPrimary="Book a Free Consultation Today" ctaSecondary="Chat with Us on WhatsApp" imageUrl={heroImage} imageAlt="Innovation and sustainability combined - business growth with environmental protection" onPrimaryClick={handleConsultationClick} onSecondaryClick={handleWhatsAppClick} />

      {/* 2. Trust Badges / Social Proof */}
      <TrustBadges title="Trusted by 500+ Innovators, Enterprises, and Institutions Worldwide" />

      {/* 3. Core Services (3 Pillars) */}
      <IconCardGrid title="One Partner. Two Missions. Infinite Value." subtitle="We combine deep expertise in Intellectual Property and Environmental Consulting to give you a one-stop solution for compliance, protection, and growth." services={coreServices} columns={3} />

      {/* Schedule Free Strategy Session CTA */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom text-center">
          <button onClick={handleConsultationClick} className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 hover-lift">
            <MessageCircle className="w-5 h-5" />
            <span>Schedule a Free Strategy Session</span>
          </button>
        </div>
      </section>

      {/* 4. Why Choose EnviroAndIPR */}
      <WhyChoose4 title="Why Businesses Trust Us to Safeguard Their Future" items={whyChooseItems} />

      {/* Get Started CTA */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom text-center">
          <button onClick={handleConsultationClick} className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 hover-lift">
            <MessageCircle className="w-5 h-5" />
            <span>Get Started in 24 Hours</span>
          </button>
        </div>
      </section>

      {/* 5. Case Snapshots (Mini Success Stories) */}
      <CaseMini title="Real Results for Real Clients" cases={caseStudies} />

      {/* Book Discovery Call CTA */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom text-center">
          <button onClick={handleConsultationClick} className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 hover-lift">
            <MessageCircle className="w-5 h-5" />
            <span>Book a Discovery Call Now</span>
          </button>
        </div>
      </section>

      {/* 6. Testimonials (Social Proof) */}
      <Testimonials3 title="What Our Clients Say" testimonials={testimonials} />

      {/* 7. Call-to-Action (Full Width Gradient Section) */}
      <CTAFullWidth headline="Don't Risk Delays, Fines, or Missed Opportunities." subheadline="Let our experts protect your intellectual property and ensure environmental compliance — so you focus on what matters: growth." ctaPrimary="Book My Free Consultation" ctaSecondary="Chat on WhatsApp Now" illustrationUrl={ctaImage} onPrimaryClick={handleConsultationClick} onSecondaryClick={handleWhatsAppClick} />

      {/* 8. Footer Pre-CTA */}
      
    </Layout>;
};
export default Index;