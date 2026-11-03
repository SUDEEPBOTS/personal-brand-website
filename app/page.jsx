import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Banner from '@/components/Banner';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Banner />
        <Services />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
