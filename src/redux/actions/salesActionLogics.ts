import { SalesCrafts, Transactions } from "../../../typings";
import {
  getAllSalesApi,
  getAllTransactionsApi,
  updateSalesApi,
} from "../../api/sales-fetch-wrapper";
import { startLoading, stopLoading } from "../slices/loadingSlice";

import { Dispatch } from "redux";
import { SalesApiErrors } from "../../constants/enums";
import { addError } from "../slices/errorSlice";
import { getTransactions } from "../slices/transactionsSlice";
import { resetBasket } from "../slices/basketSlice";
import { toast } from "react-hot-toast";

//updating sales action
export const updateSalesLogic =
  (sales: SalesCrafts) => async (dispatch: Dispatch) => {
    dispatch(startLoading());

    try {
      await updateSalesApi(sales);
      dispatch(resetBasket());
      dispatch(stopLoading());
      toast.success(`Crafts bought successful`, {
        position: "bottom-center",
      });
    } catch (error: any) {
      dispatch(addError(error?.message));
      dispatch(stopLoading());
      toast.error(SalesApiErrors.BUYING_CRAFT_UNSUCCESSFUL);
    }
  };

//fetching all sales action
export const getAllSalesLogic = () => async (dispatch: Dispatch) => {
  dispatch(startLoading());

  try {
    let sales: Transactions[] = await getAllSalesApi();
    let validSales = sales.filter((transaction) => transaction.prodID);
    dispatch(getTransactions(validSales));
    dispatch(stopLoading());
  } catch (error: any) {
    dispatch(addError(error?.message));
    dispatch(stopLoading());
    toast.error(SalesApiErrors.FETCHING_ALL_SALES_UNSUCCESSFUL);
  }
};

//fetching all transactions action
export const getAllTransactionsLogic =
  (userId: string) => async (dispatch: Dispatch) => {
    dispatch(startLoading());

    try {
      let transactions: Transactions[] = await getAllTransactionsApi(userId);
      if (transactions.length === 0) {
        toast.error(SalesApiErrors.ORDER_CRAFTS_TO_SEE_ANALYTICS);
        dispatch(stopLoading());
      } else {
        let validTransactions = transactions.filter(
          (transaction) => transaction.prodID
        );
        dispatch(getTransactions(validTransactions));
        dispatch(stopLoading());
      }
    } catch (error: any) {
      dispatch(addError(error?.message));
      dispatch(stopLoading());
      toast.error(SalesApiErrors.FETCHING_USER_SALES_UNSUCCESSFUL);
    }
  };
