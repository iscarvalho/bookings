import { addBooking, deleteBooking, updateBooking } from './bookings';

describe('Bookings Actions', () => {
    test('addBooking should create an action to add a booking', () => {
        const booking = {
            id: '1',
            name: 'John Doe',
            email: 'johndoe@example.com',
            startDate: '2022-01-01',
            endDate: '2022-01-05',
        };

        const expectedAction = {
            type: 'ADD_BOOKING',
            payload: booking,
        };

        expect(addBooking(booking)).toEqual(expectedAction);
    });

    test('deleteBooking should create an action to delete a booking', () => {
        const bookingId = '1';

        const expectedAction = {
            type: 'DELETE_BOOKING',
            payload: bookingId,
        };

        expect(deleteBooking(bookingId)).toEqual(expectedAction);
    });

    test('updateBooking should create an action to update a booking', () => {
        const booking = {
            id: '1',
            name: 'John Doe',
            email: 'johndoe@example.com',
            startDate: '2022-01-01',
            endDate: '2022-01-05',
        };

        const expectedAction = {
            type: 'UPDATE_BOOKING',
            payload: booking,
        };

        expect(updateBooking(booking)).toEqual(expectedAction);
    });
});