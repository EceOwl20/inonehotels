import RoomDetailHero from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomDetailHero';
import RoomGallery from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomGallery';
import RoomDetails from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomDetails';
import RoomServices from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomServices';
import RoomReservation from '@/app/[locale]/Components/Bitez/OdalarDetay/RoomReservation';

export default function DeluxeRoomDetailPage() {
  const roomType = 'deluxeRoom';
  
  const roomImages = [
    '/rooms/deluxe/deluxe-main.jpg',
    '/rooms/deluxe/deluxe-bed.jpg',
    '/rooms/deluxe/deluxe-bathroom.jpg',
    '/rooms/deluxe/deluxe-balcony.jpg',
    '/rooms/deluxe/deluxe-view.jpg',
    '/rooms/deluxe/deluxe-interior.jpg'
  ];

  const roomFeatures = [
    { icon: '📐', labelKey: 'size', value: '35 m²' },
    { icon: '👥', labelKey: 'capacity', value: '2-3' },
    { icon: '🏖️', labelKey: 'view', value: 'seaView' },
    { icon: '🛏️', labelKey: 'bedType', value: 'doubleBed' },
    { icon: '🚿', labelKey: 'bathroom', value: 'privateBathroom' },
    { icon: '🌡️', labelKey: 'climate', value: 'airConditioning' }
  ];

  const amenities = [
    'privateBalcony', 'seaView', 'smartTV', 'minibar', 'safe', 'wifi',
    'airConditioning', 'heating', 'bathrobes', 'hairdryer', 'toiletries', 
    'roomService', 'housekeeping', 'concierge', 'beachAccess', 'poolAccess'
  ];

  return (
    <div className="min-h-screen bg-white">
      <RoomDetailHero roomType={roomType} />
      <RoomGallery roomType={roomType} images={roomImages} />
      <RoomDetails roomType={roomType} features={roomFeatures} amenities={amenities} />
      <RoomServices roomType={roomType} />
      <RoomReservation roomType={roomType} />
    </div>
  );
}