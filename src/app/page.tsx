import Contact from "@/components/landing/sections/Contact";
import CTA from "@/components/landing/sections/CTA";
import FAQ from "@/components/landing/sections/FAQ";
import FeaturesSection from "@/components/landing/sections/FeaturesSection";
import Footer from "@/components/landing/sections/Footer";
import Header from "@/components/landing/sections/Header";
import HeroSection from "@/components/landing/sections/HeroSection";
import HowItWorks from "@/components/landing/sections/HowItWorks";
import Pricing from "@/components/landing/sections/Pricing";
import Testimonials from "@/components/landing/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark font-iran-sans-regular">
      <Header />
      <main className="flex-grow" dir="rtl">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
