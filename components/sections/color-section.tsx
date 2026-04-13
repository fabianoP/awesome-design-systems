const primaryShades = [
  { name: "Primary 100", hex: "#1A4B6E", opacity: "100%" },
  { name: "Primary 90", hex: "#31607F", opacity: "90%" },
  { name: "Primary 80", hex: "#487590", opacity: "80%" },
  { name: "Primary 70", hex: "#5F8AA1", opacity: "70%" },
  { name: "Primary 60", hex: "#769FB2", opacity: "60%" },
  { name: "Primary 50", hex: "#8CB4C3", opacity: "50%" },
];

const accentShades = [
  { name: "Accent 100", hex: "#00835D", opacity: "100%" },
  { name: "Accent 90", hex: "#1A916D", opacity: "90%" },
  { name: "Accent 80", hex: "#339F7D", opacity: "80%" },
  { name: "Accent 70", hex: "#4DAD8D", opacity: "70%" },
  { name: "Accent 60", hex: "#66BB9D", opacity: "60%" },
  { name: "Accent 50", hex: "#80C9AE", opacity: "50%" },
];

function ColorSwatch({
  name,
  hex,
  pantone,
  cmyk,
  rgb,
  large = false,
}: {
  name: string;
  hex: string;
  pantone?: string;
  cmyk?: string;
  rgb?: string;
  large?: boolean;
}) {
  return (
    <div className="group">
      <div
        className={`rounded-2xl transition-transform duration-300 hover:scale-105 ${large ? "h-40" : "h-24"}`}
        style={{ backgroundColor: hex }}
      />
      <div className="mt-3 space-y-1">
        <p className="font-medium text-foreground">{name}</p>
        <p className="font-mono text-sm text-muted-foreground">{hex}</p>
        {pantone && (
          <p className="text-xs text-muted-foreground">Pantone {pantone}</p>
        )}
        {cmyk && <p className="text-xs text-muted-foreground">CMYK {cmyk}</p>}
        {rgb && <p className="text-xs text-muted-foreground">RGB {rgb}</p>}
      </div>
    </div>
  );
}

function ColorScale({
  title,
  shades,
  baseColor,
}: {
  title: string;
  shades: { name: string; hex: string; opacity: string }[];
  baseColor: string;
}) {
  return (
    <div>
      <h4 className="mb-4 text-lg font-medium text-foreground">{title}</h4>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {shades.map((shade) => (
          <div key={shade.name} className="group">
            <div
              className="h-16 rounded-xl transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: shade.hex }}
            />
            <p className="mt-2 text-xs font-medium text-foreground">
              {shade.opacity}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {shade.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ColorSection() {
  return (
    <section id="colors" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-light tracking-tight text-foreground">
          Color Foundations
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The RENEW color palette combines deep navy blue with vibrant forest
          green to create a professional and sophisticated brand identity.
        </p>
      </div>

      {/* Primary Colors */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Brand Colors
        </h3>
        <div className="grid gap-8 sm:grid-cols-2">
          <ColorSwatch
            name="Navy Blue"
            hex="#1A4B6E"
            pantone="3597C"
            cmyk="C100 M70 Y35 K20"
            rgb="R026 G075 B110"
            large
          />
          <ColorSwatch
            name="Forest Green"
            hex="#00835D"
            pantone="7733C"
            cmyk="C100 M25 Y80 K00"
            rgb="R000 G131 B093"
            large
          />
        </div>
      </div>

      {/* Color Scales */}
      <div className="space-y-10">
        <ColorScale
          title="Navy Blue Scale"
          shades={primaryShades}
          baseColor="#1A4B6E"
        />
        <ColorScale
          title="Forest Green Scale"
          shades={accentShades}
          baseColor="#00835D"
        />
      </div>

      {/* Usage Guidelines */}
      <div className="mt-12 rounded-2xl bg-muted p-6">
        <h4 className="mb-4 font-medium text-foreground">Usage Guidelines</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            Use the primary colors for maximum brand recognition
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
            The institutional colors should be used in all paper and digital media
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            Never alter the colors or add gradients to the brand elements
          </li>
        </ul>
      </div>
    </section>
  );
}
