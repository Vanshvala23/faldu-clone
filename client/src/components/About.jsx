import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import falduManufactureimg from "../assets/faldu-manufacturing.jpg";
import bathroomImg from "../assets/product-floor-drain.jpg";
import design from "../assets/design.jpg";
import manufacture from "../assets/product-channel-drain.jpg";

export default function AboutUs() {
  return (
    <>
      <Header />

      {/* ================== HERO ================== */}
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

      {/* ================== FULL WIDTH IMAGE WITH CAPTION ================== */}
      <section className="bg-white">
        <div className="relative">
          <img
            src={falduManufactureimg}
            alt="Faldu Manufacturing"
            className="w-full h-[520px] object-cover rounded-xl"
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 bg-black/50 px-4 py-2 rounded-md text-center text-sm md:text-base">
            Faldu Manufacturing Facility – Precision Engineering in Action
          </p>
        </div>
      </section>

      {/* ================== WHAT MAKES US SPECIAL ================== */}
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

      {/* ================== IMAGE GRID WITH CAPTIONS ================== */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10">
          
          <div className="relative">
            <img
              src={manufacture}
              className="rounded-3xl object-cover h-[420px] w-full"
              alt="Manufacturing Process"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white/90 px-3 py-1 rounded-md text-center text-sm">
              Advanced Manufacturing Process – Ensuring Quality & Precision
            </p>
          </div>

          <div className="relative">
            <img
              src={design}
              className="rounded-3xl object-cover h-[420px] w-full"
              alt="Design & Engineering"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white/90 px-3 py-1 rounded-md text-center text-sm">
              Innovative Design & Engineering – From Concept to Reality
            </p>
          </div>
        </div>
      </section>

      {/* ================== LOCATION ================== */}
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

          <div className="relative">
            <img
              src={bathroomImg}
              className="rounded-3xl shadow-xl object-cover h-[420px] w-full"
              alt="Product Detail"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white/90 px-3 py-1 rounded-md text-center text-sm">
              Finished Floor Drain Product – Ready for Installation
            </p>
          </div>
        </div>
      </section>

      {/* ================== PHILOSOPHY ================== */}
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
