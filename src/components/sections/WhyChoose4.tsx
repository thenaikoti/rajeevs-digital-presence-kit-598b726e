import { Card, CardContent } from "@/components/ui/card";

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChoose4Props {
  items: WhyChooseItem[];
  title?: string;
  subtitle?: string;
}

const WhyChoose4 = ({ items, title, subtitle }: WhyChoose4Props) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-h2 mb-4">{title}</h2>}
            {subtitle && <p className="text-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Card key={index} className="group hover-lift shadow-card border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="text-brand-green group-hover:text-brand-green-glow transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-h3 text-lg">{item.title}</h3>
                  
                  {/* Description */}
                  <p className="text-body text-sm leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose4;