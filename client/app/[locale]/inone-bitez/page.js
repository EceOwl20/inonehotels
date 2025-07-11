import BitezHero from '@/app/[locale]/Components/Bitez/BitezHero';
import BitezAbout from '@/app/[locale]/Components/Bitez/BitezAbout';
import BitezFeatures from '@/app/[locale]/Components/Bitez/BitezFeatures';
import BitezRooms from '@/app/[locale]/Components/Bitez/BitezRooms';
import BitezLocation from '@/app/[locale]/Components/Bitez/BitezLocation';
import ReservationWidget from '../Components/HomePage/ReservationWidget';
import ContactUs from '../Components/Common/ContactFrom';
import Bodrum from '../Components/HomePage/Bodrum';
import OurPlatforms from '../Components/HomePage/OurPlatforms';

export default function InoneBitezPage() {
  return (
    <div className="min-h-screen bg-white">
      <BitezHero />
      <ReservationWidget />
      <BitezAbout />
      <BitezFeatures />
      <BitezRooms />
      <Bodrum />
      <ContactUs />
      <OurPlatforms />
    </div>
  );
}