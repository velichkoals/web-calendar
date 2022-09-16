import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { EventModal } from '../EventModal/EventModal';
import { Month } from './components/Month/Month';
import { getMonth } from '../../helpers/getMonth';
import { getMonthDifference } from '../../helpers/getMonthDifference';
import { getAllEvents } from '../../store/events/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/selectors';

import './Calendar.scss';

export const Calendar = () => {
	const events = useSelector(getEvents);
	const dispatch = useDispatch();
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const monthIdx = parseInt(localStorage.getItem('monthIndex'));
	const [currentMonthIndex, setCurrentMonthIndex] = useState(
		monthIdx ? monthIdx : dayjs().month()
	);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		dispatch(getAllEvents());
	}, []);

	// Unnecessary if we are working with API
	useEffect(() => {
		localStorage.setItem('events', JSON.stringify(events));
	}, [events]);

	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIndex));
		localStorage.setItem('monthIndex', JSON.stringify(currentMonthIndex));
	}, [currentMonthIndex]);

	const changeDate = (e) => {
		const date1 = new Date(
			dayjs(currentMonth[3][4]).year(),
			dayjs(currentMonth[3][4]).month()
		);
		const date2 = new Date(
			dayjs(e.target.value).year(),
			dayjs(e.target.value).month()
		);
		setCurrentMonthIndex(currentMonthIndex + getMonthDifference(date1, date2));
	};

	return (
		<div className='calendar'>
			<header className='calendar__header'>
				<div className='add-icon__wrapper' onClick={() => setIsModalOpen(true)}>
					<AddIcon className='add-icon' />
				</div>
				<EventModal
					title='Add new idea item'
					open={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
				<div className='calendar__header__item'>
					<div className='header__item__buttons'>
						<AiOutlineLeft
							onClick={() => setCurrentMonthIndex(currentMonthIndex - 1)}
							className='header__item__btn'
						/>
						{dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
							'MMMM YYYY'
						)}
						<AiOutlineRight
							className='header__item__btn'
							onClick={() => setCurrentMonthIndex(currentMonthIndex + 1)}
						/>
					</div>

					<input
						type='month'
						className='header__item__date-picker'
						onChange={(e) => changeDate(e)}
					/>
				</div>
			</header>
			<Month month={currentMonth} monthIndex={currentMonthIndex} />
		</div>
	);
};
