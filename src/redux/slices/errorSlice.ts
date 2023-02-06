import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//error state interface
export interface ErrorState {
  error: string | null;
}

//error state initial state
const initialState: ErrorState = {
    error: null,
};

//error slice
export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    removeError: (state) => {
        state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
