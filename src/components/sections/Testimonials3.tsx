import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface Testimonials3Props {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

const Testimonials3 = ({ testimonials, title, subtitle }: Testimonials3Props) => {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-h2 mb-4">{title}</h2>}
            {subtitle && <p className="text-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift shadow-card border-0 bg-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-body text-sm leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">{testimonial.name}</div>
                      <div className="text-text text-xs">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials3;