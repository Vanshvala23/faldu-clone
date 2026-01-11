import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Replace these with your actual product images
import profileHero from "../assets/product-profiles.jpg";      // Hero banner image
import profileShowcase from "../assets/product-profiles.jpg";  // Application/Use case image

export default function TechnicalProfile() {
  return (
    <>
      {/* ================== HEADER ================== */}
      <Header />

      {/* ================== HERO SECTION ================== */}
      <section className="relative py-36 bg-[#f6f6f6]">
        <div className="container mx-auto px-4 max-w-5xl text-center">

          {/* Company label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-accent tracking-widest font-semibold text-sm block mb-6"
          >
            FALDU INTERIOR PVT. LTD.
          </motion.span>

          {/* Page title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight mb-8 leading-snug"
          >
            Technical Profiles <br />
            <span className="text-accent">Precision Edge Finishing</span>
          </motion.h1>

          {/* Hero description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            High-quality technical profiles and trims designed to protect, finish,
            and enhance tiles, walls, and flooring for modern architectural projects.
          </motion.p>
        </div>
      </section>

      {/* ================== HERO IMAGE + STORY ================== */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">

          {/* Left image */}
          <motion.img
            src={profileHero}
            alt="Technical Profiles Collection"
            className="rounded-3xl shadow-xl w-full object-cover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          {/* Right story text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-medium mb-8">
              Durable & Sleek.<br />
              Engineered for Perfection.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Faldu technical profiles are crafted using premium materials
              to provide clean edges, wall and tile protection, and a
              refined finish to any space.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Designed for architects, builders, and homeowners seeking
              precision, safety, and elegance in every corner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================== FEATURES ================== */}
      <section className="py-28 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-medium text-center mb-16">
            Why Choose Faldu Technical Profiles
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Premium Stainless Steel & Aluminum",
              "Protects Wall & Tile Edges",
              "Elegant Minimal Design",
              "Customizable Lengths & Finishes",
              "Easy Installation & Maintenance",
              "Durable & Long-lasting",
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500"
              >
                <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== APPLICATION / USE CASE ================== */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-medium mb-8">
              Perfect for Tiles, Flooring & Walls
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Ideal for residential, commercial, and hospitality projects
              where clean, protected edges are critical.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Faldu technical profiles seamlessly integrate with modern interiors,
              ensuring visual continuity while protecting surfaces from damage.
            </p>
          </motion.div>

          {/* Right image */}
          <motion.img
            src={profileShowcase}
            alt="Technical Profiles Installation"
            className="rounded-3xl shadow-xl w-full object-cover"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* ================== CALL TO ACTION ================== */}
      <section className="py-36 bg-[#111] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">

          <h2 className="text-4xl font-light mb-10">
            Finish Every Edge with Precision
          </h2>

          <p className="text-white/70 mb-12 text-lg">
            Speak with our experts to select the perfect technical profiles
            for your tiles, floors, and walls.
          </p>

          <button className="px-12 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform duration-300">
            Enquire Now
          </button>
        </div>
      </section>

      {/* ================== FOOTER ================== */}
      <Footer />
    </>
  );
}
