import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import Layout from '../components/Layout';
import HeroSplit from '../components/sections/HeroSplit';
import FAQTabs from '../components/sections/FAQTabs';
import { useToast } from '../hooks/use-toast';
import heroContact from '@/assets/hero-contact.jpg';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().max(20, 'Phone number is too long').optional().or(z.literal('')),
  company: z.string().trim().max(200, 'Company name is too long').optional().or(z.literal('')),
  service: z.string().max(200).optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = ['Environmental Impact Assessment (EIA)', 'Environmental Clearance', 'Patent Search & Analysis', 'Patent Filing & Drafting', 'ESG Reporting', 'IP Strategy Consulting', 'LPO Services', 'General Consultation'];

  const faqTabs = [{
    icon: <MessageCircle className="w-5 h-5" />,
    label: "Getting Started",
    value: "getting-started",
    faqs: [{
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by filling out our contact form, calling us directly, or using our WhatsApp button for instant messaging. We typically respond within 2-4 hours during business hours."
    }, {
      question: "What information should I prepare for the consultation?",
      answer: "Please prepare basic details about your project, timeline, and specific requirements. For environmental services, project location and scope are helpful. For IP services, invention details and business objectives are useful."
    }, {
      question: "Do you offer free initial consultations?",
      answer: "Yes, we offer a complimentary 30-minute initial consultation to understand your needs and explain how we can help. This allows both parties to assess fit before engaging in formal services."
    }]
  }, {
    icon: <Clock className="w-5 h-5" />,
    label: "Timelines",
    value: "timelines",
    faqs: [{
      question: "How long do projects typically take?",
      answer: "Project timelines vary significantly. EIA studies may take 4-8 weeks, patent searches 1-2 weeks, and comprehensive IP strategies 2-4 weeks. We provide detailed timelines during our initial consultation."
    }, {
      question: "Can you work with urgent deadlines?",
      answer: "Yes, we can accommodate urgent projects when possible. Rush projects may incur additional fees, but we strive to meet critical deadlines while maintaining quality standards."
    }]
  }, {
    icon: <CheckCircle className="w-5 h-5" />,
    label: "Process",
    value: "process",
    faqs: [{
      question: "What is your project workflow?",
      answer: "Our process follows five key stages: Initial Consultation, Strategic Planning, Research & Analysis, Implementation, and Monitoring & Support. Each stage includes client communication and progress updates."
    }, {
      question: "How do you ensure confidentiality?",
      answer: "All client information is protected under strict confidentiality agreements. Our team follows professional ethics guidelines, and we implement secure systems for document handling and communication."
    }]
  }];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach(issue => {
        const field = issue.path[0] as string;
        if (!errors[field]) errors[field] = issue.message;
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const validated = result.data;
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: validated.name,
          email: validated.email,
          phone: validated.phone || null,
          company: validated.company || null,
          service: validated.service || null,
          message: validated.message,
        });

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. Rajeev will get back to you within 24 hours."
      });

      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919195180016";
    const message = "Hi, I found your website and would like to discuss my environmental and IP consulting needs. Can we schedule a consultation?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const FieldError = ({ field }: { field: string }) => {
    if (!formErrors[field]) return null;
    return <p className="text-red-500 text-xs mt-1">{formErrors[field]}</p>;
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact EnviroAndIPR - Get Expert Environmental & IP Consulting | Free Consultation</title>
        <meta name="description" content="Contact EnviroAndIPR for expert environmental and intellectual property consulting services. Schedule a free consultation for EIA, compliance, patent services, and more." />
        <meta name="keywords" content="contact EnviroAndIPR, environmental consulting contact, IP consulting contact, free consultation, business inquiry" />
      </Helmet>

      <HeroSplit headline="Let's Discuss Your Next Project" subheadline="Ready to ensure compliance, protect your innovations, and drive sustainable growth? Get in touch with our expert team for personalized solutions." ctaPrimary="WhatsApp Consultation" ctaSecondary="Fill Contact Form" imageUrl={heroContact} imageAlt="Contact EnviroAndIPR team" onPrimaryClick={handleWhatsAppClick} onSecondaryClick={handleContactClick} />

      <section id="contact-form" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h2 mb-8 text-ink">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} maxLength={100} required className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors bg-card" placeholder="Your full name" />
                    <FieldError field="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} maxLength={255} required className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors bg-card" placeholder="your.email@example.com" />
                    <FieldError field="email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} maxLength={20} className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors bg-card" placeholder="+91 98765 43210" />
                    <FieldError field="phone" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} maxLength={200} className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors bg-card" placeholder="Your company" />
                    <FieldError field="company" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">Service of Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors bg-card">
                    <option value="">Select a service</option>
                    {services.map(service => <option key={service} value={service}>{service}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required maxLength={2000} rows={6} className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-colors resize-vertical bg-card" placeholder="Tell us about your project, challenges, or how we can help you..."></textarea>
                  <div className="flex justify-between items-center mt-1">
                    <FieldError field="message" />
                    <span className="text-xs text-muted-foreground">{formData.message.length}/2000</span>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-green hover:bg-brand-green/90 disabled:bg-brand-green/50 text-background px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 hover-lift shadow-elegant disabled:transform-none">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-h2 mb-8 text-ink">Contact Information</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green/10 rounded-lg p-3"><Phone className="w-6 h-6 text-brand-green" /></div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Phone</h3>
                    <a href="tel:+919195180016" className="text-text hover:text-brand-green transition-colors">+91-89195 18016</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green/10 rounded-lg p-3"><Mail className="w-6 h-6 text-brand-green" /></div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Email</h3>
                    <div className="space-y-1">
                      <a href="mailto:rajeev@enviroandipr.com" className="text-text hover:text-brand-green transition-colors block">rajeev@enviroandipr.com</a>
                      <a href="mailto:rajeevbte94@gmail.com" className="text-text hover:text-brand-green transition-colors block">rajeevbte94@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green/10 rounded-lg p-3"><MapPin className="w-6 h-6 text-brand-green" /></div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Location</h3>
                    <p className="text-text">Goa, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-green/10 rounded-lg p-3"><Clock className="w-6 h-6 text-brand-green" /></div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Business Hours</h3>
                    <p className="text-text">Mon - Fri: 9:00 AM - 6:00 PM IST<br />Sat: 10:00 AM - 2:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-green/5 rounded-xl p-6 border border-brand-green/20">
                <h3 className="text-lg font-semibold text-ink mb-3">Prefer WhatsApp?</h3>
                <p className="text-text mb-4">Get instant responses and quick consultations via WhatsApp. Perfect for urgent queries and initial discussions.</p>
                <button onClick={handleWhatsAppClick} className="bg-brand-green hover:bg-brand-green/90 text-background px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 hover-lift shadow-elegant">
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <div className="bg-card rounded-xl p-6 border border-muted/20 mt-6 shadow-card">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-ink mb-2">Quick Response Guarantee</h3>
                    <p className="text-text text-sm">All inquiries receive a response within 24 hours. For urgent matters, WhatsApp ensures faster communication.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQTabs tabs={faqTabs} title="Frequently Asked Questions" subtitle="Get answers to common questions about our services, process, and how we can help your business" />
    </Layout>
  );
};

export default Contact;
