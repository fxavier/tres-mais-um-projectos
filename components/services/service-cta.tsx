import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ServiceCTA() {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Precisa de Nossos Serviços?
        </h2>
        <Link href="/contato">
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-green-600"
          >
            Entre em Contato
          </Button>
        </Link>
      </div>
    </section>
  );
}