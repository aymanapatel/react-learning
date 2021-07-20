import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * createSlice: API fn for Redux Logic
 * PayLoadAction: TS type for contents of object
 */
interface AymanCounterState {
  value: number;
}

const initialState: AymanCounterState = {
  value: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      /*
      Normally Redux Reducer w/o return
      // This return is immutable. 
      return {
         ...state
      }
      */
      state.value++; // IMMR Library makes it possible to do the above return immutability
    }
    // decrement

    // reset
  }
});

// incremented: ActionCreatorWithoutPayload<string>
export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
