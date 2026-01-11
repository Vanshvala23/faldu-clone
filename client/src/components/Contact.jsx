import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Rajkot, Gujarat, India – 360004"],
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
    details: ["Mon – Sat: 9:00 AM – 6:00 PM"],
  },
];

export default function Contact() {
  return (
    <>
      {/* NAVBAR */}
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-[#f7f7f7] py-28 border-b">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm tracking-widest uppercase text-gray-500 block mb-4"
          >
            Faldu Interior Pvt. Ltd.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            Get in Touch
          </motion.h1>

          <p className="text-gray-600 text-lg">
            Let’s discuss how we can support your project with precision-engineered
            drainage solutions.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">

          {/* LEFT — INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border bg-gray-50 hover:shadow-md transition"
                >
                  <info.icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-medium mb-1">{info.title}</h3>
                  {info.details.map((d, j) => (
                    <p key={j} className="text-sm text-gray-600">{d}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden border shadow-lg">
              <iframe
                title="Faldu Interior Pvt. Ltd Location"
                src="https://www.google.com/maps?q=Faldu%20Interior%20Pvt%20Ltd%20Rajkot&output=embed"
                className="w-full h-[360px] border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl border shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-8">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" className="h-12" />
                <Input type="email" placeholder="Email Address" className="h-12" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone Number" className="h-12" />
                <Input placeholder="Company Name" className="h-12" />
              </div>

              <Input placeholder="Subject" className="h-12" />

              <Textarea
                placeholder="Tell us about your requirements..."
                className="min-h-[140px] resize-none"
              />

              <Button variant="hero" size="xl" className="w-full">
                Submit Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
