import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { ProductsSection } from '@/app/components/ProductsSection';
import { AboutSection } from '@/app/components/AboutSection';
import { FabricsSection } from '@/app/components/FabricsSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <FabricsSection />
      <Footer />
    </div>
  );
}