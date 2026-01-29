import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Eye, Scale } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: ShieldCheck,
    title: "Privacy",
    description:
      "Data protection and user safety come first. We advocate for stronger safeguards around how Maldivians' personal data is collected, stored, and used.",
  },
  {
    icon: Eye,
    title: "Accountability",
    description:
      "Transparency from both institutions and technology builders. Those who build and deploy digital systems must be held to a higher standard.",
  },
  {
    icon: Scale,
    title: "Worker Rights",
    description:
      "Developers should feel empowered and unafraid to speak up without the fear of losing their jobs for doing the right thing.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 bg-neutral-50">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.08 0 0) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-neutral-300 text-neutral-600 bg-white/60"
            >
              Why We Exist
            </Badge>
            <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-neutral-950 mb-6 leading-[1.1]">
              Technology moves fast.
              <br />
              <span className="text-brand-500">Legislation doesn't.</span>
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed mb-6">
              Technology is advancing faster than legislation can keep up. This
              gap creates real risks for privacy, job security, and public
              understanding.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We believe developers have a responsibility to help make
              technology safer, clearer, and more accessible for non-technical
              users. MvDevsUnion exists to bridge that gap by advocating for
              responsible technology use and empowering people to speak up
              without fear.
            </p>
            <p className="text-brand-600 font-medium leading-relaxed">
              You don't need to be a developer to join. Anyone who cares about
              worker rights, privacy, and responsible technology can contribute
              their skills, experience, or perspective.
            </p>
          </motion.div>

          <div className="space-y-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-neutral-200 hover:border-brand-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5 group">
                  <CardContent className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-brand-500/10 flex items-center justify-center transition-colors">
                      <value.icon className="w-6 h-6 text-neutral-700 group-hover:text-brand-500 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-neutral-950 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
