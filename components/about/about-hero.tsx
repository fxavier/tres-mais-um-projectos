import { Users } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="bg-green-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Users className="h-16 w-16 text-white/90 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Quem Somos
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Conheça nossa história, missão e os valores que nos guiam
        </p>
      </div>
    </section>
  );
}