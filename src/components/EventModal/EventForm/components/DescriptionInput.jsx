import React from 'react';
import { useFormContext } from 'react-hook-form';

import '../EventForm.scss';

export const DescriptionInput = ({ name, options, description }) => {
	const { register } = useFormContext();

	return (
		<div className="event__input__wrapper">
			<div>
				<label htmlFor="event__input" className="input__label">
					Опис події
				</label>
			</div>
			<textarea
				id="event__input"
				defaultValue={description}
				className="event__input event__textarea"
				{...register(name, options)}
			/>
		</div>
	);
};
