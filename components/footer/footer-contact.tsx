import { Mail, MapPin, Phone } from 'lucide-react';

export function FooterContact() {
	return (
		<div className='space-y-4'>
			<h3 className='text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider'>
				Contato
			</h3>
			<div className='space-y-3'>
				<div className='flex items-center space-x-3 text-gray-600 dark:text-gray-300'>
					<MapPin className='h-5 w-5 text-green-600' />
					<span>Quarteirão nº 13, Matola Gare</span>
				</div>
				<div className='flex items-center space-x-3 text-gray-600 dark:text-gray-300'>
					<Phone className='h-5 w-5 text-green-600' />
					<span> +258 86 254 0314</span>
				</div>
				<div className='flex items-center space-x-3 text-gray-600 dark:text-gray-300'>
					<Mail className='h-5 w-5 text-green-600' />
					<span>contato@3mais1.co.mz</span>
				</div>
			</div>
		</div>
	);
}
