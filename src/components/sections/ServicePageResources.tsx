import { ArrowRight, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useLeadMagnet } from '@/components/lead-magnet/LeadMagnetProvider';
import { LEAD_MAGNETS, LeadMagnetCategory } from '@/data/leadMagnets';

interface Props {
  category: LeadMagnetCategory;
  title?: string;
  subtitle?: string;
}

const ServicePageResources = ({
  category,
  title = 'Free Resources for You',
  subtitle = 'Practical guides and checklists used by businesses, startups, and compliance teams.',
}: Props) => {
  const { openLeadMagnet } = useLeadMagnet();
  const items = LEAD_MAGNETS.filter((m) => m.category === category);
  if (!items.length) return null;

  return (
    <section className="section-padding bg-muted/30" aria-labelledby={`resources-${category}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="secondary" className="mb-3">Free Resources</Badge>
          <h2 id={`resources-${category}`} className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((m) => (
            <Card key={m.id} className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4">
                  <FileDown className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground flex-1 mb-5">{m.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-colors"
                  onClick={() => openLeadMagnet(m)}
                >
                  {m.ctaLabel ?? 'Request Guide'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePageResources;
