import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { DescriptionInput } from './components/DescriptionInput';
import { DateInput } from './components/DateInput';
import { TitleInput } from './components/TitleInput';

import './AddEventForm.scss';
import { useDispatch } from 'react-redux';
import { addEventAction } from '../../../store/events/actionCreators';

const AddEventForm = ({ closeModal }) => {
	const dispatch = useDispatch();
	const formMethods = useForm({ mode: 'onChange' });
	const {
		formState: { errors, isDirty, isValid },
		handleSubmit,
	} = formMethods;

	const addEventToCalendar = (data) => {
		const eventObj = {
			created: '',
			title: data.title,
			description: data.description,
			date: data.date,
			id: Date.now(),
		};
		console.log(eventObj);
		dispatch(addEventAction(eventObj));
		closeModal();
	};

	return (
		<FormProvider {...formMethods}>
			<form
				onSubmit={handleSubmit(addEventToCalendar)}
				className='add-event__form'
			>
				<TitleInput
					name={'title'}
					options={{
						required: 'This field is required.',
						minLength: {
							value: 3,
							message: 'Field should include min. 3 characters',
						},
					}}
					errors={errors}
				/>
				<DescriptionInput
					name={'description'}
					options={{
						required: false,
					}}
				/>
				<DateInput
					name={'date'}
					options={{
						required: 'This field is required.',
					}}
					errors={errors}
				/>

				<input
					type='submit'
					className='add-event__btn'
					value='save'
					disabled={!isDirty || !isValid}
				/>
			</form>
		</FormProvider>
	);
};

export default AddEventForm;
