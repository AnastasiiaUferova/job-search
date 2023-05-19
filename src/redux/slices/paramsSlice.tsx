import { Slice, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface popupState {
  page: number;
  keyword: string;
  salaryFrom: number | string;
  salaryTo: number | string;
  catalogue: string;
  agreement: number;
}

const initialState: popupState = {
  page: 1,
  keyword: "",
  salaryFrom: 1,
  salaryTo: 1,
  catalogue: "",
  agreement: 0,
};

export const paramSlice = createSlice({
  name: "paramsData",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSalaryFrom: (state, action: PayloadAction<number>) => {
      state.salaryFrom = action.payload;
    },
    setSalaryTo: (state, action: PayloadAction<number>) => {
      state.salaryTo = action.payload;
    },
    setCatalogue: (state, action: PayloadAction<string>) => {
      state.catalogue = action.payload;
    },
    setAgreement: (state, action: PayloadAction<number>) => {
      state.agreement = action.payload;
    },
  },
}) as Slice<popupState>;

export const {
  setKeyword,
  setPage,
  setSalaryFrom,
  setSalaryTo,
  setCatalogue,
  setAgreement,
} = paramSlice.actions;
export default paramSlice.reducer;
