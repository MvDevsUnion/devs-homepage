import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

const principles = [
  {
    title: "Data Protection",
    description: "Our primary and non-negotiable goal: ensuring strong data protection for Maldivians.",
  },
  {
    title: "Civic Empowerment",
    description: "Building tools that make technology accessible and understandable for every citizen.",
  },
  {
    title: "Safe to Speak Up",
    description: "Creating a space where doing the right thing doesn't cost you your livelihood.",
  },
  {
    title: "Open Governance",
    description: "Lightweight, trust-based governance. Transparent processes and community-driven decisions.",
  },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-brand-400/10 via-brand-400/3 to-transparent"
          style={{ transform: "rotate(15deg)" }}
        />
        <div
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-neutral-400/8 via-neutral-400/2 to-transparent"
          style={{ transform: "rotate(-10deg)" }}
        />
        <div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-brand-300/8 via-brand-300/2 to-transparent"
          style={{ transform: "rotate(8deg)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="mb-6 border-neutral-700 text-neutral-400 bg-neutral-900/50"
          >
            What We Stand For
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Our stance is{" "}
            <span className="text-brand-400">
              non-negotiable
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-neutral-400 text-lg">
            Success is measured by our members. Developers who feel empowered,
            protected, and unafraid to do the right thing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              className="text-center p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-brand-500/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Separator className="bg-neutral-800 mb-20" />

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-neutral-500 text-sm font-medium mb-8 uppercase tracking-widest">
            Scope: Maldives Only
          </p>
          <p className="max-w-2xl mx-auto text-neutral-600 leading-relaxed">
            We work specifically on issues that affect Maldivians, local
            workers, and local digital systems. Our focus is narrow by design
            because solving local problems requires local knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
