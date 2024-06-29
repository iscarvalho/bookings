import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/configureStore';
import { Booking, addBooking, deleteBooking, updateBooking } from './store/bookings';
import Button from './components/Button/Button.component';
import BookingForm, { IBookingForm } from './components/BookingForm/BookingForm.component';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import { SubmitHandler } from 'react-hook-form';
import { validateAvailability, validateStartEndDates } from './utils/dateValidations';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.bookings);
  const [isUpdate, setIsUpdate] = useState(false);
  const [bookingForm, setBookingForm] = useState<IBookingForm>();

  const initialData: IBookingForm = {
    id: '',
    name: '',
    email: '',
    startDate: '',
    endDate: ''
  };

  const handleAddBooking: SubmitHandler<IBookingForm> = (data) => {
    if (!validateStartEndDates(data.startDate, data.endDate)) {
      alert('End date should be greater than start date');
    } else if (validateAvailability(data.startDate, data.endDate, bookings)) {
      alert('Dates are not available');
    } else {
      dispatch(addBooking({
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        startDate: data.startDate,
        endDate: data.endDate
      }));
    }
  };

  const handleUpdateBooking: SubmitHandler<IBookingForm> = (data) => {
    if (!validateStartEndDates(data.startDate, data.endDate)) {
      alert('End date should be greater than start date');
    } else if (validateAvailability(data.startDate, data.endDate, bookings, data.id)) {
      alert('Dates are not available');
    } else {
      dispatch(updateBooking({
        id: bookingForm?.id || '',
        name: data.name,
        email: data.email,
        startDate: data.startDate,
        endDate: data.endDate
      }));
      setIsUpdate(false);
      setBookingForm(undefined);
    }
  }

  const handleDeleteBooking = (id: string) => {
    dispatch(deleteBooking(id));
  };

  const toggleUpdate = (booking: Booking) => {
    setIsUpdate(true);
    setBookingForm(booking);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-medium">Bookings</h1>

      <div className="flex flex-col gap-2">
        <div className="mt-10 p-3 rounded-lg shadow">
          <h2 className="text-1xl font-medium mb-3">{isUpdate ? 'Update' : 'Add'} Booking</h2>
          {isUpdate ? (
            <>
              <BookingForm initialValues={bookingForm || initialData} onSubmit={handleUpdateBooking} />
            </>
          ) : (
            <>
              <BookingForm onSubmit={handleAddBooking} />
            </>
          )}
        </div>

        <div className="mt-10">
          <h2 className="text-1xl font-medium mb-3">View Bookings</h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {bookings.map((booking) => (
              <li className="flex p-3 mb-4 sm:p-3 rounded-lg shadow" key={booking.id}>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {booking.name}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {booking.email}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {booking.startDate} - {booking.endDate}
                  </p>
                </div>
                <div className="items-center text-base font-semibold text-gray-900 dark:text-white">
                  <Button variant="primary" type="button" onClick={() => toggleUpdate(booking)} text="Edit" />
                  <Button variant="danger"  type="button" onClick={() => handleDeleteBooking(booking.id)} text="Delete" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;