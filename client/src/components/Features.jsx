import { motion } from "framer-motion";
import { Shield, Droplets, Bug, Gauge, Factory, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AISI 304 & 316 Grade",
    description: "Premium stainless steel grades ensuring maximum durability and corrosion resistance",
  },
  {
    icon: Droplets,
    title: "100% Rust-Free",
    description: "Advanced manufacturing process guarantees lifetime rust-free performance",
  },
  {
    icon: Bug,
    title: "Cockroach Resistant",
    description: "Innovative design prevents pest entry, maintaining bathroom hygiene",
  },
  {
    icon: Gauge,
    title: "Higher Flow Rate",
    description: "Engineered outlets for superior drainage capacity and quick water evacuation",
  },
  {
    icon: Factory,
    title: "100% In-House",
    description: "Complete quality control with fully integrated manufacturing in Rajkot",
  },
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Certified quality management system ensuring consistent excellence",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section id="why-faldu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Makes Faldu Special?
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by architects, designers, engineers, builders, and homeowners 
            nationwide for our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}