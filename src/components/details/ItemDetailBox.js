import React, { useContext, useEffect, useState } from "react";
import ItemContext from "../store/item-context";
import classes from "./ItemDetailBox.module.css"

function ItemDetailBox() {
  const [hasTypes, setHasTypes] = useState(false);
  const ctx = useContext(ItemContext);

  useEffect(() => {
    if (Object.keys(ctx.item.itemTypes).length > 0) {
      setHasTypes(true);
    }
  }, [ctx.item.itemTypes]);

  return (
    <div className={classes.box}>
      {hasTypes && (
        <div>
          <p>DİĞER</p>
        </div>
      )}
      {!hasTypes && 
        <div className={classes.hasNot}>
          <div className={classes.left}>
            <img src={ctx.item.address} alt="img" />
          </div>
          <div className={classes.right}>
            <h1>{ctx.item.name}</h1>
            <p>{ctx.item.price} TL</p>
            <button onClick={() => ctx.onAddtoCart(ctx.item)}>
              Add to Basket!
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export default ItemDetailBox;
