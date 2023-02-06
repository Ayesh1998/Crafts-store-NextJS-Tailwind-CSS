import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Transactions } from "../../../typings";

//transactions state interface
export interface TransactionsState {
  transactions: Transactions[];
}

//transactions state initial state
const initialState: TransactionsState = {
  transactions: [],
};

//transactions slice
export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    getTransactions: (state, action: PayloadAction<Transactions[]>) => {
      state.transactions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
