import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
interface CTAFullWidthProps {
  headline: string;
  subheadline?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  illustrationUrl?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}
const CTAFullWidth = ({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  illustrationUrl,
  onPrimaryClick,
  onSecondaryClick
}: CTAFullWidthProps) => {
  return <section className="bg-gradient-cta text-white relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-h2 text-white">{headline}</h2>
              {subheadline && <p className="text-lg text-white/90 leading-relaxed">{subheadline}</p>}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" onClick={onPrimaryClick}>
                <MessageCircle className="mr-2 h-5 w-5" />
                {ctaPrimary}
              </Button>
              <Button size="lg" variant="outline" onClick={onSecondaryClick} className="border-white hover:bg-white hover:text-brand-green text-gray-950">
                {ctaSecondary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right: Illustration */}
          {illustrationUrl && <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={illustrationUrl} alt="CTA Illustration" className="w-full h-full object-cover opacity-90" loading="lazy" />
              </div>
            </div>}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      
    </section>;
};
export default CTAFullWidth;