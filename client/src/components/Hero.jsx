import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Droplets } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "../assets/hero-drain.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium stainless steel drain in luxury bathroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30"
          >
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">ISO 9001:2015 Certified</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Premium Stainless Steel{" "}
            <span className="text-accent">Drainage Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 mb-8 leading-relaxed"
          >
            India's trusted manufacturer of AISI 304 & 316 grade stainless steel 
            drains, bathroom accessories, and technical profiles. Engineered for 
            superior durability and aesthetic excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="hero" size="xl">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="border-white/50 text-white hover:bg-white/10">
              Download Catalogue
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { icon: Shield, value: "25+", label: "Years Experience" },
              { icon: Droplets, value: "100%", label: "Rust Free" },
              { icon: Award, value: "304/316", label: "Steel Grade" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}