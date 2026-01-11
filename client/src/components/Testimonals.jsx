import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Faldu drains have been our go-to choice for all premium residential projects. The quality is unmatched.",
    author: "Ar. Rahul Mehta",
    role: "Principal Architect, Studio RM",
  },
  {
    quote: "Exceptional product quality and reliable delivery. We've been partnering with Faldu for over 10 years.",
    author: "Sandeep Agarwal",
    role: "Director, Royal Constructions",
  },
  {
    quote: "The technical profiles are precisely manufactured. Perfect for high-end tile and marble installations.",
    author: "Vikram Singh",
    role: "Interior Designer, V Design Studio",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from architects, designers, and builders who choose Faldu 
            for their premium projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-accent/30 mb-6" />
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}