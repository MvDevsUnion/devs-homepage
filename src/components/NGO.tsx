import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Handshake, Globe } from "lucide-react";
import { motion } from "motion/react";

const pastWork = [
  {
    name: "Maldives Majlis Monitoring",
    description:
      "An independent initiative promoting transparency and accountability in the People's Majlis. We designed the scraping technology that powers the platform, tracking parliamentary activities, member performance, and legislative progress.",
    link: "https://maldivesmajlismonitoring.com/",
  },
];

export function NGO() {
  return (
    <section id="ngo" className="relative py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neutral-700/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />

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
            For NGOs
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-white mb-4">
            We build for{" "}
            <span className="text-brand-500">those who do good</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            If your NGO needs a website, digital tools, or technical
            infrastructure, reach out. We design and build pro bono for
            organizations working in the public interest.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-4 text-center">
              Organizations we've helped
            </p>
            {pastWork.map((project) => (
              <Card
                key={project.name}
                className="bg-neutral-900/50 border-neutral-800 hover:border-brand-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5 group"
              >
                <CardContent className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-800 group-hover:bg-brand-500/10 flex items-center justify-center transition-colors">
                    <Globe className="w-6 h-6 text-neutral-400 group-hover:text-brand-500 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-brand-300/50"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Site
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-neutral-800 bg-neutral-900/50">
            <Handshake className="w-5 h-5 text-brand-400" />
            <p className="text-neutral-300 text-sm">
              Are you an NGO?{" "}
              <a
                href="#contact"
                className="text-brand-400 font-medium hover:text-brand-300 transition-colors underline underline-offset-4 decoration-brand-400/30"
              >
                Get in touch
              </a>{" "}
              and we'll help you build your digital presence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
