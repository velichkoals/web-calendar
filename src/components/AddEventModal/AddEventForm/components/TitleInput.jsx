import React from 'react';
import { useFormContext } from 'react-hook-form';

import '../AddEventForm.scss';

export const TitleInput = ({ errors, name, options }) => {
	const { register } = useFormContext();

	return (
		<div className='add-event__input__wrapper'>
			<div>
				<label htmlFor='add-event__input' className='input__label'>
					Title<span style={{ color: 'rgba(218, 28, 28, 0.76)' }}>*</span>
				</label>
			</div>
			<input
				type='text'
				id='add-event__input'
				placeholder='Title goes here'
				className={`add-event__input ${
					errors?.title?.message && 'form__input-err'
				}`}
				{...register(name, options)}
			/>
			<div className='err-message'>{errors?.title?.message}</div>
		</div>
	);
};
