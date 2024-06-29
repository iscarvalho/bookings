const ADD_BOOKING = 'ADD_BOOKING';
const VIEW_BOOKING = 'VIEW_BOOKING';
const DELETE_BOOKING = 'DELETE_BOOKING';
const UPDATE_BOOKING = 'UPDATE_BOOKING';

export type Booking = {
	id: string;
	name: string;
	email: string;
	startDate: string
	endDate: string;
}

// Action Creators
export const addBooking = (booking: Booking) => {
	return {
		type: ADD_BOOKING,
		payload: booking
	}
}

export const viewBooking = (booking: Booking) => {
	return {
		type: VIEW_BOOKING,
		payload: booking
	}
}

export const deleteBooking = (id: string) => {
	return {
		type: DELETE_BOOKING,
		payload: id
	}
}

export const updateBooking = (booking: Booking) => {
	return {
		type: UPDATE_BOOKING,
		payload: booking
	}
}

// Reducers
const initialState: Booking[] = [];

export default function bookingsReducer(state = initialState, action: any) {
	switch (action.type) {
		case ADD_BOOKING:
			return [...state, action.payload];
		case VIEW_BOOKING:
			return state;
		case DELETE_BOOKING:
			return state.filter((booking: Booking) => booking.id !== action.payload);
		case UPDATE_BOOKING:
			return state.map((booking: Booking) => {
				if (booking.id === action.payload.id) {
					return {
						...booking,
						...action.payload
					}
				}
				return booking;
			});
		default:
			return state;
	}
}
