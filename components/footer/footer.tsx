import { Logo } from '../logo';
import { FooterContact } from './footer-contact';
import { FooterLinks } from './footer-links';
import { FooterSocial } from './footer-social';

export function Footer() {
	return (
		<footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
					<div className='space-y-8'>
						<Logo />
						<p className='text-base text-gray-600 dark:text-gray-300'>
							Construindo o futuro com excelência e inovação desde 2019.
						</p>
						<FooterSocial />
					</div>
					<div className='col-span-2'>
						<FooterLinks />
					</div>
					<div>
						<FooterContact />
					</div>
				</div>
				<div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-800'>
					<p className='text-base text-gray-500 dark:text-gray-400 text-center'>
						© {new Date().getFullYear()} 3+1 Projectos e Serviços. Todos os
						direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
