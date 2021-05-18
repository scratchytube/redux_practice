import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function ShoppingCart() {
  const items = useSelector((state) => {
    return state.items.filter((item) => item.isInCart);
  });

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const listItems = items.map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="ShoppingCart">
      <ul className="Items">{listItems}</ul>
      <h3>Cart Total: ${total}</h3>
    </section>
  );
}

export default ShoppingCart;
