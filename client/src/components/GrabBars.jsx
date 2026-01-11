import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Replace these with actual images
import grabBarHero from "../assets/product-grab-bar.jpg";
import grabBarSetup from "../assets/product-grab-bar.jpg";

export default function GrabBars() {
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
            Grab Bars<br />
            Safety with Style
          </motion.h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Premium stainless steel and brass grab bars designed to provide
            maximum safety without compromising on modern bathroom aesthetics.
          </p>
        </div>
      </section>

      {/* HERO IMAGE + STORY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
          <motion.img
            src={grabBarHero}
            alt="Grab Bars Collection"
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
              Designed for Safety.<br />Trusted by Professionals.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Faldu grab bars are engineered with high-quality stainless steel
              and brass for maximum strength, reliability, and longevity.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every curve, mount, and finish is crafted to provide safety,
              comfort, and elegance in bathrooms, showers, and wellness spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-medium text-center mb-16">
            Why Choose Faldu Grab Bars
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "AISI 304 / 316 Stainless Steel",
              "Supports Up to 300 kg Weight",
              "Rust & Corrosion Resistant",
              "Ergonomic Grip Design",
              "Seamless Installation",
              "Sleek, Modern Aesthetic",
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
              Safety Without Compromise
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Ideal for residential, healthcare, hotels, and wellness spaces
              where safety and style must coexist.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Faldu grab bars integrate seamlessly with tiles, marble, and
              stone finishes, providing discreet support without visual clutter.
            </p>
          </motion.div>

          <motion.img
            src={grabBarSetup}
            alt="Grab Bar Installation"
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
            Enhance Bathroom Safety Today
          </h2>

          <p className="text-white/70 mb-12 text-lg">
            Contact our experts to find the ideal grab bar solutions for your
            residential or commercial project.
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
