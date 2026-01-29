import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Briefcase,
  ShieldAlert,
  FileText,
  Cat,
  Tv,
  PenLine,
} from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    icon: Briefcase,
    codename: "Good-and-Naughty",
    title: "Company Watch",
    description:
      "We believe job listings must have salary listed, not left to negotiation. Users submit bad listings through a simple form, union members verify them, and the results are published publicly.",
    impact:
      "What started with salary transparency snowballed into users reporting unpaid labor and missing pension contributions. The site now works as a directory of all reported and verified malpractice by both private and public companies.",
    link: "https://github.com/MvDevsUnion/Good-and-Naughty",
    linkLabel: "View on GitHub",
  },
  {
    icon: ShieldAlert,
    codename: "have-i-been-pwned-mv",
    title: "Have I Been Pwned MV",
    description:
      "Companies were not being transparent about leaking user data. So all verified leaks are published to show people which companies leaked data and what was exposed.",
    impact:
      "More devs started contributing to the list. National Cyber Security Agency got in contact and met one of our demands: an official channel to disclose bugs through their bug bounty program.",
    link: "https://github.com/WhoIsFishie/haveibeenpwnedmv",
    linkLabel: "View on GitHub",
  },
  {
    icon: FileText,
    codename: "bro-files",
    title: "Adheeb Files",
    description:
      "When the Adheeb files were leaked as a hard-to-read PDF, devs got together to build a suite of tools making the data accessible to the general public.",
    impact:
      "These tools became invaluable for people to dig into murder cases from when Adheeb was in power and made it easy to look up corrupt officials.",
    link: "https://whoisfishie.github.io/bro-sms/?url=https%3A%2F%2Farchive.org%2Fdownload%2Fbro-sms%2Fbro-sms.json",
    linkLabel: "View Bro Suite",
  },
  {
    icon: Cat,
    codename: "olhuvali-hiya",
    title: "Olhu Hiyaa Investigation",
    description:
      "A report was published by multiple animal NGOs on the situation at a government-run cat shelter and its lack of transparency. We built a website to easily visualize the report's findings.",
    impact: "",
    link: "https://whoisfishie.github.io/olhuvali-hiya/",
    linkLabel: "View Report",
  },
  {
    icon: Tv,
    codename: "ctrlehnukureveyne",
    title: "CTRLehNukureveyne",
    description:
      "When the government tried to pass a bill to control the media, devs built a site outlining the issues with the bill, how the average person can help, and an email helper for one-click emails to the parliament committee.",
    impact: "",
    link: "https://whoisfishie.github.io/CTRLehNukureveyne/",
    linkLabel: "View Site",
  },
  {
    icon: PenLine,
    codename: "WPetition",
    title: "Citizen Petition",
    description:
      "Parliament promised an e-petition system but it relies on the hard-to-use eFaas app and has been delayed past its Nov 2025 deadline. Our devs built a site to collect signatures digitally in an easy-to-print format, like a classic paper petition.",
    impact: "",
    link: "https://github.com/MvDevsUnion/WPetition",
    linkLabel: "View on GitHub",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.98 0 0) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

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
            className="mb-6 border-neutral-700 text-neutral-400 bg-neutral-800/60"
          >
            Our Projects
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-white mb-4">
            Code that{" "}
            <span className="text-brand-500">holds power accountable</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            Real tools built by the community, solving real problems for
            Maldivians. This is what happens when devs supercharge basic issues
            using code.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.codename}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              <Card className="h-full bg-neutral-800/50 border-neutral-700 hover:border-brand-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 group flex flex-col">
                <CardContent className="space-y-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-neutral-800 group-hover:bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                      <project.icon className="w-5 h-5 text-neutral-400 group-hover:text-brand-500 transition-colors" />
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs font-mono border-neutral-600 text-neutral-500 bg-neutral-800"
                    >
                      {project.codename}
                    </Badge>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.impact && (
                    <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-700">
                      <p className="text-xs font-semibold text-brand-500 uppercase tracking-wider mb-1.5">
                        Impact
                      </p>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-brand-300/50 mt-auto"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkLabel}
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
