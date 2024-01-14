import { formSchema } from '@/lib/formValidation';
import z from 'zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';

interface FormType {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: any;
	onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export default function FormComponent({ form, onSubmit }: FormType) {
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full gap-2'>
				<FormField
					control={form.control}
					name='prompt'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormControl className=''>
								<Input
									placeholder='Enter a prompt...'
									{...field}
									className='w-full bg-white'
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}
