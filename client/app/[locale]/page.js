import HeroSection from '../[locale]/Components/HomePage/HeroSection';
import WelcomeSection from '../[locale]/Components/HomePage/WelcomeSection.jsx';
import ContactUs from './Components/Common/ContactFrom';
import VideoSection from './Components/HomePage/VideoSection';
import MobileBookNowButton from "./Components/HomePage/MobileBookNowButton"
import HotelsInfo from './Components/HomePage/HotelsInfo';

export default function Home() {
  return (
    <div className="w-full">
      <VideoSection />
      <WelcomeSection />
      <MobileBookNowButton />
      <HeroSection />
      <HotelsInfo />
      <ContactUs />
    </div>
  );
}