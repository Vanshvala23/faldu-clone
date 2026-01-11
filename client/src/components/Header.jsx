import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#" },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "Shower Drains", href: "#shower-drains" },
      { label: "Floor Drains", href: "#floor-drains" },
      { label: "Channel Drains", href: "#channel-drains" },
      { label: "Bath Accessories", href: "#accessories" },
      { label: "Grab Bars", href: "#grab-bars" },
      { label: "Technical Profiles", href: "#profiles" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Why Faldu", href: "#why-faldu" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <div className="w-1.5 h-8 bg-primary rounded-full" />
                <div className="w-1.5 h-8 bg-accent rounded-full" />
                <div className="w-1.5 h-8 bg-steel rounded-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight">FALDU</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-card rounded-lg shadow-xl border border-border p-2 min-w-50">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg">
              Get Catalogue
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      className="block py-3 text-foreground/80 hover:text-foreground font-medium"
                      onClick={() => !item.children && setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Button variant="hero" className="w-full">
                    Get Catalogue
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}