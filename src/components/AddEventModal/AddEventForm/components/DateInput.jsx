import React from 'react';
import { useFormContext } from 'react-hook-form';

import '../AddEventForm.scss';

export const DateInput = ({ errors, name, options }) => {
	const { register } = useFormContext();

	return (
		<div className='add-event__input__wrapper'>
			<div>
				<label htmlFor='add-event__input' className='input__label'>
					Date<span style={{ color: 'rgba(218, 28, 28, 0.76)' }}>*</span>
				</label>
			</div>
			<input
				type='datetime-local'
				id='add-event__input'
				className={`add-event__input ${
					errors?.date?.message && 'form__input-err'
				}`}
				{...register(name, options)}
			/>
			<div className='err-message'>{errors?.date?.message}</div>
		</div>
	);
};
