import { cn } from '@/lib/utils';

export interface ChatProps {
	role: 'user' | 'model';
	response: string;
}

export default function Chat({ role, response }: ChatProps) {
	return (
		<div
			className={cn(
				'flex',
				role === 'user' ? 'items-end justify-end' : 'items-start justify-start'
			)}
		>
			<div className='max-w-[70%] rounded-l-lg rounded-br-lg bg-gray-100 p-4 dark:bg-gray-800'>
				<p>Sure, what seems to be the issue?</p>
			</div>
		</div>
	);
}
