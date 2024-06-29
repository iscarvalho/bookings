import { Booking } from "../store/bookings";

export const validateStartEndDates = (startDate: string, endDate: string) => {
	return new Date(startDate) < new Date(endDate);
}

export const validateAvailability = (startDate: string, endDate: string, bookings: Booking[], bookingId?: string) => {
	return bookings.filter((booking) => {
		if (bookingId && booking.id === bookingId) {
			return false;
		}
		return new Date(startDate) >= new Date(booking.startDate) && new Date(endDate) <= new Date(booking.endDate);
	}).length
}