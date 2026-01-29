import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Megaphone,
  Code,
  Lightbulb,
  Bug,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Megaphone,
    title: "Lobby & Advocate",
    description:
      "We push for stronger data protection and digital rights legislation that safeguards Maldivians in the digital age.",
  },
  {
    icon: Code,
    title: "Build Civic Tools",
    description:
      "Apps and platforms that help citizens understand issues, report problems, and hold institutions accountable.",
  },
  {
    icon: Lightbulb,
    title: "Open Platforms",
    description:
      "Creating transparent, open-source platforms that encourage civic awareness and public participation.",
  },
  {
    icon: Bug,
    title: "Fix & Improve",
    description:
      "Developers contribute by fixing bugs, improving features, and building new tools that serve the community.",
  },
  {
    icon: MessageSquare,
    title: "Report & Feedback",
    description:
      "Non-developers contribute by reporting real-world issues, sharing feedback, and highlighting problems that need solving.",
  },
  {
    icon: Users,
    title: "Open to Ideas",
    description:
      "Any project can be pitched and discussed. If it aligns with our values and benefits Maldivians, it belongs here.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-700/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-300/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="mb-6 border-neutral-700 text-neutral-400 bg-neutral-900/80"
          >
            What We Do
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Advocacy through{" "}
            <span className="text-brand-500">action</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            From lobbying for data protection laws to building tools that
            empower citizens, every contribution matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              <Card className="h-full bg-neutral-900/50 border-neutral-800 hover:border-brand-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 group">
                <CardContent className="pt-2">
                  <div className="w-11 h-11 rounded-xl bg-neutral-800 group-hover:bg-brand-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-neutral-400 group-hover:text-brand-500 transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
