import dayjs from 'dayjs';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
	addEvent,
	deleteEvent,
	updateEvent,
} from '../../../store/events/thunk';
import { DateInput } from './components/DateInput';
import { DescriptionInput } from './components/DescriptionInput';
import { TitleInput } from './components/TitleInput';

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
			dispatch(updateEvent(eventObj));
		} else {
			dispatch(addEvent(eventObj));
		}
		closeModal();
	};

	const handleDeleteEvent = () => {
		dispatch(deleteEvent(event.id));
		closeModal();
	};

	return (
		<FormProvider {...formMethods}>
			<form onSubmit={handleSubmit(handleEvent)} className='event__form'>
				<TitleInput
					name={'title'}
					options={{
						required: `Це поле є обов'язковим.`,
						minLength: {
							value: 3,
							message: 'Поле має включати мін. 3 символи.',
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
						required: `Це поле є обов'язковим.`,
					}}
					date={date}
					errors={errors}
				/>
				<div className='event__buttons__wrapper'>
					{event && (
						<MdDeleteOutline
							className='event__btn_delete'
							onClick={handleDeleteEvent}
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
