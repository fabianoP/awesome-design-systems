import { DocsLayout } from "@/components/docs-layout";
import { ColorSection } from "@/components/sections/color-section";
import { TypographySection } from "@/components/sections/typography-section";
import { LogoSection } from "@/components/sections/logo-section";
import { ButtonsSection } from "@/components/sections/buttons-section";
import { CardsSection } from "@/components/sections/cards-section";
import { GuidelinesSection } from "@/components/sections/guidelines-section";
import Image from "next/image";

export default function Home() {
  return (
    <DocsLayout>
      {/* Hero Section */}
      <section className="border-b border-border bg-muted px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew-ZGgU7oulPtwPCwnutRHuvFw6Z0bzKN.png"
              alt="RENEW"
              width={200}
              height={67}
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-balance text-4xl font-thin tracking-tight text-foreground lg:text-6xl">
            Design System
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            A comprehensive guide to the RENEW brand identity. This
            documentation provides the foundations, components, and guidelines
            for creating consistent and professional designs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#colors"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Colors
            </a>
            <a
              href="#typography"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View Typography
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="mx-auto max-w-4xl space-y-24 px-6 py-16 lg:px-12 lg:py-24">
        <ColorSection />
        <TypographySection />
        <LogoSection />
        <ButtonsSection />
        <CardsSection />
        <GuidelinesSection />
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-muted px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew-ZGgU7oulPtwPCwnutRHuvFw6Z0bzKN.png"
            alt="RENEW"
            width={80}
            height={27}
            className="h-6 w-auto"
          />
          <p className="text-sm text-muted-foreground">
            RENEW Design System - Brand Identity Guidelines
          </p>
        </div>
      </footer>
    </DocsLayout>
  );
}
