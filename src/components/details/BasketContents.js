import React from "react";
import { useContext } from "react";
import ItemContext from "../store/item-context";
import BasketItem from "./BasketItem";
import classes from "./BasketContents.module.css";

function BasketContents() {
  const ctx = useContext(ItemContext);
  if (ctx.basketList.length > 0) {
    console.log(ctx.basketList[0].itemType);
    return (
      <div className={classes["basket-content"]}>
        {ctx.basketList.map((item) => (
          <BasketItem
            name={item.name}
            itemType={item.itemType}
            quantity={item.quantitiy}
            price={item.price * item.quantitiy}
          />
        ))}
      </div>
    );
  }
  return (
    <div className={classes["basket-content"]} style={{ height: "250px" }}>
      <h1 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
        Sepetiniz boş!
      </h1>
    </div>
  );
}

export default BasketContents;
