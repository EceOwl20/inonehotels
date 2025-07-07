import HeroSection from '../[locale]/Components/HomePage/HeroSection';
import WelcomeSection from '../[locale]/Components/HomePage/WelcomeSection.jsx';
import ReservationWidget from './Components/HomePage/ReservationWidget';
import ContactUs from './Components/Common/ContactFrom';
import VideoSection from './Components/HomePage/VideoSection';
import MobileBookNowButton from "./Components/HomePage/MobileBookNowButton"

export default function Home() {
  return (
    <div className="w-full">
      <VideoSection />
      <WelcomeSection />
      <ReservationWidget />
      <MobileBookNowButton />
      <HeroSection />
      <ContactUs />
    </div>
  );
}