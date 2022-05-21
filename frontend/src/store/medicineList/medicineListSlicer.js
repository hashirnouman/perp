import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = "http://127.0.0.1:8000/pos/druglist/drug";
let lastId = 0;
const initialState = {
  drugs: [],
  counter: 1,
  total: 0,
};
export const getCartItems = createAsyncThunk(
  "pos/druglist/drug",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
const medicineListSlicer = createSlice({
  name: "meds",
  initialState,
  reducers: {
    addMedicine: (drugs, action) => {
      drugs.push({
        id: ++lastId,
        counter: 1,
        medicine: action.payload.medicine,
      });
      console.log("medicine added")
    },
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
    extraReducers: {
      [getCartItems.pending]: (state) => {
        state.isLoading = true;
      },
      [getCartItems.fulfilled]: (state, action) => {
        
        state.isLoading = false;
        state.cartItems = action.payload;
      },
      [getCartItems.rejected]: (state, action) => {
        console.log(action);
        state.isLoading = false;
      },
    },
  },
});
export const medicineListActions = medicineListSlicer.actions;
export default medicineListSlicer;
