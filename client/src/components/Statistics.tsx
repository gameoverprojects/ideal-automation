const stats = [
  {
    value: "70%",
    label: "Cost Reduction",
    description: "Average savings on call center operations",
    color: "text-chart-2",
  },
  {
    value: "90%",
    label: "Time Saved",
    description: "Reduction in manual support tasks",
    color: "text-chart-2",
  },
  {
    value: "500+",
    label: "Businesses Served",
    description: "Across multiple industries",
    color: "text-chart-2",
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable 24/7 AI availability",
    color: "text-chart-2",
  },
];

export default function Statistics() {
  return (
    <section id="results" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Proven Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI automation solutions deliver measurable impact for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} font-mono mb-3`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
