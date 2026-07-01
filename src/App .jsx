import { Routes, Route } from "react-router-dom";

import NavbarSection from "./components/NavbarSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import DoctorSection from "./components/DoctorSection";
import ContactSection from "./components/ContactSection";
import UpdatesSection from "./components/UpdatesSection";
import WhyUsSection from "./components/WhyUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ArticlesSection from "./components/ArticlesSection";
import FooterSection from "./components/FooterSection";
function App() {
  return (
    <>
      <NavbarSection />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <UpdatesSection />
            <WhyUsSection />
            <ServicesSection />
            <TestimonialsSection />
            <ArticlesSection />
          </>
        } />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/doctors" element={<DoctorSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;