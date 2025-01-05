'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/servicos', label: 'Serviços' },
		{ href: '/projectos', label: 'Projectos' },
		{ href: '/sobre', label: 'Sobre' },
		{ href: '/contacto', label: 'Contacto' },
	];

	return (
		<nav className='fixed w-full bg-white dark:bg-gray-900 shadow-md z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<Logo />

					<div className='hidden md:block'>
						<div className='ml-10 flex items-center space-x-4'>
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className='text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors'
								>
									{item.label}
								</Link>
							))}
							<ThemeToggle />
							<Button className='bg-green-600 hover:bg-green-700 text-white'>
								Solicitar Orçamento
							</Button>
						</div>
					</div>

					<div className='md:hidden flex items-center space-x-4'>
						<ThemeToggle />
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='text-gray-600 dark:text-gray-300'
						>
							{isOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className='md:hidden'>
					<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900'>
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className='text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium'
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<Button className='w-full bg-green-600 hover:bg-green-700 text-white mt-4'>
							Solicitar Orçamento
						</Button>
					</div>
				</div>
			)}
		</nav>
	);
}
