import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building2, HardHat, Ruler, Trophy } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const servicos = [
    {
      icon: <Building2 className="h-8 w-8 text-green-600" />,
      title: 'Construção Comercial',
      description: 'Soluções especializadas para seu negócio.',
    },
    {
      icon: <HardHat className="h-8 w-8 text-green-600" />,
      title: 'Projectos Residenciais',
      description: 'Construindo sonhos com precisão e excelência.',
    },
    {
      icon: <Ruler className="h-8 w-8 text-green-600" />,
      title: 'Serviços de Reforma',
      description: 'Transforme seu espaço com nossa equipe profissional.',
    },
    {
      icon: <Trophy className="h-8 w-8 text-green-600" />,
      title: 'Gestão de Projectos',
      description: 'Gerenciamento eficiente do início ao fim.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Local de construção"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Construindo o Futuro Hoje
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Serviços profissionais de construção com excelência em cada projecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Nossos Serviços
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Oferecemos soluções completas em construção para todas as suas necessidades
            </p>
          </div>
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

      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronto para Iniciar seu Projecto?
          </h2>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-green-600"
          >
            Consulta Gratuita
          </Button>
        </div>
      </section>
    </div>
  );
}