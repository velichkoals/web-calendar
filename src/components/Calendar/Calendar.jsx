import React, { useState } from 'react';
import { Month } from './components/Month/Month';
import { getMonth } from '../../helpers/getMonth';

import './Calendar.scss';
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import dayjs from 'dayjs';

export const Calendar = () => {
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	return (
		<div className='calendar'>
			<header className='calendar__header'>
				<div className='add-icon__wrapper'>
					<AddIcon className='add-icon' />
				</div>
				<div className='calendar__header__item'>
					<div className='header__item__buttons'>
						<AiOutlineLeft className='header__item__btn' />
						{dayjs().month()}
						<AiOutlineRight className='header__item__btn' />
					</div>
					<div>Calendar picker</div>
				</div>
			</header>
			<Month month={currentMonth} />
		</div>
	);
};
