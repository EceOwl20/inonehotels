import RoomDetailHero from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomDetailHero';
import RoomGallery from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomGallery';
import RoomDetails from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomDetails';
import RoomServices from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomServices';
import ReservationWidget from '@/app/[locale]/Components/HomePage/ReservationWidget';

// Suite room images - Fixed the paths
import Oda1 from "@/public/bitez/Odalar/Suite/Oda1.webp"
import Oda2 from "@/public/bitez/Odalar/Suite/Oda2.webp"
import Oda3 from "@/public/bitez/Odalar/Suite/Oda3.webp"
import Oda4 from "@/public/bitez/Odalar/Suite/Oda4.webp"
import Oda5 from "@/public/bitez/Odalar/Suite/Oda5.webp"
import Oda6 from "@/public/bitez/Odalar/Suite/Oda6.webp"
import Oda7 from "@/public/bitez/Odalar/Suite/Oda7.webp"
import Oda8 from "@/public/bitez/Odalar/Suite/Oda8.webp"
import Oda9 from "@/public/bitez/Odalar/Suite/Oda9.webp"
import Oda10 from "@/public/bitez/Odalar/Suite/Oda10.webp"
import Oda11 from "@/public/bitez/Odalar/Suite/Oda11.webp"
import Oda12 from "@/public/bitez/Odalar/Suite/Oda12.webp"
import Oda13 from "@/public/bitez/Odalar/Suite/Oda13.webp"
import BitezFeatures from '@/app/[locale]/Components/Bitez/BitezFeatures';
import ContactUs from '@/app/[locale]/Components/Common/ContactFrom';

export default function SuiteRoomDetailPage() {
  const roomType = 'suiteRoom';
  
  // Use first imported image as hero image (single image for your current component)
  const heroImage = Oda1;
  
  // Use imported images for gallery
  const roomImages = [Oda1, Oda2, Oda3, Oda4, Oda5, Oda6, Oda7, Oda8, Oda9, Oda10, Oda11, Oda12, Oda13];

  const roomFeatures = [
    { icon: '📐', labelKey: 'size', value: '55 m²' },
    { icon: '👥', labelKey: 'capacity', value: '3-4' },
    { icon: '🏖️', labelKey: 'view', value: 'seaView' },
    { icon: '🛏️', labelKey: 'bedType', value: 'kingBed' },
    { icon: '🛁', labelKey: 'bathroom', value: 'jacuzziBathroom' },
    { icon: '🏠', labelKey: 'layout', value: 'separateRooms' }
  ];

  const amenities = [
    'separateBedroom', 'livingRoom', 'privateBalcony', 'seaView', 'jacuzziBath', 
    'smartTV', 'soundSystem', 'minibar', 'safe', 'wifi', 'airConditioning', 
    'heating', 'bathrobes', 'hairdryer', 'toiletries', 'roomService', 
    'housekeeping', 'concierge', 'beachAccess', 'poolAccess', 'vipServices'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with single image */}
      <RoomDetailHero roomType={roomType} heroImage={heroImage} />
      
      {/* Reservation widget */}
      <ReservationWidget />
      
      {/* Gallery with all images */}
      <RoomGallery roomType={roomType} images={roomImages} />
      
      {/* Room details */}
      <RoomDetails roomType={roomType} features={roomFeatures} amenities={amenities} />
      
      <BitezFeatures />
      <ContactUs />
    </div>
  );
}