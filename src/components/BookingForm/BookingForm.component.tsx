import React, { useEffect } from "react";
import Button from '../Button/Button.component';
import { SubmitHandler, useForm } from "react-hook-form";
import './BookingForm.css';

export interface IBookingForm {
	id: string;
	name: string;
	email: string;
	startDate: string;
	endDate: string;
}

interface IBookingFormProps {
	initialValues?: IBookingForm;
	onSubmit: SubmitHandler<IBookingForm>;
}

const BookingForm: React.FC<IBookingFormProps> = ({ initialValues, onSubmit }) => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm<IBookingForm>({
		defaultValues: initialValues
	});

	const handleFormSubmit: SubmitHandler<IBookingForm> = (data) => {
		onSubmit(data);
		reset();
	};

	useEffect(() => {
		if (initialValues) {
			reset(initialValues);
		}
	}, [initialValues, reset]);

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<div className="sm:col-span-6 mt-2">
				<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name:</label>
				<div className="mt-1">
					<input
						type="text"
						{...register("name", { required: true })}
						id="name"
						className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
					/>
					{errors?.name?.type === "required" && (
						<p className="error-message">Name is required.</p>
					)}
				</div>
			</div>
			<div className="sm:col-span-6 mt-2">
				<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail:</label>
				<div className="mt-1">
					<input
						type="text"
						{...register("email", { required: true })}
						id="email"
						className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
					/>
					{errors?.email?.type === "required" && (
						<p className="error-message">E-mail is required.</p>
					)}
				</div>
			</div>
			<div className="sm:col-span-6 mt-2">
				<label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-900">Start date:</label>
				<div className="mt-1">
					<input
						type="date"
						min={new Date().toISOString().split('T')[0]}
						{...register("startDate", { required: true })}
						id="startDate"
						className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
					/>
					{errors?.startDate?.type === "required" && (
						<p className="error-message">Start date is required.</p>
					)}
					
				</div>
			</div>
			<div className="sm:col-span-6 mt-2">
				<label htmlFor="endDate" className="block text-sm font-medium leading-6 text-gray-900">End date:</label>
				<div className="mt-1">
					<input
						type="date"
						min={new Date().toISOString().split('T')[0]}
						{...register("endDate", { required: true })}
						id="endDate"
						className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
					/>
					{errors?.endDate?.type === "required" && (
						<p className="error-message">End date is required.</p>
					)}
				</div>
			</div>
			<div className="flex justify-end mt-3">
				<Button variant="primary" type="submit" text={initialValues ? 'Update' : 'Add'} />
			</div>
		</form>
	);
}

export default BookingForm;