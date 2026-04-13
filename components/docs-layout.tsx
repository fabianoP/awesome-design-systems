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
  Menu,
  X,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import clsx from "clsx";

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
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Desktop Sidebar */}
      <aside
        className={clsx(
          "hidden lg:flex lg:flex-col fixed left-0 top-0 h-screen border-r border-sidebar-border bg-sidebar transition-all duration-300 z-40",
          isDesktopCollapsed ? "lg:w-20" : "lg:w-72"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-sidebar-border px-4">
            {!isDesktopCollapsed ? (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew-ZGgU7oulPtwPCwnutRHuvFw6Z0bzKN.png"
                alt="RENEW"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            ) : (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/en-3OGJVqovzCnSUVDgFzTpkuygDsaZYt.jpg"
                alt="RENEW"
                width={48}
                height={48}
                className="mx-auto h-12 w-auto"
              />
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            {navigation.map((section) => (
              <div key={section.title} className="mb-6">
                {!isDesktopCollapsed && (
                  <h3 className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {section.title}
                  </h3>
                )}
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.name;
                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => setActiveItem(item.name)}
                          title={isDesktopCollapsed ? item.name : undefined}
                          className={clsx(
                            "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-primary-10",
                            isDesktopCollapsed && "lg:justify-center lg:px-2"
                          )}
                        >
                          <Icon
                            size={18}
                            className={clsx(
                              "shrink-0 transition-colors",
                              isActive
                                ? "text-primary-foreground"
                                : "text-muted-foreground group-hover:text-primary"
                            )}
                          />
                          {!isDesktopCollapsed && <span>{item.name}</span>}
                          {isActive && !isDesktopCollapsed && (
                            <ChevronRight
                              size={16}
                              className="ml-auto text-primary-foreground"
                            />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer */}
          {!isDesktopCollapsed && (
            <div className="border-t border-sidebar-border p-4">
              <div className="rounded-lg bg-accent-10 p-4">
                <p className="text-xs font-medium text-accent">Design System v1.0</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Brand identity guidelines
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={clsx(
          "fixed left-0 top-0 z-40 w-72 h-screen border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center border-b border-sidebar-border px-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew-ZGgU7oulPtwPCwnutRHuvFw6Z0bzKN.png"
              alt="RENEW"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            {navigation.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-1">
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
                          className={clsx(
                            "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-primary-10"
                          )}
                        >
                          <Icon
                            size={18}
                            className={clsx(
                              "shrink-0 transition-colors",
                              isActive
                                ? "text-primary-foreground"
                                : "text-muted-foreground group-hover:text-primary"
                            )}
                          />
                          <span>{item.name}</span>
                          {isActive && (
                            <ChevronRight
                              size={16}
                              className="ml-auto text-primary-foreground"
                            />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-sidebar-border p-4">
            <div className="rounded-lg bg-accent-10 p-4">
              <p className="text-xs font-medium text-accent">Design System v1.0</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Brand identity guidelines
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={clsx(
          "flex-1 w-full min-h-screen flex flex-col transition-all duration-300",
          isDesktopCollapsed ? "lg:ml-20" : "lg:ml-72"
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6 lg:px-12">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Toggle navigation"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <h1 className="text-lg font-medium text-foreground">
                Design System
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
                className="hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary-10 hover:text-primary lg:flex"
                aria-label={isDesktopCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isDesktopCollapsed ? <PanelLeft size={18} /> : <PanelLeftClose size={18} />}
              </button>
              <span className="rounded-full bg-accent-10 px-3 py-1 text-xs font-medium text-accent">
                v1.0
              </span>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
