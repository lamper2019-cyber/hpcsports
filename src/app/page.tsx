import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import TheModel from "@/components/TheModel";
import ABFSection from "@/components/ABFSection";
import HPCSportsSection from "@/components/HPCSportsSection";
import TheCycle from "@/components/TheCycle";
import ImpactNumbers from "@/components/ImpactNumbers";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <TheModel />
      <ABFSection />
      <HPCSportsSection />
      <TheCycle />
      <ImpactNumbers />
      <GetInvolved />
      <Footer />
    </main>
  );
}
