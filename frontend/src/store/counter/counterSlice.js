import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 1 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      if (state.counter <= 0) {
        return;
      } else {
        state.counter--;
      }
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
