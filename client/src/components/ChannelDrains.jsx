import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import channel1 from "../assets/product-channel-drain.jpg";
import channel2 from "../assets/product-channel-drain.jpg";

export default function ChannelDrains() {
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
            Channel Drains<br />Engineered for Seamless Flow
          </motion.h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Premium linear drainage systems designed to manage large volumes of
            water efficiently while maintaining a sleek, unobtrusive design.
          </p>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">

          <motion.img
            src={channel1}
            alt="Faldu Channel Drain"
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
              Faldu channel drains are crafted from AISI 304 & 316 stainless
              steel, providing superior durability, corrosion resistance, and
              high-flow efficiency.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Each unit is engineered for easy installation and minimal
              maintenance, integrating seamlessly with tiles, stone, or concrete
              floors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-medium text-center mb-16">
            Why Faldu Channel Drains
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "AISI 304 / 316 Stainless Steel",
              "High Flow Capacity for Heavy Use",
              "Rust & Corrosion Resistant",
              "Slip-Resistant Grate Design",
              "Easy Cleaning & Maintenance",
              "Sleek Linear Design for Visual Continuity",
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
              Ideal for Commercial & Residential Spaces
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Perfect for terraces, balconies, kitchens, parking areas, and
              outdoor walkways where high water flow needs to be managed efficiently.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Faldu channel drains integrate seamlessly with floor finishes like
              tiles, marble, or concrete, preserving clean lines and modern
              aesthetics.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Their load-bearing capacity and corrosion-resistant design make
              them ideal for heavy-duty use in both commercial and residential
              projects.
            </p>
          </motion.div>

          <motion.img
            src={channel2}
            alt="Channel Drain Installation"
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
            Manage Water Efficiently with Faldu Channel Drains
          </h2>

          <p className="text-white/70 mb-12 text-lg">
            Speak with our experts to select the ideal linear drainage solution
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
