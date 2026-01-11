import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-[#f7f7f7] py-36">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight mb-8"
          >
            Crafted with Precision.<br />
            Trusted by Design.
          </motion.h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            For over two decades, Faldu has quietly perfected the art of stainless
            steel drainage — blending engineering accuracy with architectural elegance.
          </p>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="bg-white">
        <img
          src="/images/factory-1.jpg"
          alt="Faldu Manufacturing"
          className="w-full h-[520px] object-cover"
        />
      </section>

      {/* WHAT MAKES US SPECIAL */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-medium mb-10 leading-snug">
                What Makes Faldu<br /> Truly Special
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Faldu products are designed for those who appreciate subtle
                excellence. Manufactured using AISI 304 & 316 stainless steel,
                every detail is refined to deliver long-term performance with
                timeless aesthetics.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From higher outlet flow rates to stain-free, rust-free life,
                our solutions quietly outperform industry standards — year after year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                "AISI 304 & 316 Grade Stainless Steel",
                "Rust-Free & Stain-Resistant Life",
                "Superior Flow Engineering",
                "Cockroach-Resistant Design",
                "Unmatched Surface Finish",
                "Continuous Design Innovation",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 border-b pb-4">
                  <CheckCircle2 className="w-5 h-5 text-gray-800 mt-1" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE GRID — STORYTELLING */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10">
          <img
            src="/images/factory-2.jpg"
            className="rounded-3xl object-cover h-[420px]"
            alt="Manufacturing Process"
          />
          <img
            src="/images/design-process.jpg"
            className="rounded-3xl object-cover h-[420px]"
            alt="Design & Engineering"
          />
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-20 items-center">
          <motion.div>
            <h2 className="text-4xl font-medium mb-8">
              The Right Place to Build Excellence
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Faldu’s manufacturing facility is located near Rajkot, Gujarat —
              a region globally respected for engineering discipline and
              manufacturing craftsmanship.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This strategic location enables precision sourcing, skilled manpower,
              and a culture that values quality over compromise.
            </p>
          </motion.div>

          <img
            src="/images/product-detail.jpg"
            className="rounded-3xl shadow-xl object-cover h-[420px]"
            alt="Product Detail"
          />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-36 bg-[#111] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 className="text-4xl font-light mb-10 leading-relaxed">
            “We don’t chase trends.<br />
            We engineer reliability.”
          </motion.h2>

          <p className="text-white/70 leading-relaxed text-lg">
            At Faldu, design improvement and process innovation are never stopped.
            Every product is a promise — of durability, hygiene, and quiet confidence.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
