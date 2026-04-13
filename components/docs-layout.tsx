"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Palette,
  Type,
  Component,
  Layout,
  Image as ImageIcon,
  FileText,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react";

const navigation = [
  {
    title: "Foundations",
    items: [
      { name: "Colors", href: "#colors", icon: Palette },
      { name: "Typography", href: "#typography", icon: Type },
      { name: "Logo Usage", href: "#logo", icon: ImageIcon },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Buttons", href: "#buttons", icon: Component },
      { name: "Cards", href: "#cards", icon: Layout },
      { name: "Guidelines", href: "#guidelines", icon: FileText },
    ],
  },
];

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const [activeItem, setActiveItem] = useState("Colors");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(["Foundations", "Components"]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background">
        <div className="flex h-full items-center justify-between px-4 lg:px-6">
          {/* Left: Logo + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
              aria-label="Toggle navigation"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew-ZGgU7oulPtwPCwnutRHuvFw6Z0bzKN.png"
              alt="RENEW Design System"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Center: Search */}
          <div className="hidden flex-1 max-w-md mx-8 lg:block">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full h-10 rounded-lg border border-border bg-muted pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right: Version Badge */}
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              v1.0
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-72 border-r border-border bg-sidebar overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4">
          {navigation.map((section) => {
            const isExpanded = expandedSections.includes(section.title);
            return (
              <div key={section.title} className="mb-4">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {section.title}
                  {isExpanded ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} />
                  )}
                </button>
                {isExpanded && (
                  <ul className="mt-1 space-y-1">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeItem === item.name;
                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            onClick={() => {
                              setActiveItem(item.name);
                              setIsMobileOpen(false);
                            }}
                            className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground hover:bg-muted"
                            }`}
                          >
                            <Icon
                              size={16}
                              className={`shrink-0 ${
                                isActive
                                  ? "text-primary-foreground"
                                  : "text-muted-foreground group-hover:text-foreground"
                              }`}
                            />
                            <span>{item.name}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-sidebar p-4">
          <div className="rounded-lg bg-accent/10 p-3">
            <p className="text-xs font-medium text-accent">Design System v1.0</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Brand identity guidelines
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-16 lg:pl-72">
        <div className="min-h-[calc(100vh-4rem)]">
          {children}
        </div>
      </main>
    </div>
  );
}
