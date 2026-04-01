import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import SolutionsSection from "@/components/SolutionsSection";
import ApproachSection from "@/components/ApproachSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PersonalSection from "@/components/PersonalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValuesSection />
        <SolutionsSection />
        <ApproachSection />
        <ExpertiseSection />
        <PersonalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
