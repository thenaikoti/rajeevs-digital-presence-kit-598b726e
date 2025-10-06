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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className={`${logo.width} h-12 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs`}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustBadges;