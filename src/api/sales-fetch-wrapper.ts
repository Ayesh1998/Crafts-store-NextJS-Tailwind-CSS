import { Craft, SalesCrafts } from "../../typings";
import { CraftApiErrors, SalesApiErrors } from "../constants/enums";

import http from "./api-handler";

//calling api endpoint to update an sales
export async function updateSalesApi(sales: SalesCrafts) {
    const response = await http()
      .post(`api/sales/addNewSales`, sales)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        throw new Error(SalesApiErrors.BUYING_CRAFT_UNSUCCESSFUL);
      });
    return response;
  }

  export async function getAllSalesApi() {
    const response = await http()
      .get(`api/sales`,)
      .then(function (response) {
        return response?.data;
      })
      .catch(function (error) {
        throw new Error(SalesApiErrors.FETCHING_ALL_SALES_UNSUCCESSFUL);
      });
    return response;
  }

  export async function getAllTransactionsApi(userId:string) {
    const response = await http()
      .get(`api/sales/${userId}`,)
      .then(function (response) {
        return response?.data;
      })
      .catch(function (error) {
        throw new Error(SalesApiErrors.FETCHING_ALL_SALES_UNSUCCESSFUL);
      });
    return response;
  }