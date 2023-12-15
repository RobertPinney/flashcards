import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: { cards: {} },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id,
        front,
        back,
      };
      console.log(id, front, back);
    },
  },
});
// Hint given by CC:
// const mySelectorByName = (name) => (state) => state.items.find(item.name === name));
// export const selectCardById = (id) => (state) => state.cards.cards[id];

export const selectCardById = (state) => state.cards.cards;
// export const selectCardById = (id) => (state) => state.cards[id] === id;
// console.log(selectCardById);

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
