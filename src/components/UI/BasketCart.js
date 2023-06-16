import React, { useContext } from "react";
import classes from "./BasketCart.module.css";
import ItemContext from "../store/item-context";
function BasketCart(props) {
  const ctx = useContext(ItemContext);
  return (
    <div onClick={props.onClick} className={classes.basketCart}>
      <p>
        Basket Total:{" "}
        <span className={classes.total}>{ctx.totalAmount} TL </span>
      </p>{" "}
      <img
        src={require("../pictures/extra_pictures/BasketCart.png")}
        alt="basket"
      />
    </div>
  );
}

export default BasketCart;
