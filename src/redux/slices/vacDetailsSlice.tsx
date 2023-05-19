import { Slice, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from '../../types/types';

export interface formCard {
  cards: CardProps[];
}

const initialState: formCard = {
  cards: [],
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setFormCards: (state, action: PayloadAction<CardProps[]>) => {
      state.cards = action.payload;
    },
  },
}) as Slice<formCard>;

export const { setFormCards } = formCardsSlice.actions;
export default formCardsSlice.reducer;