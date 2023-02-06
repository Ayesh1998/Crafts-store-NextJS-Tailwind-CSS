import React from "react";
import RecentOrderOrSale from "../../atoms/recentOrderOrSale/RecentOrderOrSale";
import { Roles } from "../../../constants/enums";
import { selectRole } from "../../../redux/selectors/authSelector";
import { selectTransaction } from "../../../redux/selectors/transactionSelector";
import { useSelector } from "react-redux";

//Recent order or sale component
const RecentOrdersSales = () => {
  const transactions = useSelector(selectTransaction);
  const role = useSelector(selectRole);

  return (
    <div className="analytics-recent-orders-sales-wrapper">
      <h1>Recent {role === Roles.ADMIN ? "Sales" : "Orders"} </h1>
      <ul>
        {transactions.map((transaction, id) => (
          <RecentOrderOrSale
            firstName={transaction?.userId?.first_name}
            date={`${transaction.date} / ${transaction.month} / ${transaction.year}`}
            price={transaction.prodID.price}
            prodName={transaction.prodID.name}
            role={role}
            key={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecentOrdersSales;
