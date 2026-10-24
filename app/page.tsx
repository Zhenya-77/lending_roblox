import About from '@/components/About/About';
import Hero from '../components/Hero/Hero';
import Benefits from '@/components/Benefits/Benefits';
import Program from '@/components/Program/Program';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Benefits />
      <Program />
      <Footer />
    </main>
  );
}
