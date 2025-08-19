interface Stat {
  icon: React.ReactNode;
  number: string;
  label: string;
}

interface StatsStripProps {
  stats: Stat[];
}

const StatsStrip = ({ stats }: StatsStripProps) => {
  return (
    <section className="bg-secondary/30">
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="text-brand-green group-hover:text-brand-green-glow transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-h2 font-bold text-ink mb-1">{stat.number}</div>
              <div className="text-body text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;