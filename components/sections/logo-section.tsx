import Image from "next/image";

const logoVariants = [
  {
    name: "Primary Logo",
    description: "Full color logo for light backgrounds",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew-ZGgU7oulPtwPCwnutRHuvFw6Z0bzKN.png",
    bg: "bg-white",
  },
  {
    name: "Dark Background",
    description: "White version for dark backgrounds",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew_withe-vAbRVmfH19y7WpvrjpfJIqjElltdaa.png",
    bg: "bg-primary",
  },
  {
    name: "Monochrome",
    description: "Black version for special applications",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew_black-SxoNb2yIc4mhDgCNYkh58YhT74y7XR.png",
    bg: "bg-white",
  },
  {
    name: "Pictogram",
    description: "Symbolic mark for compact spaces",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/en-3OGJVqovzCnSUVDgFzTpkuygDsaZYt.jpg",
    bg: "bg-white",
  },
];

const productVariants = [
  {
    name: "RENEW LEAF",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew_leaf-CRB18yMBpR4IlcG5ABMrBriDsHys9m.png",
  },
  {
    name: "RENEW FLUX",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew_flux-IeRAQUsrH95UdAVSyGDhtVpueieATl.png",
  },
  {
    name: "RENEW x Arden Energy",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew_arden-C7fBlnuD7gZMHSNaX9AS7YL4vslXs8.png",
  },
];

export function LogoSection() {
  return (
    <section id="logo" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-light tracking-tight text-foreground">
          Logo Usage
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The RENEW logo represents our brand identity. Proper usage ensures
          consistent recognition across all applications.
        </p>
      </div>

      {/* Logo Variants */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Logo Variants
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {logoVariants.map((variant) => (
            <div
              key={variant.name}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <div
                className={`flex h-40 items-center justify-center ${variant.bg}`}
              >
                <Image
                  src={variant.src}
                  alt={variant.name}
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-card p-4">
                <p className="font-medium text-foreground">{variant.name}</p>
                <p className="text-sm text-muted-foreground">
                  {variant.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Space */}
      <div className="mb-12 rounded-2xl border border-border bg-card p-8">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Clear Space
        </h3>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
          <div className="relative flex h-48 w-full items-center justify-center rounded-xl bg-muted lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-8 border-2 border-dashed border-primary/30" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew-ZGgU7oulPtwPCwnutRHuvFw6Z0bzKN.png"
                alt="RENEW with clear space"
                width={160}
                height={53}
                className="h-10 w-auto"
              />
              <div className="absolute -right-8 top-1/2 h-px w-8 bg-accent" />
              <div className="absolute -left-8 top-1/2 h-px w-8 bg-accent" />
              <div className="absolute -top-8 left-1/2 h-8 w-px bg-accent" />
              <div className="absolute -bottom-8 left-1/2 h-8 w-px bg-accent" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-sm text-muted-foreground">
              The minimum empty area around the logo equals half of the total
              height of the logo. This ensures optimal readability and should be
              considered as an integral part of the logo itself.
            </p>
          </div>
        </div>
      </div>

      {/* Product Variants */}
      <div className="mb-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          Product Variants
        </h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {productVariants.map((variant) => (
            <div
              key={variant.name}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <div className="flex h-32 items-center justify-center bg-white p-4">
                <Image
                  src={variant.src}
                  alt={variant.name}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="bg-card p-4">
                <p className="text-sm font-medium text-foreground">
                  {variant.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimum Size */}
      <div className="rounded-2xl bg-muted p-6">
        <h4 className="mb-4 font-medium text-foreground">Minimum Size</h4>
        <p className="text-sm text-muted-foreground">
          For printed media, the minimum logo width should be{" "}
          <span className="font-bold text-primary">30mm</span>. This ensures the
          logo remains legible and maintains its integrity across all
          applications.
        </p>
      </div>
    </section>
  );
}
