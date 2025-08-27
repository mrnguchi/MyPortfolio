// filepath: src/app/page.tsx
import HomeSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/MyPortfolio";
import ServicesSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";

export default function Page() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}