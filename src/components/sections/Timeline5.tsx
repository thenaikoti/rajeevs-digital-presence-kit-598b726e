interface TimelineStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Timeline5Props {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
}

const Timeline5 = ({ steps, title, subtitle }: Timeline5Props) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-h2 mb-4">{title}</h2>}
            {subtitle && <p className="text-body text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
            <div className="absolute inset-0 bg-brand-green transform scale-x-0 origin-left animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step number circle */}
                <div className="relative z-10 mx-auto w-16 h-16 bg-white border-4 border-brand-green rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-card">
                  <div className="text-brand-green group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-h3 text-base font-semibold">{step.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-green text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline5;