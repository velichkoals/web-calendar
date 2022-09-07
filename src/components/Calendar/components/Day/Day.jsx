import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getEvents } from '../../../../store/selectors';
import { useSelector } from 'react-redux';
import { EventModal } from '../../../EventModal/EventModal';

export const Day = ({ day, monthIndex }) => {
	const events = useSelector(getEvents);
	const [dayEvents, setDayEvents] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);

	useEffect(() => {
		const dayEvent = events.filter(
			(ev) => dayjs(ev.date).format('DD-MM-YY') === day.format('DD-MM-YY')
		);
		setDayEvents([...dayEvent]);
	}, [events, day]);

	useEffect(() => {
		localStorage.setItem('events', JSON.stringify(events));
	}, [events]);

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
	const editEvent = (event) => {
		setIsModalOpen(true);
		setSelectedEvent(event);
	};
	return (
		<div className={`calendar__day ${getCurrentDay()} ${getCurrentMonth()}`}>
			<div className='calendar__day__item__wrapper'>
				<div className='calendar__day__item calendar__day__item__date'>
					{day.format('DD')}
				</div>
				<div className='calendar__day__item'>{day.format('ddd')}</div>
			</div>
			<div className='calendar__day__event__wrapper'>
				{dayEvents.map((event) => (
					<React.Fragment key={event.id}>
						<div
							className='calendar__day__event'
							onClick={() => editEvent(event)}
						>
							{event.title || ''}
						</div>
						<EventModal
							title='Edit idea item'
							event={selectedEvent}
							open={isModalOpen}
							onClose={() => setIsModalOpen(false)}
						/>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};
