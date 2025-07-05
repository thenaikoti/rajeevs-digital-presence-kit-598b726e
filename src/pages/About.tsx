
import { Award, Users, TrendingUp, Target } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  const milestones = [
    {
      year: "2014",
      title: "Started Consulting Journey",
      description: "Began providing strategic consulting services to small and medium enterprises."
    },
    {
      year: "2017",
      title: "Digital Transformation Focus",
      description: "Specialized in helping businesses navigate digital transformation challenges."
    },
    {
      year: "2019",
      title: "Expanded Service Portfolio",
      description: "Added risk management and process optimization to service offerings."
    },
    {
      year: "2022",
      title: "100+ Successful Projects",
      description: "Reached milestone of completing over 100 successful consulting projects."
    }
  ];

  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "150+",
      label: "Clients Served"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      number: "200+",
      label: "Projects Completed"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      number: "95%",
      label: "Client Satisfaction"
    }
  ];

  const certifications = [
    "Certified Management Consultant (CMC)",
    "Project Management Professional (PMP)",
    "Digital Transformation Specialist",
    "Risk Management Certification",
    "Business Process Optimization Expert"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Rajeev Ranjan
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A seasoned digital consultant with over a decade of experience in transforming businesses through strategic planning, process optimization, and innovative solutions.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Mission Statement</h3>
                <p className="text-gray-600 leading-relaxed">
                  "To empower businesses with data-driven strategies, innovative solutions, and sustainable growth frameworks that create lasting value and competitive advantage in the digital age."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Rajeev Ranjan - Professional Portrait"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Professional Background
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Rajeev Ranjan is a distinguished digital consultant and business strategist with over 10 years of experience helping organizations navigate complex business challenges and achieve sustainable growth. His expertise spans across digital transformation, business process optimization, and strategic risk management.
              </p>
              <p>
                With a proven track record of delivering results-driven solutions, Rajeev has worked with companies ranging from startups to established enterprises across various industries including technology, finance, healthcare, and manufacturing. His approach combines analytical rigor with practical implementation strategies.
              </p>
              <p>
                Rajeev's deep understanding of emerging technologies, market dynamics, and organizational behavior enables him to craft tailored solutions that not only address immediate challenges but also position businesses for long-term success in an increasingly competitive marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Professional Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-1/2'}`}>
                      <div className="bg-white rounded-lg p-6 shadow-lg">
                        <div className="text-sm font-semibold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-white font-semibold text-lg">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with proven strategies and expert guidance? 
            Let's discuss your unique challenges and opportunities.
          </p>
          <button
            onClick={() => {
              const phoneNumber = "919876543210";
              const message = "Hi Rajeev, I'd like to learn more about your consulting services and discuss my business needs.";
              const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
            </svg>
            <span>Get in Touch</span>
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
