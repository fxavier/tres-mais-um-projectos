import { Card } from '@/components/ui/card';
import Image from 'next/image';

const team = [
	{
		name: 'Dinis Cumane Chunguane',
		role: 'Administrador',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80',
	},
	{
		name: 'Apolenário Filmiano Junior Zandamela',
		role: 'Sócio Gerente',
		image:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80',
	},
	// {
	// 	name: 'Maria Santos',
	// 	role: 'Diretora de Operações',
	// 	image:
	// 		'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80',
	// },
];

export function AboutTeam() {
	return (
		<section className='py-20 bg-gray-50 dark:bg-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-12'>
					Nossa Equipe
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{team.map((member) => (
						<Card key={member.name} className='p-6 text-center'>
							<div className='relative w-32 h-32 mx-auto mb-4'>
								<Image
									src={member.image}
									alt={member.name}
									fill
									className='rounded-full object-cover'
								/>
							</div>
							<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
								{member.name}
							</h3>
							<p className='text-gray-600 dark:text-gray-300 mt-2'>
								{member.role}
							</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
