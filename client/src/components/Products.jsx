import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import productShowerDrain from "../assets/product-shower-drain.jpg";
import productFloorDrain from "../assets/product-floor-drain.jpg";
import productChannelDrain from "../assets/product-channel-drain.jpg";
import productAccessories from "../assets/product-accessories.jpg";
import productGrabBar from "../assets/product-grab-bar.jpg";
import productProfiles from "../assets/product-profiles.jpg";

const products = [
  {
    id: 1,
    title: "Shower Drains",
    description: "Linear and point drains for modern shower installations",
    image: productShowerDrain,
    featured: true,
  },
  {
    id: 2,
    title: "Floor Drains",
    description: "High-flow capacity drains for commercial and residential use",
    image: productFloorDrain,
    featured: false,
  },
  {
    id: 3,
    title: "Channel Drains",
    description: "Technical drainage solutions for specialized applications",
    image: productChannelDrain,
    featured: false,
  },
  {
    id: 4,
    title: "Bath Accessories",
    description: "Premium soap dishes, towel rings, and bathroom fittings",
    image: productAccessories,
    featured: true,
  },
  {
    id: 5,
    title: "Grab Bars",
    description: "Safety-certified support bars for accessibility",
    image: productGrabBar,
    featured: false,
  },
  {
    id: 6,
    title: "Technical Profiles",
    description: "Edge trims for tiles, marble, stones, and wood finishes",
    image: productProfiles,
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Products() {
  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Finest Quality Product Offerings
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our comprehensive range of premium stainless steel drainage 
            solutions, meticulously engineered for modern bathrooms and spaces.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 ${
                product.featured ? "lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${product.featured ? "h-80 lg:h-full" : "h-64"}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-surface-dark-foreground mb-2 group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-surface-dark-foreground/70 text-sm">
                      {product.description}
                    </p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-accent transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}