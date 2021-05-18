import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryFilter, setNameFilter } from "../redux/filtersSlice";

const categories = ["Produce", "Dairy", "Dessert", "Deli"];

function Filter() {
  const dispatch = useDispatch();

  function handleFilterNameChange(e) {
    const action = setNameFilter(e.target.value);
    dispatch(action);
  }

  function handleFilterCategoryChange(e) {
    const action = setCategoryFilter(e.target.value);
    dispatch(action);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleFilterNameChange}
      />
      <select name="filter" onChange={handleFilterCategoryChange}>
        <option value="All">Filter by category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
