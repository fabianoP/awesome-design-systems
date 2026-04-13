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

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Colors");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground lg:hidden"
        aria-label="Toggle navigation"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed left-0 top-0 z-40 h-screen w-72 border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center border-b border-sidebar-border px-6">
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
                              "transition-colors",
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
    </>
  );
}
