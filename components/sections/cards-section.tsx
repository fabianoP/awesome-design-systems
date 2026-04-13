import { ArrowUpRight, Leaf, Zap, Sun } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainable Design",
    description:
      "Built with sustainability at its core, reducing environmental impact.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized for speed and efficiency across all applications.",
  },
  {
    icon: Sun,
    title: "Clean Energy",
    description:
      "Powered by renewable energy sources for a greener future.",
  },
];

export function CardsSection() {
  return (
    <section id="cards" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-light tracking-tight text-foreground">
          Cards
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Cards are versatile containers for grouping related content and
          actions. They feature rounded corners and subtle borders consistent
          with the RENEW brand.
        </p>
      </div>

      {/* Basic Card */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">Basic Card</h3>
        <div className="max-w-md rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary-20 hover:shadow-lg">
          <h4 className="text-lg font-medium text-foreground">Card Title</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            This is a basic card component with a title and description. It
            uses the brand&apos;s rounded styling and subtle hover effects.
          </p>
          <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80">
            Learn more
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Feature Cards
        </h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-medium text-foreground">
                  {feature.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Highlighted Card */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Highlighted Card
        </h3>
        <div className="max-w-lg overflow-hidden rounded-2xl border-2 border-primary">
          <div className="bg-primary px-6 py-3">
            <span className="text-sm font-medium text-primary-foreground">
              Featured
            </span>
          </div>
          <div className="bg-card p-6">
            <h4 className="text-xl font-medium text-foreground">
              Premium Feature
            </h4>
            <p className="mt-2 text-muted-foreground">
              Highlighted cards draw attention to important content using the
              primary brand color as an accent.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Get Started
              </button>
              <button className="rounded-xl px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div>
        <h3 className="mb-6 text-xl font-medium text-foreground">Stat Cards</h3>
        <div className="grid gap-6 sm:grid-cols-4">
          {[
            { label: "Total Users", value: "12.5K" },
            { label: "Revenue", value: "$48.2M" },
            { label: "Growth", value: "+24%" },
            { label: "Active", value: "98.5%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <p className="text-3xl font-light text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
