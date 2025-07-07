import RoomsHero from '@/app/[locale]/Components/Bitez/Odalar/RoomsHero';
import RoomsList from '@/app/[locale]/Components/Bitez/Odalar/RoomsList';
import BitezFeatures from '../../Components/Bitez/BitezFeatures';
import ContactUs from '../../Components/Common/ContactFrom';

export default function BitezRoomsPage() {
  return (
    <div className="min-h-screen bg-white">
      <RoomsHero />
      <RoomsList />
      <BitezFeatures />
      <ContactUs />
    </div>
  );
}