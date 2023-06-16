import React from "react";
import { useContext, useState, useEffect } from "react";
import ItemContext from "../store/item-context";
import classes from "./BasketTotal.module.css";

function BasketTotal() {
  const ctx = useContext(ItemContext);
  const [clickable, setClickable] = useState(false);
  useEffect(() => {
    if (ctx.totalAmount > 0) {
      setClickable(true);
    }
  }, [ctx.totalAmount]);
  return (
    <div className={classes.basket}>
      <div className={classes.side}>
        {" "}
        <img
          src={require("../pictures/extra_pictures/BasketCart.png")}
          alt="basket"
        />
        <p>
          Basket Total:{" "}
          <span className={classes.total}>{ctx.totalAmount} TL </span>
        </p>
      </div>

      <button
        disabled={clickable ? "disabled" : ""}
        className={`${classes.btn} ${clickable ? "" : classes.d}`}
      >
        Purchase
      </button>
    </div>
  );
}

export default BasketTotal;
