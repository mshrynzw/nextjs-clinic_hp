import HeroSection from '@/components/sections/Hero';
import FeaturesSection from '@/components/sections/Features';
import NewsSection from '@/components/sections/News';
import ReservationSection from '@/components/sections/Reservation';
import TwitterSection from '@/components/sections/TwitterFeed';
import GallerySection from '@/components/sections/Gallery';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <NewsSection />
      <ReservationSection />
      <TwitterSection />
      <GallerySection />
    </>
  );
}