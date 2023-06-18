import React from "react";
import BasketTotal from "../details/BasketTotal";
import BasketContents from "../details/BasketContents";
import Footer from "../Footer";
import Header from "../Header";
function BasketPage() {
  return (
    <div>
      <Header />
      <BasketTotal />
      <BasketContents />
      <Footer />
    </div>
  );
}

export default BasketPage;
