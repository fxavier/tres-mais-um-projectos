import { Card } from '@/components/ui/card';
import { 
  Building2, HardHat, Ruler, Trophy, 
  PaintBucket, Hammer, Truck, Lightbulb 
} from 'lucide-react';

const servicos = [
  {
    icon: <Building2 className="h-8 w-8 text-green-600" />,
    title: 'Construção Comercial',
    description: 'Desenvolvimento de espaços comerciais modernos e funcionais.',
  },
  {
    icon: <HardHat className="h-8 w-8 text-green-600" />,
    title: 'Projectos Residenciais',
    description: 'Construção e reforma de casas e apartamentos.',
  },
  {
    icon: <PaintBucket className="h-8 w-8 text-green-600" />,
    title: 'Acabamento',
    description: 'Serviços especializados de pintura e acabamentos.',
  },
  {
    icon: <Ruler className="h-8 w-8 text-green-600" />,
    title: 'Planejamento',
    description: 'Desenvolvimento de projetos e planejamento detalhado.',
  },
  {
    icon: <Hammer className="h-8 w-8 text-green-600" />,
    title: 'Manutenção',
    description: 'Serviços de manutenção preventiva e corretiva.',
  },
  {
    icon: <Truck className="h-8 w-8 text-green-600" />,
    title: 'Logística',
    description: 'Gestão de materiais e transporte para obras.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-green-600" />,
    title: 'Consultoria',
    description: 'Assessoria técnica especializada para seu projeto.',
  },
  {
    icon: <Trophy className="h-8 w-8 text-green-600" />,
    title: 'Gestão de Projectos',
    description: 'Gerenciamento completo do seu projeto.',
  },
];

export function ServicesList() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {servico.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {servico.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {servico.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}