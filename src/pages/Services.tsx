
import { Leaf, Shield, FileCheck, BarChart3, Globe, Building, Users, Scale, BookOpen, ArrowRight, Phone } from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <FileCheck className="w-6 h-6 text-green-600" />,
      title: "Environmental Impact Assessment",
      shortTitle: "EIA Reports",
      description: "Complete environmental studies for your projects. We help you understand environmental impacts and get approvals faster."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Environmental Clearance",
      shortTitle: "Clearance Support",
      description: "Fast-track your project approvals. We handle all paperwork and guide you through government processes."
    },
    {
      icon: <Scale className="w-6 h-6 text-green-600" />,
      title: "Environmental Compliance",
      shortTitle: "Stay Compliant",
      description: "Meet all environmental laws and regulations. We ensure your business follows all requirements without hassle."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: "Due Diligence Services",
      shortTitle: "Risk Assessment",
      description: "Know your risks before investing. We check environmental and social factors to protect your investments."
    },
    {
      icon: <Globe className="w-6 h-6 text-green-600" />,
      title: "Environmental Mapping",
      shortTitle: "Smart Analytics",
      description: "Get detailed maps and data about air, water, and land quality. Make better decisions with clear insights."
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Sustainability Reporting",
      shortTitle: "ESG Reports",
      description: "Show your commitment to sustainability. Professional reports that build trust with customers and investors."
    }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "91XXXXXXXXXX";
    const message = "Hello EnviroAndIPR! I'm interested in your environmental services. Can we discuss my requirements?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Environmental Services
            <span className="block text-green-600 mt-2">Made Simple</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We help businesses worldwide meet environmental requirements and build sustainable futures. 
            Clear processes, expert guidance, and results you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional environmental consulting services for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {service.shortTitle}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <h3 className="font-medium text-gray-800 mb-2">{service.title}</h3>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose EnviroAndIPR?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Expert Team</h3>
                </div>
                <p className="text-gray-600">
                  Experienced environmental professionals with proven results across industries.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Complete Solutions</h3>
                </div>
                <p className="text-gray-600">
                  From planning to implementation - we handle everything so you don't have to.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Global Experience</h3>
                </div>
                <p className="text-gray-600">
                  We understand international standards and local requirements worldwide.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Fast Results</h3>
                </div>
                <p className="text-gray-600">
                  Quick turnaround times without compromising on quality or compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Get expert environmental consulting services. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 text-lg font-semibold"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                </svg>
                Chat on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <p className="text-green-100 mt-6 text-sm">
              Free consultation • No obligation • Quick response
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
