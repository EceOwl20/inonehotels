import HeroSection from '../[locale]/Components/HomePage/HeroSection';
import WelcomeSection from '../[locale]/Components/HomePage/WelcomeSection.jsx';
import ReservationWidget from './Components/HomePage/ReservationWidget';
import ContactUs from './Components/Common/ContactFrom';
import VideoSection from './Components/HomePage/VideoSection';

export default function Home() {
  return (
    <div className="w-full">
      <VideoSection />
      <ReservationWidget />
      <HeroSection />
      <WelcomeSection />
      <ContactUs />
    </div>
  );
}