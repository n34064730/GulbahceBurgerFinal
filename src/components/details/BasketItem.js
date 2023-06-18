import React from "react";
import classes from "./BasketItem.module.css";

function BasketItem(props) {
  return (
    <div className={classes.basketItem}>
      <div className={classes.n}>{props.name}</div>
      <div className={classes.i}>{props.itemType}</div>
      <div className={classes.q}>Quantity: {props.quantity}</div>
      <div className={classes.p}>{props.price} TL</div>
    </div>
  );
}

export default BasketItem;
