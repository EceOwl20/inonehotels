import BitezHero from '@/app/[locale]/Components/Bitez/BitezHero';
import BitezAbout from '@/app/[locale]/Components/Bitez/BitezAbout';
import BitezFeatures from '@/app/[locale]/Components/Bitez/BitezFeatures';
import BitezRooms from '@/app/[locale]/Components/Bitez/BitezRooms';
import BitezLocation from '@/app/[locale]/Components/Bitez/BitezLocation';

export default function InoneBitezPage() {
  return (
    <div className="min-h-screen bg-white">
      <BitezHero />
      <BitezAbout />
      <BitezFeatures />
      <BitezRooms />
      <BitezLocation />
    </div>
  );
}