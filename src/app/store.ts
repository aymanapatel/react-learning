import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer // Automatically call combine reducers
  }
});

// Export types based on store itself
export type appDispatch = typeof store.dispatch;

// Typescript ReturnType: Constructs a type consisting of the return type of function Type.
export type RootState = ReturnType<typeof store.getState>;
