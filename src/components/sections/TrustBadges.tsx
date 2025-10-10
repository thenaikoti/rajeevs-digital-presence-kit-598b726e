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
    <section className="section-padding bg-muted/30">
      <div className="container-custom text-center">
        <h2 className="text-h3 mb-3 text-ink">{title}</h2>
        {subtitle && <p className="text-text mb-12">{subtitle}</p>}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className={`${logo.width} h-12 bg-muted/50 rounded-lg`} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustBadges;