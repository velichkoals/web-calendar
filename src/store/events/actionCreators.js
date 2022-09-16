import {
	ADD_EVENT,
	DELETE_EVENT,
	UPDATE_EVENT,
	GET_ALL_EVENTS,
} from './actionTypes';

export const getAllEventsAction = (payload) => ({
	type: GET_ALL_EVENTS,
	payload,
});

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
