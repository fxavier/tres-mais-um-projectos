export interface Project {
	id: string;
	title: string;
	description: string;
	category: 'residential' | 'commercial' | 'industrial' | 'renovation';
	imageUrl: string;
	completionDate: string;
	location: string;
}

export const projects: Project[] = [
	{
		id: '1',
		title: 'Edifício Comercial Aurora',
		description: 'Centro comercial moderno com 12 andares e acabamento premium',
		category: 'commercial',
		imageUrl:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
		completionDate: '2023',
		location: 'Lisboa',
	},
	{
		id: '2',
		title: 'Residencial Vista Mar',
		description:
			'Condomínio de luxo com 24 apartamentos e área de lazer completa',
		category: 'residential',
		imageUrl:
			'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
		completionDate: '2023',
		location: 'Maputo Cidade',
	},
	{
		id: '3',
		title: 'Renovação Hotel Estrela',
		description: 'Renovação completa de hotel histórico com 45 quartos',
		category: 'renovation',
		imageUrl:
			'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&q=80',
		completionDate: '2022',
		location: 'Summerchield',
	},
	{
		id: '4',
		title: 'Complexo Industrial Tejo',
		description: 'Centro logístico moderno com 5000m² de área construída',
		category: 'industrial',
		imageUrl: '/images/image1.jpeg',
		completionDate: '2023',
		location: 'Cidade de Matola',
	},

	{
		id: '5',
		title: 'Residencial Vista Mar',
		description:
			'Condomínio de luxo com 24 apartamentos e área de lazer completa',
		category: 'residential',
		imageUrl: '/images/image2.jpeg',
		completionDate: '2023',
		location: 'Maputo Cidade',
	},
	{
		id: '6',
		title: 'Residencial Vista Mar',
		description:
			'Condomínio de luxo com 24 apartamentos e área de lazer completa',
		category: 'residential',
		imageUrl: '/images/image3.jpeg',
		completionDate: '2023',
		location: 'Maputo Cidade',
	},

	{
		id: '7',
		title: 'Residencial Vista Mar',
		description:
			'Condomínio de luxo com 24 apartamentos e área de lazer completa',
		category: 'residential',
		imageUrl: '/images/image4.jpeg',
		completionDate: '2023',
		location: 'Maputo Cidade',
	},
];
