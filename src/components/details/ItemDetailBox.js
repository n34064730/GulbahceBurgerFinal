import React, { useContext, useEffect, useState } from "react";
import ItemContext from "../store/item-context";
import classes from "./ItemDetailBox.module.css";

function ItemDetailBox() {
  const [hasTypes, setHasTypes] = useState(false);
  const ctx = useContext(ItemContext);
  const [updatedPrice, setUpdatedPrice] = useState(ctx.item.price);
  const [itemType, setItemType] = useState("Standart");
  const [clickable, setClickable] = useState(false);

  const addToCart = () => {
    ctx.onAddtoCart({
      name: ctx.item.name,
      price: updatedPrice,
      quantitiy: 1,
      itemType: itemType,
    });
  };

  useEffect(() => {
    if (Object.keys(ctx.item.itemTypes).length > 0) {
      setHasTypes(true);
    }
  }, [ctx.item.itemTypes]);

  return (
    <div className={classes.box}>
      {hasTypes && (
        <div className={classes.has}>
          <div className={classes.tleft}>
            <h1>{ctx.item.name}</h1>
            <p>{ctx.item.price} TL</p>
            <img src={ctx.item.address} alt="menu" />
          </div>
          <div className={classes.tright}>
            {ctx.item.itemTypes.sizes.map((name, index) => (
              <div key={name} className={classes.lines}>
                <input
                  type="radio"
                  name="size"
                  value={name}
                  onChange={() => {
                    const selectedPrice =
                      ctx.item.price + ctx.item.itemTypes.prices[index];

                    setUpdatedPrice(selectedPrice);
                    setItemType(name);
                    setClickable(true);
                  }}
                />
                <label>{name}</label>
              </div>
            ))}

            <div className={classes.btn}>
              {" "}
              <button disabled={!clickable} onClick={addToCart}>
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      )}

      {!hasTypes && (
        <div className={classes.hasNot}>
          <div className={classes.left}>
            <img src={ctx.item.address} alt="img" />
          </div>
          <div className={classes.right}>
            <h1>{ctx.item.name}</h1>
            <p>{ctx.item.price} TL</p>
            <button onClick={addToCart}>Add to Basket!</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetailBox;
