import { RootState } from "../store";

//authentication selector
export const selectAuth = (state: RootState) => state.auth.loggedIn;
export const selectRole = (state: RootState) => state.auth.role;
export const selectId = (state: RootState) => state.auth.id;