import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: string;
  bulletPoints?: string[];
}

interface IconCardGridProps {
  services: ServiceCard[];
  columns?: 2 | 3 | 4;
  title?: string;
  subtitle?: string;
}

const IconCardGrid = ({ services, columns = 3, title, subtitle }: IconCardGridProps) => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-h2 mb-4">{title}</h2>}
            {subtitle && <p className="text-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className={`grid gap-6 ${gridCols[columns]}`}>
      {services.map((service, index) => {
        const isExpanded = expandedCards.has(index);
        
        return (
          <Card 
            key={index} 
            className="group hover-lift shadow-card border-0 bg-white"
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Icon */}
                <div className="text-brand-green group-hover:text-brand-green-glow transition-colors duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-h3 text-lg">{service.title}</h3>
                
                {/* Description */}
                <p className="text-body text-sm leading-relaxed">{service.description}</p>
                
                {/* Bullet Points */}
                {service.bulletPoints && (
                  <div className="pt-2">
                    <ul className="space-y-2">
                      {service.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2 text-small text-gray-600">
                          <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Expandable Details */}
                {service.details && (
                  <>
                    {isExpanded && (
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-small text-gray-600 leading-relaxed">
                          {service.details}
                        </p>
                      </div>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCard(index)}
                      className="w-full text-brand-green hover:text-brand-green-glow hover:bg-brand-green/5 p-2"
                    >
                      {isExpanded ? (
                        <>
                          Show Less <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Learn More <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
        </div>
      </div>
    </section>
  );
};

export default IconCardGrid;