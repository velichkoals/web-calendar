import {
	ADD_EVENT,
	DELETE_EVENT,
	GET_ALL_EVENTS,
	UPDATE_EVENT,
} from './actionTypes';

const defaultState = [];

export const eventsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_ALL_EVENTS: {
			return [...action.payload];
		}
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
