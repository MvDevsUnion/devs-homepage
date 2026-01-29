import { Separator } from "@/components/ui/separator";
import { Code2, Github, Twitter, Send } from "lucide-react";

const links = {
  union: [
    { label: "About", href: "#about" },
    { label: "What We Do", href: "#features" },
    { label: "Our Stance", href: "#stats" },
    { label: "Join", href: "#join" },
    { label: "Get Involved", href: "#contact" },
  ],
  contribute: [
    { label: "GitHub", href: "https://github.com/MvDevsUnion" },
    { label: "Report an Issue", href: "/#contact" },
    { label: "Pitch a Project", href: "/#contact" },
    { label: "Code of Conduct", href: "#" },
  ],
  focus: [
    { label: "Data Protection", href: "#" },
    { label: "Digital Rights", href: "#" },
    { label: "Worker Protection", href: "#" },
    { label: "Civic Tech", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                MvDevsUnion
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Protecting privacy, accountability, and worker rights in the
              Maldivian digital landscape. Open to everyone.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/MvDevsUnion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/WhoIsFishie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/WhoIsFishie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-neutral-300 text-sm uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-neutral-500 text-sm hover:text-neutral-200 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-neutral-800 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} MvDevsUnion. Scope: Maldives only.
          </p>
          <p className="text-neutral-700 text-xs font-mono">
            4.1755&deg; N, 73.5093&deg; E
          </p>
        </div>
      </div>
    </footer>
  );
}
