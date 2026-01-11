import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Shower Drains", href: "/products/shower-drains" },
    { label: "Floor Drains", href: "/products/floor-drains" },
    { label: "Channel Drains", href: "/products/channel-drains" },
    { label: "Bath Accessories", href: "/products/bath-accessories" },
    { label: "Grab Bars", href: "/products/grab-bars" },
    { label: "Technical Profiles", href: "/products/technical-profiles" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Why Faldu ?", href: "/why-faldu" },
    { label: "Catalogue", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQs", href: "/contact" },
    { label: "Installation Guide", href: "/contact" },
    { label: "Warranty", href: "/contact" },
    { label: "Become a Dealer", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      {/* MAIN FOOTER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-8 bg-surface-dark-foreground rounded-full" />
                <div className="w-1.5 h-8 bg-accent rounded-full" />
                <div className="w-1.5 h-8 bg-steel rounded-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                FALDU
              </span>
            </Link>

            <p className="text-surface-dark-foreground/70 max-w-sm leading-relaxed mb-6">
              Faldu Interior PVT. LTD is a trusted Indian manufacturer of
              premium stainless steel drainage & bathroom solutions,
              engineered for durability, safety, and elegant design.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-steel/20 flex items-center justify-center hover:bg-accent transition group"
                >
                  <social.icon className="w-5 h-5 text-surface-dark-foreground/70 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* FOOTER COLUMNS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-6 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className="text-sm text-surface-dark-foreground/70 hover:text-accent transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="border-t border-steel/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-dark-foreground/50">
            © {new Date().getFullYear()} Faldu Interior PVT. LTD. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-surface-dark-foreground/50 hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm text-surface-dark-foreground/50 hover:text-accent">
              Terms of Service
            </Link>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"
            >
              <ArrowUp className="w-5 h-5 text-accent-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
