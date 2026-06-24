import { ArrowRight, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLeadMagnet } from './LeadMagnetProvider';
import { getLeadMagnet } from '@/data/leadMagnets';

interface Props {
  magnetId: string;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  variant?: 'inline' | 'banner';
}

/** Inline service-page CTA block that opens the global Lead Magnet modal. */
const LeadMagnetCTA = ({ magnetId, headline, description, buttonLabel, variant = 'inline' }: Props) => {
  const { openLeadMagnet } = useLeadMagnet();
  const magnet = getLeadMagnet(magnetId);
  if (!magnet) return null;

  const title = headline ?? magnet.title;
  const desc = description ?? magnet.description;
  const label = buttonLabel ?? magnet.ctaLabel ?? 'Request Guide';

  if (variant === 'banner') {
    return (
      <section className="section-padding-sm">
        <div className="container-custom">
          <div className="rounded-2xl bg-gradient-to-br from-brand-green/10 via-background to-brand-green/5 border border-brand-green/20 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center">
              <FileDown className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green/90 text-white"
              onClick={() => openLeadMagnet(magnet)}
            >
              {label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-6 my-6 flex flex-col md:flex-row md:items-center gap-4">
      <FileDown className="w-8 h-8 text-brand-green shrink-0" />
      <div className="flex-1">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <Button
        className="bg-brand-green hover:bg-brand-green/90 text-white"
        onClick={() => openLeadMagnet(magnet)}
      >
        {label}
      </Button>
    </div>
  );
};

export default LeadMagnetCTA;
