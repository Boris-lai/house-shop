import Footer from "./_components/Footer";
import Gallery from "./_components/Gallery";
import Hero from "./_components/Hero";
import HeroInfo from "./_components/HeroInfo";
import ParallaxTestimonials from "./_components/ParallaxTestimonials";
import SwiperCard from "./_components/SwiperCard";

export default async function Page() {
  return (
    <>
      <Hero />
      <h1 className="-mt-32 mb-8 text-center text-xl">Featured Products</h1>
      <SwiperCard />
      <HeroInfo />
      <Gallery />
      <ParallaxTestimonials />
      <Footer />
    </>
  );
}
