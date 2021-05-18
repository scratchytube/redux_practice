import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../redux/itemsSlice";

function Item({ item }) {
  const dispatch = useDispatch();
  const { id, isInCart, name, category, price } = item;

  function handleUpdateClick() {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => {
        const action = updateItem(updatedItem);
        dispatch(action);
      });
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const action = removeItem(id);
        dispatch(action);
      });
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">
        {category} | ${price}
      </span>
      <span>
        <button
          onClick={handleUpdateClick}
          className={isInCart ? "remove" : "add"}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button onClick={handleDeleteClick} className="remove">
          Delete
        </button>
      </span>
    </li>
  );
}

export default Item;
