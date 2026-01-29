import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neutral-700/15 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="mb-6 border-neutral-700 text-neutral-400 bg-neutral-900/60"
          >
            Get Involved
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-white mb-4">
            If you care, you{" "}
            <span className="text-brand-500">belong here</span>
          </h2>
          <p className="max-w-xl mx-auto text-neutral-400 text-lg mb-12">
            Developers can contribute code. Non-developers can report issues,
            share feedback, and highlight real-world problems. Every contribution
            matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Card className="bg-neutral-900/50 border-neutral-800 hover:border-brand-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5 group h-full">
              <CardContent className="text-center py-2">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 group-hover:bg-brand-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all">
                  <Github className="w-7 h-7 text-neutral-400 group-hover:text-brand-500 transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  Contribute on GitHub
                </h3>
                <p className="text-neutral-500 text-sm mb-5">
                  Browse projects, fix bugs, pitch ideas, or start something new.
                </p>
                <Button
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white"
                  asChild
                >
                  <a href="https://github.com/MvDevsUnion" target="_blank" rel="noopener noreferrer">
                    View Projects
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="bg-neutral-900/50 border-neutral-800 hover:border-brand-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5 group h-full">
              <CardContent className="text-center py-2">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 group-hover:bg-brand-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all">
                  <Send className="w-7 h-7 text-neutral-400 group-hover:text-brand-500 transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  Contact Our Rep
                </h3>
                <p className="text-neutral-500 text-sm mb-5">
                  Reach Fishie on X or Telegram for questions, partnerships, or to get involved.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-brand-300/50"
                    asChild
                  >
                    <a href="https://x.com/WhoIsFishie" target="_blank" rel="noopener noreferrer">
                      Twitter
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-brand-300/50"
                    asChild
                  >
                    <a href="https://t.me/WhoIsFishie" target="_blank" rel="noopener noreferrer">
                      Telegram
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
