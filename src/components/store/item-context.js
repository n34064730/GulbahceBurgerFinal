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
    let quantitiy = 0;
    setTotalAmount(totalAmount + item.price);
    setBasket((prevBasket) => [...prevBasket, item]);
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
