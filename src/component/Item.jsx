// import React from "react";

// const Item = ({ item }) => {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>

//       <button>❌</button>
//     </li>
//   );
// };

// export default Item;

import React from "react";

const Item = ({ item, handleDeleteItems, handleToggleItem }) => {
  return (
    <div>
      <li>
        {" "}
        <input
          type="checkbox"
          name="checkbox"
          id=""
          value={item.packed}
          onClick={() => handleToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => handleDeleteItems(item.id)}>❌</button>{" "}
      </li>
    </div>
  );
};

export default Item;
