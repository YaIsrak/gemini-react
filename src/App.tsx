import Navbar from './components/Navbar';
import ChatApp from './components/chatapp';
import { Toaster } from './components/ui/sonner';

export default function App() {
	return (
		<div className='flex flex-col max-w-screen-xl mx-auto'>
			<Toaster position='top-center' richColors />
			<Navbar />
			<ChatApp />
			{/* <Footer /> */}
		</div>
	);
}
