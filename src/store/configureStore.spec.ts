import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "./bookings";
import { RootState, AppDispatch } from "./configureStore";

describe("configureStore", () => {
	it("should create a store with the bookings reducer", () => {
		const store = configureStore({
			reducer: {
				bookings: bookingsReducer
			}
		});

		expect(store).toBeDefined();
		expect(store.getState()).toEqual({ bookings: [] });
		expect(typeof store.dispatch).toBe("function");
	});

	it("should have the correct RootState and AppDispatch types", () => {
		const store = configureStore({
			reducer: {
				bookings: bookingsReducer
			}
		});

		type ExpectedRootState = ReturnType<typeof store.getState>;
		type ExpectedAppDispatch = typeof store.dispatch;

		const rootState: ExpectedRootState = { bookings: [] };
		const appDispatch: ExpectedAppDispatch = store.dispatch;

		expect(rootState).toEqual(store.getState());
		expect(appDispatch).toBe(store.dispatch);
	});
});