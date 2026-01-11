import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import {Products} from "./components/Products";
import { ProductDetail } from "./components/ProductDetails";
import ShowerDrains from "./components/ShowerDrains";
import FloorDrains from "./components/FloorDrains";
import ChannelDrains from "./components/ChannelDrains";
import BathAccessories from "./components/BathAccessories";
import GrabBars from "./components/GrabBars";
import WhyFaldu from "./components/WhyFaldu";
import TechnicalProfile from "./components/TechnicalProfile";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/products" element={<Products/>}/>
          <Route path="/products/:slug" element={<ProductDetail/>}/>
          <Route path ="/products/shower-drains" element={<ShowerDrains/>}/>
          <Route path ="/products/floor-drains" element={<FloorDrains/>}/>
          <Route path = "/products/channel-drains" element={<ChannelDrains/>}/>
          <Route path = "/products/bath-accessories" element={<BathAccessories/>}/>
          <Route path = "/products/grab-bars" element={<GrabBars/>}/>
          <Route path ="/products/technical-profile" element={<TechnicalProfile/>}/>
          <Route path ="/why-faldu" element={<WhyFaldu/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;