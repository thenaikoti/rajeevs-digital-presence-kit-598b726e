interface TrustBadgesProps {
  title: string;
  subtitle?: string;
}
const TrustBadges = ({
  title,
  subtitle
}: TrustBadgesProps) => {
  // Placeholder logos for demonstration
  const logos = [{
    name: "Company 1",
    width: "w-24"
  }, {
    name: "Company 2",
    width: "w-28"
  }, {
    name: "Company 3",
    width: "w-20"
  }, {
    name: "Company 4",
    width: "w-26"
  }, {
    name: "Company 5",
    width: "w-24"
  }];
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className={`${logo.width} h-12 bg-muted rounded-lg flex items-center justify-center`}
            >
              <span className="text-sm font-medium text-muted-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustBadges;