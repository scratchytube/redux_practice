import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOneItem } from "../redux/itemsSlice";

const categories = ["Produce", "Dairy", "Dessert", "Deli"];

function ItemForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        price,
        isInCart: false,
      }),
    })
      .then((r) => r.json())
      .then((newItem) => {
        const action = addOneItem(newItem);
        dispatch(action);
      });
  }

  return (
    <section className="NewItem">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {["Produce", "Dairy", "Dessert", "Deli"].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Add to List</button>
      </form>
    </section>
  );
}

export default ItemForm;
