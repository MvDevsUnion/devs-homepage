import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "motion/react";

function WavesSVG() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto animate-wave-drift"
        preserveAspectRatio="none"
      >
        <path
          fill="oklch(0.15 0 0 / 0.3)"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          fill="oklch(0.15 0 0 / 0.6)"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,224C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          fill="oklch(0.15 0 0)"
          d="M0,256L48,261.3C96,267,192,277,288,282.7C384,288,480,288,576,277.3C672,267,768,245,864,245.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Floating blobs */}
      <div className="absolute top-20 right-[15%] w-72 h-72 bg-brand-400/8 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-40 left-[10%] w-96 h-96 bg-neutral-700/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 left-[60%] w-48 h-48 bg-brand-300/8 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.98 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="mb-8 px-4 py-1.5 text-sm border-neutral-700 text-neutral-400 bg-neutral-900/80 backdrop-blur-sm"
          >
            <Shield className="w-3.5 h-3.5 mr-1.5" />
            Privacy &middot; Accountability &middot; Worker Rights
          </Badge>
        </motion.div>

        <motion.h1
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-[0.95] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <span className="text-white">Maldives</span>
          <br />
          <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 bg-clip-text text-transparent">
            Devs Union
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 leading-relaxed mb-10 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          A community-driven union protecting privacy, accountability, and
          worker rights in an increasingly digital Maldives. Open to everyone.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="bg-brand-500 hover:bg-brand-600 text-white shadow-xl shadow-brand-500/20 px-8 h-12 text-base font-semibold"
            asChild
          >
            <a href="#join">
              Join the Union
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-600 h-12 px-8 text-base"
            asChild
          >
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>

        {/* Code snippet decoration */}
        <motion.div
          className="mt-20 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
        >
          <div className="bg-neutral-950 rounded-2xl p-6 shadow-2xl shadow-neutral-950/30 border border-neutral-800 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-brand-400/80" />
              <div className="w-3 h-3 rounded-full bg-neutral-500/60" />
              <div className="w-3 h-3 rounded-full bg-neutral-400/60" />
              <span className="ml-auto text-neutral-500 text-xs font-mono">manifesto.ts</span>
            </div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
              <code>
                <span className="text-brand-400">const</span>{" "}
                <span className="text-neutral-200">union</span>{" "}
                <span className="text-neutral-500">=</span>{" "}
                <span className="text-neutral-300">{"{"}</span>
                {"\n  "}
                <span className="text-neutral-400">mission</span>
                <span className="text-neutral-500">:</span>{" "}
                <span className="text-brand-300">"protect digital rights"</span>
                <span className="text-neutral-500">,</span>
                {"\n  "}
                <span className="text-neutral-400">scope</span>
                <span className="text-neutral-500">:</span>{" "}
                <span className="text-brand-300">"Maldives"</span>
                <span className="text-neutral-500">,</span>
                {"\n  "}
                <span className="text-neutral-400">openTo</span>
                <span className="text-neutral-500">:</span>{" "}
                <span className="text-brand-300">"everyone"</span>
                <span className="text-neutral-500">,</span>
                {"\n  "}
                <span className="text-neutral-400">stance</span>
                <span className="text-neutral-500">:</span>{" "}
                <span className="text-white">"non-negotiable"</span>
                {"\n"}
                <span className="text-neutral-300">{"}"}</span>
                <span className="text-neutral-500">;</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <WavesSVG />
    </section>
  );
}
