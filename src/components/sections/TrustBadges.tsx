interface TrustBadgesProps {
  title: string;
  subtitle?: string;
}

const TrustBadges = ({ title, subtitle }: TrustBadgesProps) => {
  // Placeholder logos for demonstration
  const logos = [
    { name: "Company 1", width: "w-24" },
    { name: "Company 2", width: "w-28" },
    { name: "Company 3", width: "w-20" },
    { name: "Company 4", width: "w-26" },
    { name: "Company 5", width: "w-24" }
  ];

  return (
    <section className="section-padding-sm bg-secondary/10">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-h3 mb-2">{title}</h3>
          {subtitle && <p className="text-body text-sm mb-8">{subtitle}</p>}
          
          <div className="flex justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className={`${logo.width} h-12 bg-ink/10 rounded-lg flex items-center justify-center`}
              >
                <span className="text-xs text-ink/40 font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;