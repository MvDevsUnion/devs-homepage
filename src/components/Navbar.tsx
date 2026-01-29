import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#features" },
  { label: "Projects", href: "#projects" },
  { label: "Our Stance", href: "#stats" },
  { label: "Join", href: "#join" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200 shadow-lg shadow-neutral-950/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-brand-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-neutral-950">
              MDU
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors rounded-lg hover:bg-neutral-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
              asChild
            >
              <a href="https://github.com/MvDevsUnion" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-brand-500 hover:bg-brand-600 text-white shadow-md shadow-brand-500/25"
              asChild
            >
              <a href="#join">Join the Union</a>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-950 rounded-lg hover:bg-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex gap-3">
              <Button variant="outline" size="sm" className="flex-1 border-neutral-300" asChild>
                <a href="https://github.com/MvDevsUnion" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button size="sm" className="flex-1 bg-brand-500 text-white" asChild>
                <a href="#join">Join the Union</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
