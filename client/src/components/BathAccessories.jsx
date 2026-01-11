import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Replace these images with your actual product images
import accessoryHero from "../assets/product-accessories.jpg";
import accessoryShowcase from "../assets/product-accessories.jpg";

export default function BathAccessories() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative py-36 bg-[#f6f6f6]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent tracking-widest font-semibold text-sm block mb-6"
          >
            FALDU INTERIOR PVT. LTD.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight mb-8"
          >
            Bath Accessories<br />
            Elegant & Functional
          </motion.h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Premium stainless steel and brass bath fittings designed to combine
            elegance, durability, and seamless integration into modern bathrooms.
          </p>
        </div>
      </section>

      {/* HERO IMAGE + STORY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
          <motion.img
            src={accessoryHero}
            alt="Bath Accessories Collection"
            className="rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-medium mb-8">
              Designed for Style.<br />Built to Last.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Faldu bath accessories are crafted with premium materials and
              precision engineering to ensure long-lasting performance and
              timeless aesthetics.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every handle, shelf, hook, and fitting is designed to enhance
              usability while maintaining the clean, minimal lines of modern
              bathrooms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-medium text-center mb-16">
            Why Choose Faldu Bath Accessories
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Premium Stainless Steel & Brass",
              "Corrosion & Tarnish Resistant",
              "Seamless, Minimal Aesthetic",
              "Easy Installation & Maintenance",
              "Ergonomic & Functional Designs",
              "Compatible with Modern Bathrooms",
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION / USE CASE */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-medium mb-8">
              Perfect for Every Bathroom
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Suitable for residential, hospitality, and wellness spaces where
              every detail matters.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Faldu bath accessories complement tiles, marbles, and stones,
              maintaining a harmonious and luxurious bathroom look.
            </p>
          </motion.div>

          <motion.img
            src={accessoryShowcase}
            alt="Bath Accessories Setup"
            className="rounded-3xl shadow-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-[#111] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-light mb-10">
            Elevate Your Bathroom Experience
          </h2>

          <p className="text-white/70 mb-12 text-lg">
            Consult our experts to find the perfect bath fittings and accessories
            for your project.
          </p>

          <button className="px-12 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-105 transition">
            Enquire Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
