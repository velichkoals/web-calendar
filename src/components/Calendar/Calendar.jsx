import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { EventModal } from '../EventModal/EventModal';
import { Month } from './components/Month/Month';
import { getMonth } from '../../helpers/getMonth';

import './Calendar.scss';
export const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIndex));
	}, [currentMonthIndex]);

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
					<input type='date' className='header__item__date-picker' />
				</div>
			</header>
			<Month month={currentMonth} monthIndex={currentMonthIndex} />
		</div>
	);
};
