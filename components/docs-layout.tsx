'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Palette,
  Type,
  Component,
  Layout,
  Image as ImageIcon,
  FileText,
  Menu,
  X,
} from 'lucide-react';

const navigation = [
  {
    title: 'Foundations',
    items: [
      { name: 'Colors', href: '#colors', icon: Palette },
      { name: 'Typography', href: '#typography', icon: Type },
      { name: 'Logo Usage', href: '#logo', icon: ImageIcon },
    ],
  },
  {
    title: 'Components',
    items: [
      { name: 'Buttons', href: '#buttons', icon: Component },
      { name: 'Cards', href: '#cards', icon: Layout },
      { name: 'Guidelines', href: '#guidelines', icon: FileText },
    ],
  },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b border-border z-50">
        <div className="h-full px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renew-ZGgU7oulPtwPCwnutRHuvFw6Z0bzKN.png"
              alt="RENEW"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">v1.0</span>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 bottom-0 w-72 bg-sidebar border-r border-border overflow-y-auto transition-transform duration-300 z-40 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <nav className="p-6 space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-foreground hover:bg-primary/10 transition"
                      >
                        <Icon size={18} className="text-primary" />
                        <span className="text-sm">{item.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Overlay on mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="pt-16 lg:pl-72">
        {children}
      </main>
    </div>
  );
}
