import React, { Fragment, useState } from "react";
import Item from "./Item";

const PackingList = ({ items, handleDeleteItems, handleToggleItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  // if (sortBy === "packed") {
  //   sortedItems = items.slice().sort((a, b) => {
  //     Number(b.packed) - Number(a.packed);
  //   });
  // }

  return (
    <Fragment>
      <div className="list">
        <ul>
          {" "}
          {sortedItems.map((item, i) => (
            <Item
              handleToggleItem={handleToggleItem}
              handleDeleteItems={handleDeleteItems}
              item={item}
              key={i}
            />
          ))}
        </ul>
        <div className="actions">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            name=""
            id=""
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed"> Sort by packed status</option>
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default PackingList;
