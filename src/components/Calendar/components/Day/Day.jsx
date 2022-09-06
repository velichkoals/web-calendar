import React from 'react';
import dayjs from 'dayjs';

export const Day = ({ day }) => {
	const getCurrentDay = () => {
		return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
			? 'calendar__day_current'
			: '';
	};
	const getCurrentMonth = () => {
		return day.format('MM') !== dayjs().format('MM')
			? 'calendar__day_disabled'
			: '';
	};
	return (
		<div className={`calendar__day ${getCurrentDay()} ${getCurrentMonth()}`}>
			<div className='calendar__day__item__wrapper'>
				<div className='calendar__day__item calendar__day__item__date'>
					{day.format('DD')}
				</div>
				<div className='calendar__day__item'>{day.format('ddd')}</div>
			</div>
		</div>
	);
};
