import { Craft } from "../../../typings";
import { RootState } from "../store";

//basket selectors
export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: Craft) => item._id === id);
};

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce(
    (total: number, item: Craft) => (total += parseInt(item.price)),
    0
  );
