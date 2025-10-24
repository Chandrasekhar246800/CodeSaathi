import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SummarySection from '@/components/SummarySection';
import ProblemSection from '@/components/ProblemSection';
import SolutionsSection from '@/components/SolutionsSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatsInfographic from '@/components/StatsInfographic';
import TechStack from '@/components/TechStack';
import Roadmap from '@/components/Roadmap';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <SummarySection />
      <ProblemSection />
      <SolutionsSection />
      <FeaturesGrid />
      <StatsInfographic />
      <TechStack />
      <Roadmap />
      <ContactForm />
      <Footer />
    </>
  );
}
