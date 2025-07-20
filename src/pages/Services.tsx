
import { Leaf, Shield, FileCheck, BarChart3, Globe, Building, Users, Scale, BookOpen, ArrowRight, Phone, CheckCircle, Star, MapPin, Clock, Award, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <FileCheck className="w-8 h-8 text-green-600" />,
      title: "Environmental Impact Assessment (EIA) Reports",
      description: "Get a clear picture of your project's environmental footprint. We conduct comprehensive studies, prepare detailed EIA reports, and guide you through the approval process to ensure both compliance and sustainability.",
      features: ["Comprehensive impact studies", "Detailed reporting", "Approval guidance", "Compliance assurance"]
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Environmental Clearance Reports",
      description: "We simplify the clearance process—helping you assess project impacts, address key concerns, and obtain timely approvals from authorities so your projects never lose momentum.",
      features: ["Fast-track approvals", "Impact assessment", "Authority liaison", "Timeline management"]
    },
    {
      icon: <Scale className="w-8 h-8 text-green-600" />,
      title: "Environmental Compliance Services",
      description: "Stay protected and proactive. We help you meet every legal requirement—air and water quality, waste management, audits, permits, and more—so you can focus on growing your business, risk-free.",
      features: ["Legal compliance", "Quality monitoring", "Permit management", "Risk mitigation"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Environmental & Social Due Diligence (ESDD)",
      description: "Assess risks before you invest. Our ESDD services evaluate environmental and social factors, uncover potential liabilities, and highlight opportunities for positive impact.",
      features: ["Risk assessment", "Investment protection", "Social impact analysis", "Opportunity identification"]
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Environmental Quality Mapping (EQM)",
      description: "Leverage powerful insights with advanced GIS and analytics. We create spatial maps to monitor air, water, land use, and pollution—helping you make data-driven decisions.",
      features: ["GIS mapping", "Data analytics", "Real-time monitoring", "Decision support"]
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Sustainability (ESG) Reporting",
      description: "Earn the trust of customers and stakeholders. We help you track, measure, and communicate your performance on environmental, social, and governance metrics with world-class reporting.",
      features: ["ESG metrics tracking", "Stakeholder reporting", "Performance measurement", "Transparency building"]
    },
    {
      icon: <Building className="w-8 h-8 text-green-600" />,
      title: "Corporate Social Responsibility (CSR) Reporting",
      description: "Share your positive impact. We design CSR reports that showcase your contributions to society and the environment, reinforcing your reputation as a responsible business.",
      features: ["Impact documentation", "Reputation building", "Social contribution", "Stakeholder engagement"]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Legal & Regulatory Compliance",
      description: "Confidently navigate complex environmental laws. Our team offers practical guidance and ongoing support to help you avoid legal pitfalls and maintain your compliance status.",
      features: ["Legal guidance", "Regulatory updates", "Compliance monitoring", "Risk prevention"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Knowledge Management",
      description: "Empower your team. We develop and manage resources that keep your organization up-to-date on the latest environmental best practices and regulatory changes.",
      features: ["Team training", "Best practices", "Resource development", "Continuous learning"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Countries Served", icon: <MapPin className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const industries = [
    "Manufacturing", "Oil & Gas", "Mining", "Construction", "Power & Energy", 
    "Infrastructure", "Real Estate", "Agriculture", "Healthcare", "Technology"
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "91XXXXXXXXXX";
    const message = "Hello EnviroAndIPR! I'm interested in your environmental consultancy services. Can we discuss my requirements?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=80" 
            alt="Environmental landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4 mr-2" />
            Environmental Consultancy Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Make Sustainability Your
            <span className="block text-green-600 mt-2">Competitive Advantage</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
            At EnviroAndIPR, we believe progress and environmental responsibility go hand-in-hand. 
            Our end-to-end environmental consultancy services help you unlock growth, stay fully compliant, 
            and demonstrate your commitment to a greener tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-green-100 rounded-full text-green-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Complete Range of Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From compliance to sustainability reporting, we provide comprehensive environmental solutions 
              tailored to your industry and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white group">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4 text-base">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, helping businesses of all sizes 
              achieve their environmental goals.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Image */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80" 
            alt="Forest landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Why Choose EnviroAndIPR?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-green-300 mr-4" />
                  <h3 className="text-2xl font-bold">Proven Expertise</h3>
                </div>
                <p className="text-green-100 text-lg leading-relaxed">
                  A team of experienced environmental professionals with a strong track record 
                  across multiple industries and regulatory frameworks.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-300 mr-4" />
                  <h3 className="text-2xl font-bold">Integrated Approach</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  From regulatory advice to implementation and reporting, we cover every step 
                  of your environmental journey.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-green-300 mr-4" />
                  <h3 className="text-2xl font-bold">Client-Centric</h3>
                </div>
                <p className="text-green-100 text-lg leading-relaxed">
                  Customized solutions for corporates, governments, and academic institutions 
                  worldwide, tailored to your specific needs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-blue-300 mr-4" />
                  <h3 className="text-2xl font-bold">Commitment to Excellence</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  We don't just deliver reports—we partner in your long-term sustainability 
                  and business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make environmental consultancy straightforward and efficient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Consultation", desc: "We understand your needs and challenges" },
              { step: "2", title: "Assessment", desc: "Detailed analysis and evaluation of your project" },
              { step: "3", title: "Solution", desc: "Customized recommendations and implementation" },
              { step: "4", title: "Support", desc: "Ongoing monitoring and compliance assistance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=80" 
            alt="Sunlight through trees" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl md:text-2xl text-green-100 mb-10 leading-relaxed">
              Let EnviroAndIPR guide your business toward compliance, resilience, and lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-white hover:bg-gray-100 text-green-600 px-10 py-4 text-xl font-bold"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-3">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                </svg>
                Enquire on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 text-xl font-bold"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
            <p className="text-green-100 text-lg">
              Have questions or need a custom solution? We're here to help! 
              Reach out now and let's make sustainability work for your organization.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
