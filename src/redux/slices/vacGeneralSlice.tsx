import { Slice, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface vacDataIN {
  vacData: [];
}

const initialState: vacDataIN = {
  vacData: [],
};

export const vacDataSlice = createSlice({
  name: "formCards",
  initialState,
  reducers: {
    setVacData: (state, action: PayloadAction<[]>) => {
      state.vacData = action.payload;
    },
  },
}) as Slice<vacDataIN>;

export const { setVacData } = vacDataSlice.actions;
export default vacDataSlice.reducer;
