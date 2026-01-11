import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {Header} from "./Header";
import {Footer} from "./Footer";
import { CheckCircle2 } from "lucide-react";

/* 🔗 SINGLE SOURCE OF TRUTH */
import productShowerDrain from "../assets/product-shower-drain.jpg";
import productFloorDrain from "../assets/product-floor-drain.jpg";
import productChannelDrain from "../assets/product-channel-drain.jpg";
import productAccessories from "../assets/product-accessories.jpg";
import productGrabBar from "../assets/product-grab-bar.jpg";
import productProfiles from "../assets/product-profiles.jpg";

const productMap = {
  "shower-drains": {
    title: "Shower Drains",
    subtitle: "Luxury Bathroom Drainage",
    description:
      "Precision-engineered linear and point shower drains that blend seamlessly with modern bathroom architecture.",
    features: [
      "AISI 304 / 316 Stainless Steel",
      "High water flow capacity",
      "Easy cleaning & maintenance",
      "Rust & stain resistant",
    ],
    image: productShowerDrain,
  },
  "floor-drains": {
    title: "Floor Drains",
    subtitle: "Strength Meets Hygiene",
    description:
      "Heavy-duty floor drains designed for residential and commercial spaces where performance is non-negotiable.",
    features: [
      "Anti-odor trap system",
      "Heavy-duty construction",
      "Corrosion resistant finish",
    ],
    image: productFloorDrain,
  },
  "channel-drains": {
    title: "Channel Drains",
    subtitle: "Architectural Drainage",
    description:
      "Minimalist channel drainage solutions engineered for large surfaces and premium architectural spaces.",
    features: [
      "High load bearing capacity",
      "Perfect for wet areas",
      "Elegant linear design",
    ],
    image: productChannelDrain,
  },
  "bath-accessories": {
    title: "Bath Accessories",
    subtitle: "Refined Everyday Essentials",
    description:
      "Minimal bath fittings crafted with precision finishes to elevate modern bathrooms.",
    features: [
      "Premium stainless steel",
      "Timeless design language",
      "Easy installation",
    ],
    image: productAccessories,
  },
  "grab-bars": {
    title: "Grab Bars",
    subtitle: "Safety With Style",
    description:
      "Ergonomically designed grab bars that ensure safety without compromising aesthetics.",
    features: [
      "Safety certified",
      "High load capacity",
      "Elegant matte finish",
    ],
    image: productGrabBar,
  },
  "technical-profiles": {
    title: "Technical Profiles",
    subtitle: "Perfect Edges, Always",
    description:
      "Precision edge trims and profiles for tiles, marble, stone and wood finishes.",
    features: [
      "Sharp & clean edges",
      "Durable stainless steel",
      "Architectural accuracy",
    ],
    image: productProfiles,
  },
};

export function ProductDetail() {
  const { slug } = useParams();
  const product = productMap[slug];

  if (!product) {
    return (
      <>
        <Header />
        <div className="py-40 text-center text-lg">Product not found</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold tracking-widest text-sm block mb-4">
              FALDU INTERIOR PVT. LTD.
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              {product.subtitle}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-accent text-accent-foreground font-semibold tracking-wide hover:scale-105 transition-transform">
              Enquire Now
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
