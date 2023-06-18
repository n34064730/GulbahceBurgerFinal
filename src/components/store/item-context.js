import React, { createContext, useState } from "react";

const ItemContext = createContext({
  basketList: [
    {
      name: "",
      price: 0,
      quantitiy: 0,
      itemType: "",
    },
  ],
  item: {
    name: "",
    price: 0,
    address: "",
    itemTypes: {
      sizes: [],
      prices: [],
    },
  },
  onChangeItem: (item) => {},
  onAddtoCart: (item) => {},
  totalAmount: 0,
});

export const ItemContextProvider = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [basket, setBasket] = useState([]);
  const [item, setItem] = useState({
    name: "",
    price: 0,
    address: "",
    itemTypes: {},
  });

  const changeItem = (item) => {
    setItem(item);
  };

  const addToCart = (item) => {
    const index = basket.findIndex(
      (listItem) => item.itemType === listItem.itemType
    );
    const existingItem = basket[index];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantitiy: existingItem.quantitiy + 1,
      };
      updatedItems = [...basket];
      updatedItems[index] = updatedItem;
      setBasket(updatedItems);
      setTotalAmount(totalAmount + item.price);
    } else {
      setBasket((prevBasket) => [...prevBasket, item]);
      setTotalAmount(totalAmount + item.price);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        basketList: basket,
        item: item,
        onChangeItem: changeItem,
        onAddtoCart: addToCart,
        totalAmount: totalAmount,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
