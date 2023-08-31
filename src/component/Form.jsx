import React, { Fragment, useState } from "react";

const Form = ({ handleAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleAddItems(newItem);
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <Fragment>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Seyahetin ucun ne lazimdir?</h3>
        <select
          name=""
          id=""
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="text"
          id=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </Fragment>
  );
};

export default Form;
