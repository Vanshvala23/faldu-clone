import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import floor1 from "../assets/product-floor-drain.jpg";
import floor2 from "../assets/product-floor-drain.jpg";

export default function FloorDrains() {
  return (
    <>
      <Header />

      {/* HERO */}
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
            Floor Drains<br />Engineered for Reliability
          </motion.h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Premium stainless steel floor drainage systems designed to handle
            high water flow efficiently while integrating seamlessly into modern
            floors.
          </p>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">

          <motion.img
            src={floor1}
            alt="Faldu Floor Drain"
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
              Engineered for Professionals.<br />Trusted by Builders.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Faldu floor drains are crafted from high-grade AISI 304 & 316
              stainless steel to provide unmatched durability, corrosion
              resistance, and hygiene.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Each detail—from the finish to the grate design—is optimized to
              ensure maximum water flow, easy maintenance, and minimal
              visual intrusion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-medium text-center mb-16">
            Why Faldu Floor Drains
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "AISI 304 / 316 Stainless Steel",
              "High Flow Capacity & Load-Bearing",
              "Rust & Corrosion Resistant",
              "Odor & Pest Resistant Design",
              "Easy Cleaning & Maintenance",
              "Sleek, Minimalist Design",
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

      {/* APPLICATION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-medium mb-8">
              Ideal for Every Space
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Perfect for residential, commercial, and industrial floors,
              including kitchens, bathrooms, garages, terraces, and basements.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Faldu floor drains adapt seamlessly to tiles, stone, and concrete
              surfaces, maintaining both functionality and aesthetics.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Their high-flow and load-bearing design ensures durability under
              heavy use, making them ideal for both modern homes and
              commercial projects.
            </p>
          </motion.div>

          <motion.img
            src={floor2}
            alt="Floor Drain Installation"
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
            Ensure Reliable Drainage for Every Floor
          </h2>

          <p className="text-white/70 mb-12 text-lg">
            Speak with our experts to select the perfect floor drainage solution
            for your building project.
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
