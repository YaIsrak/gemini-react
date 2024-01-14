import { GoogleGenerativeAI } from '@google/generative-ai';
import { useEffect, useState } from 'react';

export default function useGemini(prompt: string) {
	const [response, setResponse] = useState('');
	const genAI = new GoogleGenerativeAI(
		'AIzaSyCJjsbGlvIfzdgX1mWtOnMRip_M543-Kes'
	);

	async function run(prompt: string) {
		const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
		const result = await model.generateContentStream(prompt);
		for await (const chunk of result.stream) {
			const chunkText = chunk.text();
			console.log(chunkText);
			setResponse((prevRes) => (prevRes += chunkText));
		}
	}

	useEffect(() => {
		run(prompt);
	}, []);

	return { response };
}
