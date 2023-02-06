import { Craft } from "../../../typings";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//basket state interface
export interface BasketState {
  items: Craft[];
}

//basket state initial state
const initialState: BasketState = {
  items: [],
};

//basket slice
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Craft>) => {
      state.items = [...state.items, action.payload];
    },
    resetBasket: (state: BasketState) => {
      state.items = [];
    },
    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Craft) => item._id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Cant remove craft (id: ${action.payload.id}) as its not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, resetBasket} = basketSlice.actions;

export default basketSlice.reducer;