import React from 'react';
import { useFormContext } from 'react-hook-form';

import '../EventForm.scss';

export const TitleInput = ({ errors, name, options, title }) => {
	const { register } = useFormContext();

	return (
		<div className="event__input__wrapper">
			<div>
				<label htmlFor="event__input" className="input__label">
					Назва події{' '}
					<span style={{ color: 'rgba(218, 28, 28, 0.76)' }}>*</span>
				</label>
			</div>
			<input
				type="text"
				id="event__input"
				placeholder="Введіть назву події..."
				className={`event__input ${
					errors?.title?.message && 'form__input-err'
				}`}
				defaultValue={title}
				{...register(name, options)}
			/>
			<div className="err-message">{errors?.title?.message}</div>
		</div>
	);
};
