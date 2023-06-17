import React from 'react'
import { useContext } from 'react'
import ItemContext from "../store/item-context"
import BasketItem from './BasketItem'

function BasketContents() {
    const ctx=useContext(ItemContext);
    console.log(ctx.basketList[0].itemType)
  return (
    <div><BasketItem/></div>
  )
}

export default BasketContents