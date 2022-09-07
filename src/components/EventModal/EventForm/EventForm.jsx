import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useForm, FormProvider } from 'react-hook-form';
import { DescriptionInput } from './components/DescriptionInput';
import { DateInput } from './components/DateInput';
import { TitleInput } from './components/TitleInput';
import { useDispatch } from 'react-redux';
import {
	addEventAction,
	deleteEventAction,
	updateEventAction,
} from '../../../store/events/actionCreators';
import { MdDeleteOutline } from 'react-icons/md';

import './EventForm.scss';

const EventForm = ({ closeModal, event }) => {
	const [title] = useState(event ? event.title : '');
	const [description] = useState(event ? event.description : '');
	const [date] = useState(event ? event.date : '');
	const dispatch = useDispatch();
	const formMethods = useForm({ mode: 'onChange' });
	const {
		formState: { errors, isDirty, isValid },
		handleSubmit,
	} = formMethods;

	const handleEvent = (data) => {
		const timeNow = dayjs().format('DD.MM.YYYY HH:mm');
		const eventObj = {
			info: event ? `Updated: ${timeNow}` : `Created: ${timeNow}`,
			title: data.title,
			description: data.description,
			date: data.date,
			id: event ? event.id : Date.now(),
		};
		if (event) {
			dispatch(updateEventAction(eventObj));
		} else {
			dispatch(addEventAction(eventObj));
		}
		closeModal();
	};

	const deleteEvent = () => {
		dispatch(deleteEventAction(event.id));
		closeModal();
	};

	return (
		<FormProvider {...formMethods}>
			<form onSubmit={handleSubmit(handleEvent)} className='event__form'>
				<TitleInput
					name={'title'}
					options={{
						required: 'This field is required.',
						minLength: {
							value: 3,
							message: 'Field should include min. 3 characters',
						},
					}}
					title={title}
					errors={errors}
				/>
				<DescriptionInput
					name={'description'}
					options={{
						required: false,
					}}
					description={description}
				/>
				<DateInput
					name={'date'}
					options={{
						required: 'This field is required.',
					}}
					date={date}
					errors={errors}
				/>
				<div className='event__buttons__wrapper'>
					{event && (
						<MdDeleteOutline
							className='event__btn_delete'
							onClick={deleteEvent}
						/>
					)}
					<input
						type='submit'
						className='event__btn'
						value='save'
						disabled={!isDirty || !isValid}
					/>
				</div>
			</form>
		</FormProvider>
	);
};

export default EventForm;
