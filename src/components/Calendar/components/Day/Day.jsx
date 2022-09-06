import React from 'react';
import dayjs from 'dayjs';

export const Day = ({ day, monthIndex }) => {
	const getCurrentDay = () => {
		return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
			? 'calendar__day_current'
			: '';
	};
	const getCurrentMonth = () => {
		return parseInt(day.format('MM')) !== monthIndex + 1
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
