import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface HeroSplitProps {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  imageUrl: string;
  imageAlt: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroSplit = ({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  imageUrl,
  imageAlt,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSplitProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-h1 max-w-xl">{headline}</h1>
              <p className="text-body text-lg max-w-2xl">{subheadline}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-green hover:bg-brand-green/90 text-white"
                onClick={onPrimaryClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {ctaPrimary}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                onClick={onSecondaryClick}
              >
                {ctaSecondary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-green/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;