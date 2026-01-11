import {Header} from "./Header";
import {Footer} from "./Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import shower1 from "../assets/product-shower-drain.jpg";
import shower2 from "../assets/product-channel-drain.jpg";

export default function ShowerDrains() {
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
            Shower Drains<br />Engineered to Disappear
          </motion.h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Precision-crafted stainless steel shower drainage systems designed to
            integrate seamlessly into modern bathrooms — without visual noise.
          </p>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">

          <motion.img
            src={shower1}
            alt="Faldu Shower Drain"
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
              Designed for Architects.<br />Trusted by Builders.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Faldu shower drains are engineered using AISI 304 & 316 stainless
              steel to deliver unmatched hygiene, durability, and flow performance.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every edge, every finish, every detail is refined to quietly
              outperform conventional drainage systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-medium text-center mb-16">
            Why Faldu Shower Drains
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "AISI 304 / 316 Stainless Steel",
              "High Water Flow Capacity",
              "Rust & Stain Resistant",
              "Cockroach-Resistant Design",
              "Easy Maintenance Access",
              "Minimal, Seamless Aesthetics",
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
              Perfect for Modern Bathrooms
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Ideal for residential villas, luxury apartments, hotels,
              and wellness spaces where performance and design matter equally.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Faldu shower drains adapt effortlessly to tile, marble,
              and stone finishes — maintaining visual continuity.
            </p>
          </motion.div>

          <motion.img
            src={shower2}
            alt="Shower Drain Installation"
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
            Speak with our experts to find the perfect shower drainage solution
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
