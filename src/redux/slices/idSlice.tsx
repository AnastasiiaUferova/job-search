import { Slice, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cardIdState {
  cardId: string | number;
}

const initialState: cardIdState = {
  cardId: JSON.parse(localStorage.getItem("id")!) || "",
};

export const cardIdSlice = createSlice({
  name: "cardId",
  initialState,
  reducers: {
    setCardId: (state, action: PayloadAction<string>) => {
      state.cardId = action.payload;
    },
  },
}) as Slice<cardIdState>;

export const { setCardId } = cardIdSlice.actions;
export default cardIdSlice.reducer;
