import React from 'react';
import { useFormContext } from 'react-hook-form';

import '../AddEventForm.scss';

export const DescriptionInput = ({ name, options }) => {
	const { register } = useFormContext();

	return (
		<div className='add-event__input__wrapper'>
			<div>
				<label htmlFor='add-event__input' className='input__label'>
					Description
				</label>
			</div>
			<textarea
				id='add-event__input'
				className='add-event__input add-event__textarea'
				{...register(name, options)}
			/>
		</div>
	);
};
