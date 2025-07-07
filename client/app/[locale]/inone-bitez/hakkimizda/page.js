import AboutUsHero from '@/app/[locale]/Components/Bitez/Hakkimizda/AboutUsHero';
import AboutStory from '@/app/[locale]/Components/Bitez/Hakkimizda/AboutStory';
import AboutValues from '@/app/[locale]/Components/Bitez/Hakkimizda/AboutValues';
import AboutLocation from '@/app/[locale]/Components/Bitez/Hakkimizda/AboutLocation';
import AboutTeam from '@/app/[locale]/Components/Bitez/Hakkimizda/AboutTeam';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHero />
      <AboutStory />
      <AboutValues />
      <AboutLocation />
    </div>
  );
}