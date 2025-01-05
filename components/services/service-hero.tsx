import { Wrench } from 'lucide-react';

export function ServiceHero() {
  return (
    <section className="bg-green-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Wrench className="h-16 w-16 text-white/90 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Nossos Serviços
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Soluções completas em construção civil, desde o planejamento até a execução
        </p>
      </div>
    </section>
  );
}