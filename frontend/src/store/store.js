import { configureStore } from "@reduxjs/toolkit";

import medicineListSlicer from "./medicineList/medicineListSlicer";

const store = configureStore({
  reducer: {
  
    medicine: medicineListSlicer.reducer,
  },
});

export default store;
