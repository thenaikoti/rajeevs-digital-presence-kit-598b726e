import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQTab {
  icon: React.ReactNode;
  label: string;
  value: string;
  faqs: FAQ[];
}

interface FAQTabsProps {
  tabs: FAQTab[];
  title?: string;
  subtitle?: string;
}

const FAQTabs = ({ tabs, title, subtitle }: FAQTabsProps) => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-h2 mb-4">{title}</h2>}
            {subtitle && <p className="text-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={tabs[0]?.value} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className="flex items-center space-x-2 text-sm"
                >
                  <span className="text-brand-green">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {tab.faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${tab.value}-${index}`}
                      className="bg-white rounded-lg border-0 shadow-card px-6"
                    >
                      <AccordionTrigger className="text-left text-h3 text-base hover:text-brand-green">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-body text-sm leading-relaxed pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FAQTabs;