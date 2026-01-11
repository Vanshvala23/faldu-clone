import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  "25+ Years of Manufacturing Excellence",
  "100% In-House Production Facility",
  "ISO 9001:2015 Certified Operations",
  "Export to 15+ Countries Worldwide",
  "Trusted by 1000+ Architects & Designers",
  "Continuous Design Innovation",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-surface-dark text-surface-dark-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Faldu
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              India's Premier Drainage Solutions Manufacturer
            </h2>
            <p className="text-surface-dark-foreground/80 text-lg mb-8 leading-relaxed">
              Faldu ranks among India's top drains manufacturers, delivering premium 
              stainless steel drainage solutions that set industry benchmarks for 
              quality and innovation. Our fully integrated Rajkot manufacturing 
              facility ensures complete quality control with 100% in-house operations.
            </p>

            {/* Milestones */}
            <div className="grid sm:grid-cols-2 gap-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-surface-dark-foreground/90">{milestone}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "25+", label: "Years of Excellence", accent: true },
              { value: "1000+", label: "Happy Clients", accent: false },
              { value: "15+", label: "Export Countries", accent: false },
              { value: "100%", label: "Quality Assured", accent: true },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-2xl ${
                  stat.accent 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-steel-light/10 border border-steel/20"
                }`}
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className={`text-sm ${stat.accent ? "text-accent-foreground/80" : "text-surface-dark-foreground/60"}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}