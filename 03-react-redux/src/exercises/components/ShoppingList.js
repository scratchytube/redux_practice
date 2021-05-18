import React from "react";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const items = useSelector((state) => {
    const { nameFilter, categoryFilter } = state.filters;
    return state.items
      .filter((item) => !item.isInCart)
      .filter((item) =>
        item.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
      .filter(
        (item) => categoryFilter === "All" || item.category === categoryFilter
      );
  });

  const listItems = items.map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="ShoppingList">
      <h2>My List</h2>
      <Filter />
      <ul className="Items">{listItems}</ul>
    </section>
  );
}

export default ShoppingList;
