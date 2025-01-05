import { Card } from '@/components/ui/card';
import { Target, Heart, Star } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-8 w-8 text-green-600" />,
    title: 'Missão',
    description:
      'Oferecer soluções inovadoras em construção civil, superando as expectativas dos nossos clientes com qualidade e eficiência.',
  },
  {
    icon: <Star className="h-8 w-8 text-green-600" />,
    title: 'Visão',
    description:
      'Ser referência nacional em projetos e serviços de construção, reconhecida pela excelência e inovação.',
  },
  {
    icon: <Heart className="h-8 w-8 text-green-600" />,
    title: 'Valores',
    description:
      'Ética, comprometimento, qualidade, inovação, sustentabilidade e valorização das pessoas.',
  },
];

export function AboutValues() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="p-6 text-center">
              <div className="flex flex-col items-center">
                {value.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}