import {
  addCraft,
  getCrafts,
  removeCraft,
  updateCraft,
} from "../slices/craftSlice";
import {
  addCraftApi,
  fetchCraftsApi,
  removeCraftApi,
  updateCraftApi,
} from "../../api/crafts-fetch-wrapper";
import { startLoading, stopLoading } from "../slices/loadingSlice";

import { Craft } from "../../../typings";
import { CraftApiErrors } from "../../constants/enums";
import { Dispatch } from "redux";
import { addError } from "../slices/errorSlice";
import { toast } from "react-hot-toast";

//fetching crafts action
export const fetchCraftsLogic = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());

  try {
    const crafts: Craft[] = await fetchCraftsApi();
    dispatch(getCrafts(crafts));
    dispatch(stopLoading());
  } catch (error: any) {
    dispatch(addError(error?.message));
    dispatch(stopLoading());
    toast.error(CraftApiErrors.FETCHING_CRAFT_UNSUCCESSFUL);
  }
};

//adding crafts action
export const addCraftLogic = (craft: Craft) => async (dispatch: Dispatch) => {
  dispatch(startLoading());

  try {
    const newCraft: Craft = await addCraftApi(craft);
    dispatch(addCraft(newCraft));
    toast.success(`${craft.name} added successfully`, {
      position: "bottom-center",
    });
    dispatch(stopLoading());
  } catch (error: any) {
    dispatch(addError(error?.message));
    dispatch(stopLoading());
    toast.error(CraftApiErrors.ADDING_CRAFT_UNSUCCESSFUL);
  }
};

//updating crafts action
export const updateCraftLogic =
  (craft: Craft) => async (dispatch: Dispatch) => {
    dispatch(startLoading());

    try {
      const newCraft: Craft = await updateCraftApi(craft);
      dispatch(updateCraft(newCraft));
      dispatch(stopLoading());
      toast.success(`${craft.name} updated successfully`, {
        position: "bottom-center",
      });
    } catch (error: any) {
      dispatch(addError(error?.message));
      dispatch(stopLoading());
      toast.error(CraftApiErrors.UPDATING_CRAFT_UNSUCCESSFUL);
    }
  };

//remove crafts action
export const removeCraftLogic =
  (craft: Craft) => async (dispatch: Dispatch) => {
    dispatch(startLoading());

    try {
      const newCraft: Craft = await removeCraftApi(craft);
      dispatch(removeCraft(newCraft));
      dispatch(stopLoading());
      toast.success(`${craft.name} removed successfully`, {
        position: "bottom-center",
      });
    } catch (error: any) {
      dispatch(addError(error?.message));
      dispatch(stopLoading());
      toast.error(CraftApiErrors.REMOVING_CRAFT_UNSUCCESSFUL);
    }
  };



  