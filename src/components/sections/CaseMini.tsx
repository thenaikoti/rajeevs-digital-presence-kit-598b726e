import { Card, CardContent } from "@/components/ui/card";

interface CaseStudy {
  challenge: string;
  approach: string;
  result: string;
  image?: string;
  title: string;
}

interface CaseMiniProps {
  cases: CaseStudy[];
  title?: string;
  subtitle?: string;
}

const CaseMini = ({ cases, title, subtitle }: CaseMiniProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-h2 mb-4">{title}</h2>}
            {subtitle && <p className="text-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="hover-lift shadow-card border-0 bg-white">
              <CardContent className="p-0">
                {/* Image */}
                {caseStudy.image && (
                  <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-h3 text-lg text-center">{caseStudy.title}</h3>
                  
                  {/* Challenge */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-red-600">Challenge</div>
                    <p className="text-body text-sm leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  
                  {/* Approach */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-blue-600">Approach</div>
                    <p className="text-body text-sm leading-relaxed">{caseStudy.approach}</p>
                  </div>
                  
                  {/* Result */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-brand-green">Result</div>
                    <p className="text-body text-sm leading-relaxed">{caseStudy.result}</p>
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

export default CaseMini;