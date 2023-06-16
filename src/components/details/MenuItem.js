import "./MenuItem.css";
import React, { useContext } from "react";
import ItemContext from "../store/item-context";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  const ctx = useContext(ItemContext);
  const navigate = useNavigate();

  const detailHandler = () => {
    ctx.onChangeItem({
      name: props.li.name,
      price: parseInt(props.li.price, 10),
      address: props.li.address,
      itemTypes:props.li.types
    });

    navigate("/menu"); 
  };

  return (
    <div className={"card"}>
      <img
        src={props.li.address}
        className="card-image"
        alt="d"
        onClick={detailHandler}
      />
      <div className="card-attr">
        <p onClick={detailHandler}>{props.li.name}</p>
        <p>{props.li.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
