import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Shower Drains", href: "#" },
    { label: "Floor Drains", href: "#" },
    { label: "Channel Drains", href: "#" },
    { label: "Bath Accessories", href: "#" },
    { label: "Grab Bars", href: "#" },
    { label: "Technical Profiles", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Faldu", href: "#why-faldu" },
    { label: "Catalogue", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  support: [
    { label: "FAQs", href: "#" },
    { label: "Installation Guide", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Become a Dealer", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  <div className="w-1.5 h-8 bg-surface-dark-foreground rounded-full" />
                  <div className="w-1.5 h-8 bg-accent rounded-full" />
                  <div className="w-1.5 h-8 bg-steel rounded-full" />
                </div>
                <span className="text-2xl font-bold tracking-tight">FALDU</span>
              </div>
            </a>
            <p className="text-surface-dark-foreground/70 mb-6 max-w-sm leading-relaxed">
              India's trusted manufacturer of premium stainless steel drainage 
              solutions. Setting industry benchmarks for quality and innovation 
              since 1999.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-steel/20 flex items-center justify-center hover:bg-accent transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-surface-dark-foreground/70 group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-surface-dark-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-surface-dark-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-surface-dark-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-dark-foreground/50">
            © {new Date().getFullYear()} Faldu. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-surface-dark-foreground/50 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-surface-dark-foreground/50 hover:text-accent transition-colors">
              Terms of Service
            </a>
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