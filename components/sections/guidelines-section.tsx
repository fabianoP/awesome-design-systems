import { Check, X } from "lucide-react";
import Image from "next/image";

const incorrectUses = [
  "Do not rotate the logo",
  "Do not change the position of any elements",
  "Do not change the colours of the logo",
  "Do not add colour contours or shadows",
  "Do not distort the logo",
  "Do not alter the proportions between symbol and logo",
];

export function GuidelinesSection() {
  return (
    <section id="guidelines" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-light tracking-tight text-foreground">
          Brand Guidelines
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          To ensure the correct application of the logo and avoid treatment
          mistakes, it is necessary to comply with certain rules.
        </p>
      </div>

      {/* Incorrect Uses */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Incorrect Uses
        </h3>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="mb-6 text-sm text-muted-foreground">
            The logo must never be modified or altered in any way. Below are
            examples of incorrect usage that should be avoided.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {incorrectUses.map((rule) => (
              <div
                key={rule}
                className="flex items-start gap-3 rounded-xl bg-primary-10 p-4"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <X size={12} />
                </div>
                <p className="text-sm text-foreground">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photographic Background */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Usage on Photographic Backgrounds
        </h3>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative h-48 bg-gradient-to-br from-primary to-primary/80">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew_withe-vAbRVmfH19y7WpvrjpfJIqjElltdaa.png"
                  alt="RENEW white logo"
                  width={160}
                  height={53}
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 bg-accent-10 p-4">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check size={12} />
              </div>
              <p className="text-sm font-medium text-accent">Correct</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h4 className="mb-3 font-medium text-foreground">Guidelines</h4>
            <p className="text-sm text-muted-foreground">
              The application of the logo on photographic backgrounds is allowed
              on images that have a uniform area that ensures good readability.
              Always use the white version on dark backgrounds to maintain
              visibility and brand integrity.
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-accent bg-accent-10 p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Check size={16} />
            </div>
            <h4 className="font-medium text-accent">Best Practices</h4>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              Use the official color palette consistently
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              Maintain clear space around the logo
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              Use Helvetica Neue for all brand communications
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              Choose appropriate logo variant for background
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border-2 border-primary bg-primary-10 p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <X size={16} />
            </div>
            <h4 className="font-medium text-primary">Common Mistakes</h4>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              Stretching or distorting the logo
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              Using non-brand colors
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              Placing logo on busy backgrounds
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              Using logo below minimum size
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
