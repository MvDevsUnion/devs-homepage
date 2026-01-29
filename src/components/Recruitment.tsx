import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Palette, Landmark, PenTool } from "lucide-react";
import { motion } from "motion/react";

const roles = [
  {
    icon: Scale,
    title: "Law Students",
    description:
      "Bridge the gap between developers and the legal system. Help us understand legislation, draft proposals, and protect members' rights.",
  },
  {
    icon: Palette,
    title: "Artists & Designers",
    description:
      "We believe in human creativity. We need visual identity, campaign art, and design work - made by people, not AI.",
  },
  {
    icon: Landmark,
    title: "Policy & Advocacy",
    description:
      "Shape the conversation. Help draft policy positions, engage with institutions, and turn ideas into real legislative change.",
  },
  {
    icon: PenTool,
    title: "Journalists & Writers",
    description:
      "Tell the stories that matter. Document issues, write reports, and make sure the public stays informed.",
  },
];

export function Recruitment() {
  return (
    <section id="join" className="relative py-32 bg-neutral-50">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.08 0 0) 1px, transparent 1px)",
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
            className="mb-6 border-neutral-300 text-neutral-600 bg-white/60"
          >
            Everyone Has a Role
          </Badge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-neutral-950 mb-6">
            Dev-led.{" "}
            <span className="text-brand-500">Built for everyone.</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-neutral-700 text-lg leading-relaxed">
              The union is dev-led because technology and the flow of
              information will define the future with AI and other tools.
              Technical perspective is important in guiding the movement.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              But real change requires more than code. It takes diverse skills,
              perspectives, and experiences. Everyone gets a seat at the table.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-neutral-200 hover:border-brand-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5 group">
                <CardContent className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-brand-500/10 flex items-center justify-center transition-colors">
                    <role.icon className="w-6 h-6 text-neutral-700 group-hover:text-brand-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-neutral-950 mb-1">
                      {role.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-brand-600 font-medium leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Don't see your skill listed? That's fine. If you care about privacy,
          accountability, and worker rights, you belong here.
        </motion.p>
      </div>
    </section>
  );
}
