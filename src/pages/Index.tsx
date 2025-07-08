
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Dashboards from '@/components/Dashboards';
import Testimonials from '@/components/Testimonials';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-data-bg text-data-text font-inter">
      <Header />
      <Hero />
      <Projects />
      <Dashboards />
      <Testimonials />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
