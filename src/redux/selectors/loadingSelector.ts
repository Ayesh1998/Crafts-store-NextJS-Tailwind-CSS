import { RootState } from "../store";

//loading selector
export const selectLoading = (state: RootState) => state.loading.loading;
