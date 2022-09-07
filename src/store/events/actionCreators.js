import { ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from './actionTypes';

export const addEventAction = (payload) => ({
	type: ADD_EVENT,
	payload,
});

export const updateEventAction = (payload) => ({
	type: UPDATE_EVENT,
	payload,
});

export const deleteEventAction = (payload) => ({
	type: DELETE_EVENT,
	payload,
});
