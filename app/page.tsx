import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import Info from '@/components/sections/info';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Reviews from '@/components/sections/reviews';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Info />
        <Services />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    );
}