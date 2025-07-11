import HeroSection from '../[locale]/Components/HomePage/HeroSection';
import WelcomeSection from '../[locale]/Components/HomePage/WelcomeSection.jsx';
import ContactUs from './Components/Common/ContactFrom';
import VideoSection from './Components/HomePage/VideoSection';
import MobileBookNowButton from "./Components/HomePage/MobileBookNowButton"
import HotelsInfo from './Components/HomePage/HotelsInfo';
import Bodrum from './Components/HomePage/Bodrum';
import OurPlatforms from './Components/HomePage/OurPlatforms';

export default function Home() {
  return (
    <div className="w-full">
      <VideoSection />
      <WelcomeSection />
      <HeroSection />
      <HotelsInfo />
      <Bodrum/>
      <ContactUs />
      <OurPlatforms />
    </div>
  );
}