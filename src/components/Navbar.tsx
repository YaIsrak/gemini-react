import { Package2Icon } from 'lucide-react';

export default function Navbar() {
	return (
		<header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
			<nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
				<a
					className='flex items-center gap-2 text-lg font-semibold md:text-base'
					href='/'
				>
					<Package2Icon className='w-6 h-6' />
					<span>Gemini AI Chat App Inc</span>
				</a>
			</nav>
		</header>
	);
}
