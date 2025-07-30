import RoomDetailHero from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomDetailHero';
import RoomGallery from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomGallery';
import RoomDetails from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomDetails';
import RoomServices from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomServices';
import RoomReservation from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomReservation';
import Oda1 from "@/public/bitez/Odalar/Deluxe/Oda1.webp"
import Oda2 from "@/public/bitez/Odalar/Deluxe/Oda2.webp"
import Oda3 from "@/public/bitez/Odalar/Deluxe/Oda3.webp"
import Oda4 from "@/public/bitez/Odalar/Deluxe/Oda4.webp"
import Oda5 from "@/public/bitez/Odalar/Deluxe/Oda5.webp"
import Oda6 from "@/public/bitez/Odalar/Deluxe/Oda6.webp"
import Oda7 from "@/public/bitez/Odalar/Deluxe/Oda7.webp"
import ReservationWidget from '@/app/[locale]/Components/HomePage/ReservationWidget';
import BitezFeatures from '@/app/[locale]/Components/Bitez/BitezFeatures';
import ContactUs from '@/app/[locale]/Components/Common/ContactFrom';
import Tour from '@/app/[locale]/Components/Bitez/Odalar/Tour';

export default function DeluxeRoomDetailPage() {
  const roomType = 'deluxeRoom';
  
  // Hero için ana resim (ilk resim)
  const heroImage = Oda1;
  
  // Gallery için tüm resimler
  const roomImages = [
    Oda1, Oda2, Oda3, Oda4, Oda5, Oda6, Oda7,
  ];

  const tourUrl = "https://kuula.co/share/collection/71x6v?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";

  const roomFeatures = [
    { icon: '📐', labelKey: 'size', value: '35 m²' },
    { icon: '👥', labelKey: 'capacity', value: '2-3' },
    { icon: '🛏️', labelKey: 'bedType', value: 'doubleBed' },
    { icon: '🚿', labelKey: 'bathroom', value: 'privateBathroom' },
    { icon: '🌡️', labelKey: 'climate', value: 'airConditioning' },
    { icon: '📺', labelKey: 'entertainment', value: 'smartTV' }
  ];

  const amenities = [
    'privateBalcony', 'smartTV', 'minibar', 'safe', 'wifi',
    'airConditioning', 'heating', 'bathrobes', 'hairdryer', 'toiletries', 
    'roomService', 'housekeeping', 'concierge', 'beachAccess', 'poolAccess'
  ];

  return (
    <div className="min-h-screen bg-white">
      <RoomDetailHero roomType={roomType} heroImage={heroImage} />
      <ReservationWidget/>
      <RoomGallery roomType={roomType} images={roomImages} />
      <RoomDetails roomType={roomType} features={roomFeatures} amenities={amenities} />
      <Tour iframeUrl={tourUrl} />
      <BitezFeatures />
      <ContactUs />
    </div>
  );
}