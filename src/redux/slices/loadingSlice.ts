import { createSlice } from "@reduxjs/toolkit";

//loading state interface
export interface LoadingState {
  loading: boolean;
}

//loading state initial state
const initialState: LoadingState = {
  loading: false,
};

//loading slice
export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, stopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
