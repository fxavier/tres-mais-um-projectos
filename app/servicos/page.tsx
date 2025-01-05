import { ServicesList } from '@/components/services/services-list';
import { ServiceHero } from '@/components/services/service-hero';
import { ServiceCTA } from '@/components/services/service-cta';

export default function ServicosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero />
      <ServicesList />
      <ServiceCTA />
    </div>
  );
}