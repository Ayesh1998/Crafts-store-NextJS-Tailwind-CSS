import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//auth state interface
export interface LoginState {
  loggedIn: boolean;
  role: string | null;
  id: string | null;
}

//auth state initial state
const initialState: LoginState = {
  loggedIn: false,
  role: null,
  id: null,
};

//auth slice
export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: string; id: string }>) => {
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.role = null;
      state.id = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
