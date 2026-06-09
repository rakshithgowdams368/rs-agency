import Navbar from '@/components/navbar';
import ScrollProgress from '@/components/scroll-progress';
import WhatsAppButton from '@/components/whatsapp-button';
import Hero from '@/components/sections/hero';
import DealingWith from '@/components/sections/dealing-with';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import WhyUs from '@/components/sections/why-us';
import Journey from '@/components/sections/journey';
import Network from '@/components/sections/network';
import Leadership from '@/components/sections/leadership';
import Gallery from '@/components/sections/gallery';
import PartnersSection from '@/components/sections/partners-section';
import Testimonials from '@/components/sections/testimonials';
import FAQ from '@/components/sections/faq';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <DealingWith />
        <About />
        <Services />
        <WhyUs />
        <Journey />
        <Network />
        <Leadership />
        <Gallery />
        <PartnersSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
