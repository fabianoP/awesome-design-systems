import { ArrowRight, Download, Plus } from "lucide-react";

function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-xl";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-muted text-foreground hover:bg-muted/80",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-primary hover:bg-primary-10",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
      {icon}
    </button>
  );
}

export function ButtonsSection() {
  return (
    <section id="buttons" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-light tracking-tight text-foreground">
          Buttons
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Buttons are interactive elements that allow users to take actions.
          They use the brand colors and rounded styling consistent with the
          RENEW aesthetic.
        </p>
      </div>

      {/* Button Variants */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">Variants</h3>
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">Sizes</h3>
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">With Icons</h3>
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" icon={<ArrowRight size={16} />}>
              Continue
            </Button>
            <Button variant="accent" icon={<Download size={16} />}>
              Download
            </Button>
            <Button variant="outline" icon={<Plus size={16} />}>
              Add Item
            </Button>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-accent/20 bg-accent-10 p-6">
          <h4 className="mb-4 font-medium text-accent">Do</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              Use primary buttons for main actions
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              Maintain consistent sizing within a context
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              Use icons to enhance clarity
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border-2 border-primary/20 bg-primary-10 p-6">
          <h4 className="mb-4 font-medium text-primary">{"Don't"}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              Mix button styles inconsistently
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              Use too many primary buttons
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              Alter the border radius or colors
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
