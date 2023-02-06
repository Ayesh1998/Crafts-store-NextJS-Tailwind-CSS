import { RootState } from "../store";

//crafts selector
export const selectCrafts = (state: RootState) => state.crafts.crafts;
