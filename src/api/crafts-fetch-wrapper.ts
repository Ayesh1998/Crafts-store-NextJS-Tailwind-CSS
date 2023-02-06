import { Craft, SalesCrafts } from "../../typings";

import { CraftApiErrors } from "../constants/enums";
import http from "./api-handler";

//calling api endpoint to fetch all crafts
export async function fetchCraftsApi() {
  const response = await http()
    .get("api/craft")
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      throw new Error(CraftApiErrors.FETCHING_CRAFT_UNSUCCESSFUL);
    });
  return response;
}

//calling api endpoint to remove an craft
export async function removeCraftApi(craft: Craft) {
  const response = await http()
    .delete(`api/craft/${craft._id}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      throw new Error(CraftApiErrors.REMOVING_CRAFT_UNSUCCESSFUL);
    });
  return response;
}

//calling api endpoint to update an craft
export async function updateCraftApi(craft: Craft) {
  const response = await http()
    .put(`api/craft/${craft._id}`, craft)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      throw new Error(CraftApiErrors.UPDATING_CRAFT_UNSUCCESSFUL);
    });
  return response;
}

//calling api endpoint to add an craft
export async function addCraftApi(craft: Craft) {
  const response = await http()
    .post(`api/craft`, craft)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      throw new Error(CraftApiErrors.ADDING_CRAFT_UNSUCCESSFUL);
    });
  return response;
}


