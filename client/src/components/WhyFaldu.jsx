import {Header} from "./Header"
import { motion } from "framer-motion";
import { ShieldCheck, Gem, Factory, Award, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Footer } from "./Footer";

const reasons = [
  {
    icon: Gem,
    title: "Premium Quality",
    desc: "Crafted using high-grade 304 & 316 stainless steel for unmatched durability and luxury finish.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    desc: "State-of-the-art production with precision engineering and strict quality control.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Lasting Performance",
    desc: "Designed to withstand moisture, corrosion, and heavy usage for years.",
  },
  {
    icon: Award,
    title: "Trusted by Professionals",
    desc: "Preferred choice of architects, builders, and interior designers across India.",
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    desc: "We believe in long-term relationships, not just sales.",
  },
];

export default function WhyFaldu() {
  return (
    <>
    <Header/>
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">
            Why <span className="text-primary">Faldu</span> ?
          </h1>
          <p className="text-lg text-muted-foreground">
            Because your spaces deserve precision, durability, and timeless design.
          </p>
        </motion.div>

        {/* REASONS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-lg border hover:shadow-2xl transition"
            >
              <item.icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* QUALITY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-muted rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Engineered for Excellence
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg mb-8">
            At Faldu Interior PVT. LTD, every product is a result of thoughtful design,
            precision manufacturing, and uncompromised quality standards.
          </p>

          <Button variant="hero" size="lg" onClick={() => window.location.href = '/products'}>
            Explore Our Products
          </Button>
        </motion.div>

      </div>
    </section>
    <Footer/>
    </>
  );
}
