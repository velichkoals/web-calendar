import React from 'react';
import { Day } from '../Day/Day';

export const Month = ({ month }) => {
	return (
		<div className='calendar__month'>
			{month.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((day, i) => (
						<Day day={day} key={i} />
					))}
				</React.Fragment>
			))}
		</div>
	);
};
