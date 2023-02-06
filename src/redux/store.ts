import authReducer from "./slices/authSlice";
import basketReducer from "./slices/basketSlice";
import { configureStore } from "@reduxjs/toolkit";
import craftReducer from "./slices/craftSlice";
import errorReducer from "./slices/errorSlice";
import loadingReducer from "./slices/loadingSlice";
import transactionsReducer from "./slices/transactionsSlice";

//creating redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    error: errorReducer,
    crafts: craftReducer,
    basket: basketReducer,
    transactions: transactionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
