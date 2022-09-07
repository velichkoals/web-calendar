import { ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from './actionTypes';

const defaultState = localStorage.getItem('events')
	? JSON.parse(localStorage.getItem('events'))
	: [];

export const eventsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_EVENT: {
			return [...state, action.payload];
		}

		case UPDATE_EVENT: {
			return state.map((event) =>
				event.id === action.payload.id ? action.payload : event
			);
		}

		case DELETE_EVENT: {
			return state.filter((event) => event.id !== action.payload);
		}
		default:
			return state;
	}
};
