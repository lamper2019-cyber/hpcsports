import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HBCSection from "@/components/HBCSection";
import ABFSection from "@/components/ABFSection";
import HPCSportsSection from "@/components/HPCSportsSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <HBCSection />
      <ABFSection />
      <HPCSportsSection />
      <ImpactSection />
      <Footer />
    </main>
  );
}
