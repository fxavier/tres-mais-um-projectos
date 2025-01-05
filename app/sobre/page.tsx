import { AboutHero } from '@/components/about/about-hero';
import { AboutInfo } from '@/components/about/about-info';
import { AboutTeam } from '@/components/about/about-team';
import { AboutValues } from '@/components/about/about-values';

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutInfo />
      <AboutTeam />
      <AboutValues />
    </div>
  );
}