import React from 'react';
import { ReactComponent as CalendarIcon } from '../../assets/calendar-icon.svg';
import { Calendar } from '../../components/Calendar/Calendar';

import './HomePage.scss';

export const HomePage = () => (
	<div className="main-section__wrapper">
		<div className="header">
			<div className="header__title">
				Студентська платформа для організації навчання
			</div>
			<CalendarIcon width="26px" height="26px" fill="#7920b0" />
		</div>
		<Calendar />
	</div>
);
