import { ShieldCheck } from 'lucide-react';

interface GovRegisteredBadgeProps {
  variant?: 'full' | 'compact' | 'footer';
  className?: string;
}

const GovRegisteredBadge = ({ variant = 'full', className = '' }: GovRegisteredBadgeProps) => {
  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 ${className}`}>
        <ShieldCheck className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
        <span className="text-xs text-gray-300">
          Registered Micro Enterprise · Government of India
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 ${className}`}>
        <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" aria-hidden="true" />
        <span className="text-xs font-medium text-ink">
          GOI Registered Micro Enterprise
        </span>
      </div>
    );
  }

  return (
    <section className={`section-padding-sm bg-background ${className}`}>
      <div className="container-custom">
        <div className="mx-auto max-w-2xl flex items-center gap-4 p-5 rounded-2xl bg-card border border-brand-green/20 shadow-card">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-brand-green" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-ink">Government Registered</p>
            <p className="text-sm text-text">
              Registered Micro Enterprise under Government of India (GOI)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovRegisteredBadge;
