import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getEvents } from '../../../../store/selectors';
import { useSelector } from 'react-redux';

export const Day = ({ day, monthIndex }) => {
	const events = useSelector(getEvents);
	const [dayEvents, setDayEvents] = useState([]);

	useEffect(() => {
		const dayEvent = events.filter(
			(ev) => dayjs(ev.date).format('DD-MM-YY') === day.format('DD-MM-YY')
		);
		setDayEvents([...dayEvent]);
	}, [events, day]);

	const getCurrentDay = () => {
		return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
			? 'calendar__day_current'
			: '';
	};
	const getCurrentMonth = () => {
		return day.format('MM') !== dayjs().month(monthIndex).format('MM')
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
			{dayEvents.map((event) => (
				<div className='calendar__day__event' key={event.id}>
					{event.title || ''}
				</div>
			))}
		</div>
	);
};
