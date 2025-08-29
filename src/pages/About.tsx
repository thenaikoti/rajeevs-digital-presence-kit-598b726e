
import { Award, Users, TrendingUp, Target, MessageCircle, Mail, ArrowRight, CheckCircle, Shield, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import HeroSplit from '../components/sections/HeroSplit';
import StatsStrip from '../components/sections/StatsStrip';
import Timeline5 from '../components/sections/Timeline5';
import WhyChoose4 from '../components/sections/WhyChoose4';
import CTAFullWidth from '../components/sections/CTAFullWidth';
import heroAboutTeam from '@/assets/hero-about-team.jpg';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-12 h-12" />,
      number: "500+",
      label: "Projects Completed"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      number: "250+",
      label: "Satisfied Clients"  
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: "98%",
      label: "Success Rate"
    },
    {
      icon: <Target className="w-12 h-12" />,
      number: "24/7",
      label: "Support Available"
    }
  ];

  const journey = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Founded EnviroAndIPR",
      description: "Established comprehensive consultancy for environmental and IP services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Environmental Expertise",
      description: "Specialized in EIA, compliance, and sustainability reporting"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "IP Services Expansion", 
      description: "Added patent research, filing, and IP strategy services"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Leadership",
      description: "Recognized leader serving clients across industries globally"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Milestone",
      description: "Achieved 500+ successful projects with 98% client satisfaction"
    }
  ];

  const whyChoose = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Team",
      description: "Seasoned professionals with deep domain expertise"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Proven Results",
      description: "Track record of successful compliance and IP protection"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trusted Partner",
      description: "Confidential, reliable service across all engagements"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Innovation Focus",
      description: "Cutting-edge solutions for modern business challenges"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "919195180016";
    const message = "Hi, I'd like to learn more about EnviroAndIPR services and discuss my business needs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <Layout>
      <Helmet>
        <title>About EnviroAndIPR - Expert Environmental & IP Consultancy | Science, Law & Strategy</title>
        <meta name="description" content="Learn about EnviroAndIPR's mission, expertise, and track record in environmental consultancy and intellectual property services. Science, law, and strategy under one roof." />
        <meta name="keywords" content="about EnviroAndIPR, environmental consultancy, IP services, expert team, business consultancy, sustainability" />
      </Helmet>

      <HeroSplit
        headline="Science, Law & Strategy—Under One Roof"
        subheadline="Comprehensive environmental and intellectual property consultancy services backed by deep expertise, proven results, and client-focused approach."
        ctaPrimary="Get Free Consultation"
        ctaSecondary="Contact Us"
        imageUrl={heroAboutTeam}
        imageAlt="EnviroAndIPR expert team"
        onPrimaryClick={handleWhatsAppClick}
        onSecondaryClick={handleContactClick}
      />

      <StatsStrip stats={stats} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4 text-ink">Our Mission & Values</h2>
            <p className="text-body text-lg max-w-3xl mx-auto text-text">
              EnviroAndIPR bridges the gap between environmental science and intellectual property law, 
              providing integrated solutions that drive sustainable innovation and business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-6 shadow-card border border-muted/20">
                <h3 className="text-h3 mb-3 text-ink">Mission</h3>
                <p className="text-body text-text leading-relaxed">
                  To empower businesses with comprehensive environmental compliance and IP protection 
                  strategies that ensure regulatory adherence while maximizing innovation potential and market advantage.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-card border border-muted/20">
                <h3 className="text-h3 mb-3 text-ink">Vision</h3>
                <p className="text-body text-text leading-relaxed">
                  To be the leading consultancy firm that seamlessly integrates environmental sustainability 
                  with intellectual property strategy, creating lasting value for our clients and society.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-h3 text-ink mb-6">Core Values</h3>
              <div className="space-y-4">
                {[
                  { title: "Excellence", desc: "Delivering superior quality in every engagement" },
                  { title: "Integrity", desc: "Maintaining highest ethical standards and confidentiality" },
                  { title: "Innovation", desc: "Embracing cutting-edge solutions and methodologies" },
                  { title: "Sustainability", desc: "Promoting environmental responsibility in all practices" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card/50 rounded-lg">
                    <div className="w-2 h-2 bg-brand-green rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-ink mb-1">{value.title}</h4>
                      <p className="text-body text-sm text-text">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline5 
        steps={journey}
        title="Our Journey"
        subtitle="Building expertise through years of dedicated service and continuous innovation"
      />

      <WhyChoose4 
        items={whyChoose}
        title="Why Choose EnviroAndIPR"
        subtitle="Trusted by businesses worldwide for our expertise, reliability, and results-driven approach"
      />

      <CTAFullWidth
        headline="Ready to Drive Your Next Initiative?"
        subheadline="Partner with EnviroAndIPR for comprehensive environmental and IP solutions that accelerate your business growth."
        ctaPrimary="WhatsApp Consultation"
        ctaSecondary="Contact Us"
        onPrimaryClick={handleWhatsAppClick}
        onSecondaryClick={handleContactClick}
      />
    </Layout>
  );
};

export default About;
