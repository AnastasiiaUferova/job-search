import { Slice, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface savedDataIN {
  savedData: [];
}

const initialState: savedDataIN = {
  savedData: JSON.parse(localStorage.getItem("saved")!) || [],
};

export const savedDataSlice = createSlice({
  name: "savedCards",
  initialState,
  reducers: {
    setSavedData: (state, action: PayloadAction<[]>) => {
      state.savedData = action.payload;
    },
  },
}) as Slice<savedDataIN>;

export const { setSavedData } = savedDataSlice.actions;
export default savedDataSlice.reducer;
