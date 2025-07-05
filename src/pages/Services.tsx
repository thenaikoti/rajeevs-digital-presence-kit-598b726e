
import { TrendingUp, Users, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Digital Strategy Consulting",
      description: "Comprehensive digital transformation roadmaps tailored to your business goals and market position.",
      features: [
        "Digital maturity assessment",
        "Technology roadmap development",
        "Change management planning",
        "ROI optimization strategies",
        "Market analysis and positioning"
      ],
      process: "We start with a thorough analysis of your current digital landscape, identify opportunities for improvement, and create a strategic roadmap that aligns with your business objectives."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Business Process Optimization",
      description: "Streamline operations and enhance efficiency through strategic process improvements and automation.",
      features: [
        "Process mapping and analysis",
        "Workflow optimization",
        "Automation implementation",
        "Performance metrics design",
        "Team training and support"
      ],
      process: "Through detailed process analysis and stakeholder consultation, we identify bottlenecks and implement solutions that improve efficiency while maintaining quality standards."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Risk Management Solutions",
      description: "Identify, assess, and mitigate business risks with proven frameworks and methodologies.",
      features: [
        "Risk assessment and analysis",
        "Mitigation strategy development",
        "Compliance framework design",
        "Crisis management planning",
        "Continuous monitoring systems"
      ],
      process: "We conduct comprehensive risk assessments, develop tailored mitigation strategies, and establish monitoring systems to ensure ongoing protection of your business interests."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Strategic Planning & Implementation",
      description: "End-to-end strategic planning services from concept development to successful implementation.",
      features: [
        "Strategic planning workshops",
        "Goal setting and KPI development",
        "Implementation roadmaps",
        "Progress tracking systems",
        "Regular review and optimization"
      ],
      process: "We facilitate collaborative strategic planning sessions, establish clear objectives and metrics, and provide ongoing support throughout the implementation phase."
    }
  ];

  const handleWhatsAppEnquiry = (serviceName: string) => {
    const phoneNumber = "919876543210";
    const message = `Hi Rajeev, I'm interested in your ${serviceName} service. Can we schedule a consultation to discuss my requirements?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting solutions designed to drive your business forward with strategic insights, 
            proven methodologies, and measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.process}
                  </p>
                  <button
                    onClick={() => handleWhatsAppEnquiry(service.title)}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                    </svg>
                    <span>Enquire Now</span>
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Rajeev Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              Why Choose Rajeev for Your Consulting Needs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 10 years of experience with 200+ successful projects across diverse industries, 
                  delivering measurable results and sustainable growth.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tailored Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every solution is customized to your specific business needs, industry requirements, 
                  and organizational culture for maximum effectiveness.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hands-on Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Direct involvement in implementation ensures that strategies are not just planned 
                  but successfully executed with your team.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous support and optimization even after project completion to ensure 
                  long-term success and adaptation to changing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards transforming your business. Schedule a free consultation 
            to discuss your specific needs and explore how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppEnquiry("consultation")}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
              </svg>
              <span>Free WhatsApp Consultation</span>
            </button>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Form</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
