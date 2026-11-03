import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Banner from '@/components/Banner';
import Process from '@/components/Process';
import Faq from '@/components/Faq';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Clients from '@/components/Clients';
import GithubRepos from '@/components/GithubRepos';
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
        <Metrics />
        <Clients />
        <Process />
        <Experience />
        <Faq />
        <Testimonials />
        <Work />
        <GithubRepos />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
