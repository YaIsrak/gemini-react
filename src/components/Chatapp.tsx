import { formSchema } from '@/lib/formValidation';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import { toast } from 'sonner';
import * as z from 'zod';
import FormComponent from './Form';

export default function ChatApp() {
	const [response, setResponse] = useState('');
	const [prompt, setPrompt] = useState('');
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const genAI = new GoogleGenerativeAI(
			'AIzaSyCJjsbGlvIfzdgX1mWtOnMRip_M543-Kes'
		);
		setPrompt('');
		setPrompt(values.prompt);
		async function run(prompt: string) {
			setResponse('');
			const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
			const result = await model.generateContentStream(prompt);
			for await (const chunk of result.stream) {
				const chunkText = chunk.text();
				setResponse((prevRes) => (prevRes += chunkText));
			}
		}
		const hehe = run(values.prompt).catch((err) => {
			toast.error(err.message);
		});
		toast.promise(hehe, {
			loading: 'Generating data....',
			success: 'Data generated!',
		});
		form.reset();
	}

	return (
		<main className='p-4 md:p-10'>
			{/* Input */}
			<FormComponent form={form} onSubmit={onSubmit} />
			<div className='py-12 px-4 md:px-24 overflow-hidden'>
				{prompt && <h1 className='capitalize mb-5 line-clamp-2'>{prompt}</h1>}
				<ReactMarkdown>{response}</ReactMarkdown>
			</div>
		</main>
	);
}
