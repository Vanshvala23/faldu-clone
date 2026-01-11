import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Features } from "../components/Features";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonals";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;