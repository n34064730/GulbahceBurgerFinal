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
        <BasketItem name="hey" itemType="DENEME" quantity="1" price="5" />

      </div>
    );
  }
}

export default BasketContents;
