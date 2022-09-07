import { ADD_EVENT } from './actionTypes';

const defaultState = localStorage.getItem('events')
	? JSON.parse(localStorage.getItem('events'))
	: [];

export const eventsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_EVENT: {
			localStorage.setItem(
				'events',
				JSON.stringify([...state, action.payload])
			);
			return [...state, action.payload];
		}
		default:
			return state;
	}
};
