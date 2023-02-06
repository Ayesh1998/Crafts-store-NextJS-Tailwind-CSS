import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Craft } from "../../../typings";

//crafts state interface
export interface CraftState {
    crafts: Craft[]
}

//crafts state initial state
const initialState: CraftState = {
    crafts: [],
};

//crafts slice
export const craftSlice = createSlice({
  name: "crafts",
  initialState,
  reducers: {
    getCrafts: (state,action: PayloadAction<Craft[]>) => {
      state.crafts = action.payload;
    },
    addCraft: (state,action: PayloadAction<Craft>) => {
      let tempCrafts = [...state.crafts];
      tempCrafts.push(action.payload);
      state.crafts = tempCrafts;
    },
    removeCraft: (state,action: PayloadAction<Craft>) => {
      let tempCrafts = [...state.crafts];
      let index = tempCrafts.findIndex((craft) => craft._id === action.payload._id);
      tempCrafts.splice(index, 1);
      state.crafts = tempCrafts;  
    },
    updateCraft: (state,action: PayloadAction<Craft>) => {
      let tempCrafts = [...state.crafts];
      let index = tempCrafts.findIndex((craft) => craft._id === action.payload._id);
      tempCrafts.splice(index, 1, action.payload);
      state.crafts = tempCrafts;  
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCrafts, addCraft, removeCraft, updateCraft } = craftSlice.actions;

export default craftSlice.reducer;
