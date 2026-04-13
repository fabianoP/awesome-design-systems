const typeScale = [
  {
    name: "Display",
    weight: "Ultra Light Ext",
    size: "72px",
    lineHeight: "1.1",
    sample: "Aa",
  },
  {
    name: "Heading 1",
    weight: "Thin",
    size: "48px",
    lineHeight: "1.2",
    sample: "Aa",
  },
  {
    name: "Heading 2",
    weight: "Light",
    size: "36px",
    lineHeight: "1.25",
    sample: "Aa",
  },
  {
    name: "Heading 3",
    weight: "Medium",
    size: "24px",
    lineHeight: "1.3",
    sample: "Aa",
  },
  {
    name: "Body",
    weight: "Medium",
    size: "16px",
    lineHeight: "1.5",
    sample: "Aa",
  },
  {
    name: "Caption",
    weight: "Bold",
    size: "14px",
    lineHeight: "1.4",
    sample: "Aa",
  },
];

const fontWeights = [
  { name: "Ultra Light Ext", weight: 100, className: "font-thin" },
  { name: "Thin", weight: 200, className: "font-extralight" },
  { name: "Light Regular", weight: 300, className: "font-light" },
  { name: "Medium", weight: 500, className: "font-medium" },
  { name: "Bold", weight: 700, className: "font-bold" },
  { name: "Black", weight: 900, className: "font-black" },
];

export function TypographySection() {
  return (
    <section id="typography" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-light tracking-tight text-foreground">
          Typography
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The typography of the RENEW brand uses Helvetica Neue in various
          weights. The styles and weights are established according to layout
          necessity.
        </p>
      </div>

      {/* Font Family */}
      <div className="mb-12 rounded-2xl border border-border bg-card p-8">
        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Primary Typeface
        </h3>
        <p className="text-6xl font-thin tracking-tight text-foreground">
          Helvetica Neue
        </p>
        <p className="mt-4 font-mono text-sm text-muted-foreground">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p className="font-mono text-sm text-muted-foreground">
          abcdefghijklmnopqrstuvwxyz
        </p>
        <p className="font-mono text-sm text-muted-foreground">0123456789</p>
      </div>

      {/* Font Weights */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Font Weights
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fontWeights.map((font) => (
            <div
              key={font.name}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary-20"
            >
              <p className={`text-3xl ${font.className} text-foreground`}>Ag</p>
              <p className="mt-3 text-sm font-medium text-foreground">
                {font.name}
              </p>
              <p className="text-sm text-muted-foreground">
                Weight: {font.weight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Type Scale */}
      <div>
        <h3 className="mb-6 text-xl font-medium text-foreground">Type Scale</h3>
        <div className="space-y-4">
          {typeScale.map((type) => (
            <div
              key={type.name}
              className="flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary-20"
            >
              <div className="flex items-center gap-6">
                <span
                  className="font-thin text-primary"
                  style={{ fontSize: type.size, lineHeight: type.lineHeight }}
                >
                  {type.sample}
                </span>
                <div>
                  <p className="font-medium text-foreground">{type.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Helvetica Neue {type.weight}
                  </p>
                </div>
              </div>
              <div className="hidden text-right sm:block">
                <p className="font-mono text-sm text-foreground">{type.size}</p>
                <p className="font-mono text-sm text-muted-foreground">
                  Line height: {type.lineHeight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bauhaus Note */}
      <div className="mt-12 rounded-2xl bg-accent-10 p-6">
        <h4 className="mb-2 font-medium text-accent">Secondary Typeface</h4>
        <p className="text-sm text-muted-foreground">
          For product variants like LEAF and FLUX, use{" "}
          <span className="font-bold">Bauhaus Md BT</span> for the product name
          suffix.
        </p>
      </div>
    </section>
  );
}
