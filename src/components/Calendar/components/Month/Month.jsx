import React from 'react';
import { Day } from '../Day/Day';

export const Month = ({ month, monthIndex }) => {
	return (
		<div className='calendar__month' key={monthIndex}>
			{month.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((day, index) => (
						<Day day={day} key={index} monthIndex={monthIndex} />
					))}
				</React.Fragment>
			))}
		</div>
	);
};
