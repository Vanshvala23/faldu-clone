import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Rajkot, Gujarat, India", "360004"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 281 123 4567"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@faldu.in", "sales@faldu.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Discuss Your Requirements
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Whether you're an architect, designer, builder, or homeowner, we're 
              here to help you find the perfect drainage solutions for your project.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input placeholder="John Doe" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input placeholder="+91 98765 43210" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input placeholder="Your Company" className="h-12" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="How can we help you?" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  className="min-h-30 resize-none"
                />
              </div>
              <Button variant="hero" size="xl" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}