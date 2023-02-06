import CheckoutHeader from "../../atoms/checkoutHeader/CheckoutHeader";
import CheckoutList from "../../organisms/checkoutList/CheckoutList";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import PageHead from "../../atoms/pageHead/PageHead";
import React from "react";
import { selectBasketItems } from "../../../redux/selectors/basketSelector";
import { useSelector } from "react-redux";

//checkout page component
const CheckoutPage = () => {
  const items = useSelector(selectBasketItems);
  
  return (
    <div className="min-h-screen overflow-hidden bg-primary-background">
      <PageHead icon="/logo.png" title="Basket" />
      <Header />

      <main className="mx-auto max-w-5xl pb-24">
        <CheckoutHeader itemsLength={items.length} />
        <CheckoutList />
      </main>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
