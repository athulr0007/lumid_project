import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TrustedSection from "./components/TrustedSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import GetStartedSection from "./components/GetStartedSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ResultsSection from "./components/ResultsSection";
import PricingSection from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import TeamSection from "./components/TeamSection";
import NewsSection from "./components/NewsSection";
import NewsletterSection from "./components/NewsletterSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <TrustedSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <GetStartedSection />
      <HowItWorksSection />
      <ResultsSection />
      <PricingSection annualBilling={annualBilling} setAnnualBilling={setAnnualBilling} />
      <TestimonialsSection />
      <TeamSection />
      <NewsSection />
      <NewsletterSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
