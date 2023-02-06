import { RootState } from "../store";

//Transactions selector
export const selectTransaction = (state: RootState) => state.transactions.transactions;