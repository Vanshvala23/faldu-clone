import {Header} from "./Header";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import productShowerDrain from "../assets/product-shower-drain.jpg";
import productFloorDrain from "../assets/product-floor-drain.jpg";
import productChannelDrain from "../assets/product-channel-drain.jpg";
import productAccessories from "../assets/product-accessories.jpg";
import productGrabBar from "../assets/product-grab-bar.jpg";
import productProfiles from "../assets/product-profiles.jpg";

const products = [
  {
    id: "shower-drains",
    title: "Shower Drains",
    description: "Linear & point drains for modern bathrooms",
    image: productShowerDrain,
    featured: true,
  },
  {
    id: "floor-drains",
    title: "Floor Drains",
    description: "High-flow stainless steel drainage systems",
    image: productFloorDrain,
  },
  {
    id: "channel-drains",
    title: "Channel Drains",
    description: "Architectural drainage for premium spaces",
    image: productChannelDrain,
  },
  {
    id: "bath-accessories",
    title: "Bath Accessories",
    description: "Minimal, elegant bathroom fittings",
    image: productAccessories,
    featured: true,
  },
  {
    id: "grab-bars",
    title: "Grab Bars",
    description: "Safety with uncompromised aesthetics",
    image: productGrabBar,
  },
  {
    id: "technical-profiles",
    title: "Technical Profiles",
    description: "Perfect edge trims & profiles",
    image: productProfiles,
  },
];

export function Products() {
  return (
    <>
      {/* NAVBAR */}
      <Header />

      <section className="relative py-32 bg-gradient-to-b from-secondary via-background to-background">
        <div className="container mx-auto px-4">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto mb-24"
          >
            <span className="inline-block text-accent font-semibold tracking-[0.3em] text-sm mb-4">
              FALDU INTERIOR PVT. LTD.
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Where Design Meets <br />
              <span className="text-accent">Precision Engineering</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl">
              Premium stainless steel drainage & bath solutions crafted for
              modern architecture and refined lifestyles.
            </p>
          </motion.div>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={product.featured ? "lg:row-span-2" : ""}
              >
                <Link to={`/products/${product.id}`} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-[2rem] bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500">

                    {/* IMAGE */}
                    <div className={`overflow-hidden ${product.featured ? "h-full min-h-[480px]" : "h-80"}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 p-7">
                      <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>

                      <p className="text-white/70 text-sm mb-5 max-w-sm">
                        {product.description}
                      </p>

                      <div className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                        Explore Product
                        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/20 backdrop-blur group-hover:bg-accent transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-accent-foreground" />
                        </span>
                      </div>
                    </div>

                    {/* SOFT GLOW */}
                    <div className="absolute inset-0 rounded-[2rem] ring-1 ring-accent/0 group-hover:ring-accent/40 transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
