import { Transactions } from "../../typings";

//bar graph data handler for 12 months
export const barGraphDataHandler = (transactions: Transactions[]) => {
  let data = [];
  for (let i = 0; i < 12; i++) {
    let filteredTransactions = transactions.filter(
      (transaction) => parseInt(transaction.month) === i
    );
    let sum = 0;
    for (let j = 0; j < filteredTransactions.length; j++) {
      sum += parseInt(filteredTransactions[j].prodID.price);
    }
    data[i] = sum;
  }
  return data;
};

//best selling craft finding handler
const bestSellingCraftIdFindingHandler = (arr: Transactions[]) => {
  return arr.reduce(
    (counts, key) => {
      let curCount = (counts[key.prodID._id + ""] || 0) + 1;
      counts[key.prodID._id + ""] = curCount;
      if (curCount > counts.max) {
        counts.max = curCount;
        counts.mode = key.prodID._id;
      }
      return counts;
    },
    { max: 0, mode: null }
  ).mode;
};

//best selling craft finding handler for 12 months
export const bestSellingOrOrderedCraftDataHandler = (transactions: Transactions[]) => {
  let data = [];

  for (let i = 0; i < 12; i++) {
    let filteredTransactions = transactions?.filter(
      (transaction) => parseInt(transaction.month) === i
    );

    const bestSellingCraftId =
      bestSellingCraftIdFindingHandler(filteredTransactions);
    const bestSellingTransaction: Transactions = filteredTransactions.find(
      (transaction) => transaction.prodID._id === bestSellingCraftId
    );
    data[i] = bestSellingTransaction?.prodID;
  }
  return data;
};

//line graph data handler for 12 months
export const lineGraphDataHandler = (transactions: Transactions[]) => {
  let data = [];
  for (let i = 0; i < 12; i++) {
    let filteredTransactions = transactions.filter(
      (transaction) => parseInt(transaction.month) === i
    );
    data[i] = filteredTransactions.length;
  }
  return data;
};
