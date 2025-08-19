import { Card, CardContent } from "@/components/ui/card";

interface Industry {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

interface IndustriesGridProps {
  industries: Industry[];
  title?: string;
  subtitle?: string;
}

const IndustriesGrid = ({ industries, title, subtitle }: IndustriesGridProps) => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-h2 mb-4">{title}</h2>}
            {subtitle && <p className="text-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover-lift shadow-card border-0 bg-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon and optional thumbnail */}
                  <div className="flex items-center space-x-3">
                    <div className="text-brand-green group-hover:text-brand-green-glow transition-colors duration-300">
                      {industry.icon}
                    </div>
                    {industry.image && (
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <img 
                          src={industry.image} 
                          alt={industry.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-h3 text-lg">{industry.title}</h3>
                  
                  {/* Description */}
                  <p className="text-body text-sm leading-relaxed">{industry.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;