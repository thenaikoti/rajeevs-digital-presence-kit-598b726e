import { ArrowRight, FileDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLeadMagnet } from '@/components/lead-magnet/LeadMagnetProvider';
import { LEAD_MAGNETS } from '@/data/leadMagnets';

const FEATURED_IDS = [
  'patent-filing-india-guide',
  'environmental-compliance-calendar',
  'trademark-checklist-india',
  'eia-checklist-india',
  'hazardous-waste-sme-guide',
  'lpo-services-guide',
];

const FeaturedLeadMagnets = () => {
  const { openLeadMagnet } = useLeadMagnet();
  const featured = FEATURED_IDS
    .map((id) => LEAD_MAGNETS.find((m) => m.id === id))
    .filter(Boolean) as typeof LEAD_MAGNETS;

  return (
    <section className="section-padding bg-muted/30" aria-labelledby="lead-magnets-heading">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Free Resources</Badge>
          <h2 id="lead-magnets-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Free Professional Guides & Checklists
          </h2>
          <p className="text-lg text-muted-foreground">
            Access practical environmental and intellectual property resources used by businesses,
            startups, manufacturers, consultants, and compliance teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((m) => (
            <Card
              key={m.id}
              className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/60"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                    <FileDown className="w-6 h-6" />
                  </div>
                  <Badge variant="outline">{m.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-sm flex-1 mb-5">{m.description}</p>
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

export default FeaturedLeadMagnets;
