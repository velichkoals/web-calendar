// import axios from 'axios';
import {
	addEventAction,
	deleteEventAction,
	getAllEventsAction,
	updateEventAction,
} from './actionCreators';

export const getAllEvents = () => {
	return (dispatch) => {
		const events = localStorage.getItem('events')
			? JSON.parse(localStorage.getItem('events'))
			: [];
		dispatch(getAllEventsAction(events));

		// - - - Example of GET request to get all existed events. - - -
		// axios
		// 	.get(`${url}/events/all`)
		// 	.then((response) => dispatch(getAllEventsAction(response.data)))
		// 	.catch((err) => console.log(err));
	};
};

export const addEvent = (event) => {
	return (dispatch) => {
		dispatch(addEventAction(event));

		// - - - Example of POST request to add an event. - - -
		// axios
		// 	.post(`${url}/events/add`, event)
		// 	.then((response) => dispatch(addEventAction(response.data)))
		// 	.catch((err) => console.log(err));
	};
};

export const updateEvent = (event) => {
	return (dispatch) => {
		dispatch(updateEventAction(event));

		// - - - Example of PUT request to update an event. - - -
		// axios
		// 	.put(`${url}/events/${id}`, event)
		// 	.then((response) => dispatch(updateEventAction(response.data)))
		// 	.catch((err) => console.log(err));
	};
};

export const deleteEvent = (id) => {
	return (dispatch) => {
		dispatch(deleteEventAction(id));

		// - - - Example of DELETE request to delete an event. - - -
		// axios
		// 	.delete(`${url}/events/${id}`)
		// 	.then((response) => dispatch(deleteEventAction(response.data)))
		// 	.catch((err) => console.log(err));
	};
};
