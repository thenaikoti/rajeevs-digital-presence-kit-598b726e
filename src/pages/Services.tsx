
import { Leaf, Shield, FileCheck, BarChart3, Globe, Building, Users, Scale, BookOpen, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const Services = () => {
  const services = [
    {
      icon: <FileCheck className="w-8 h-8 text-green-600" />,
      title: "Environmental Impact Assessment (EIA) Reports",
      description: "Get a clear picture of your project's environmental footprint. We conduct comprehensive studies, prepare detailed EIA reports, and guide you through the approval process to ensure both compliance and sustainability."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Environmental Clearance Reports",
      description: "We simplify the clearance process—helping you assess project impacts, address key concerns, and obtain timely approvals from authorities so your projects never lose momentum."
    },
    {
      icon: <Scale className="w-8 h-8 text-green-600" />,
      title: "Environmental Compliance Services",
      description: "Stay protected and proactive. We help you meet every legal requirement—air and water quality, waste management, audits, permits, and more—so you can focus on growing your business, risk-free."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Environmental & Social Due Diligence (ESDD)",
      description: "Assess risks before you invest. Our ESDD services evaluate environmental and social factors, uncover potential liabilities, and highlight opportunities for positive impact."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Environmental Quality Mapping (EQM)",
      description: "Leverage powerful insights with advanced GIS and analytics. We create spatial maps to monitor air, water, land use, and pollution—helping you make data-driven decisions for your operations or community."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Sustainability (ESG) Reporting",
      description: "Earn the trust of customers and stakeholders. We help you track, measure, and communicate your performance on environmental, social, and governance metrics with world-class reporting."
    },
    {
      icon: <Building className="w-8 h-8 text-green-600" />,
      title: "Corporate Social Responsibility (CSR) Reporting",
      description: "Share your positive impact. We design CSR reports that showcase your contributions to society and the environment, reinforcing your reputation as a responsible business."
    },
    {
      icon: <Scale className="w-8 h-8 text-green-600" />,
      title: "Legal & Regulatory Compliance",
      description: "Confidently navigate complex environmental laws. Our team offers practical guidance and ongoing support to help you avoid legal pitfalls and maintain your compliance status."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Knowledge Management",
      description: "Empower your team. We develop and manage resources that keep your organization up-to-date on the latest environmental best practices and regulatory changes."
    }
  ];

  const handleWhatsAppEnquiry = () => {
    const phoneNumber = "91XXXXXXXXXX";
    const message = "Hi EnviroAndIPR team, I'm interested in your environmental consultancy services. Can we schedule a consultation to discuss my requirements?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Make Sustainability Your <span className="text-green-600">Competitive Advantage</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At EnviroAndIPR, we believe progress and environmental responsibility go hand-in-hand. 
            Our end-to-end environmental consultancy services help you unlock growth, stay fully compliant, 
            and demonstrate your commitment to a greener tomorrow.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive environmental solutions tailored to your business needs
            </p>
          </div>

          {/* Desktop View - Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-600">
                <CardHeader>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile View - Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <span className="font-semibold text-gray-900">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed pl-11">
                      {service.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose EnviroAndIPR?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-l-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  A team of experienced environmental professionals with a strong track record.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-l-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  From regulatory advice to implementation and reporting, we cover every step.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-l-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric</h3>
                <p className="text-gray-600 leading-relaxed">
                  Customized solutions for corporates, governments, and academic institutions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-l-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Commitment to Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't just deliver reports—we partner in your long-term sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build a Sustainable Future?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let EnviroAndIPR guide your business toward compliance, resilience, and lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleWhatsAppEnquiry}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
              </svg>
              <span>Enquire on WhatsApp</span>
            </button>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </a>
          </div>
          <p className="text-green-100 max-w-2xl mx-auto">
            Have questions or need a custom solution? We're here to help! Reach out now and let's make sustainability work for your organization.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
