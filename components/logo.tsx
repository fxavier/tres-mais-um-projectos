'use client';

import { HardHat } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
	return (
		<Link href='/' className='flex items-center space-x-2'>
			<HardHat className='h-8 w-8 text-green-600' />
			<div className='flex flex-col'>
				<span className='text-lg font-bold text-gray-900 dark:text-white leading-tight'>
					Três + Um
				</span>
				{/* <span className='text-sm font-medium text-gray-600 dark:text-gray-300 leading-tight'>
					Projectos e Serviços
				</span> */}
			</div>
		</Link>
	);
}
