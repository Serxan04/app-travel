import React from "react";
import "./App.css";
import { useState } from "react";
import { Fragment } from "react";
import Logo from "./component/Logo";
import Form from "./component/Form";
import PackingList from "./component/PackingList";
import Stats from "./component/Stats";
const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item 
      )
    );
  }
  return (
    <Fragment>
      <div>
        <Logo />
        <Form  handleAddItems={handleAddItems} />
        <PackingList handleToggleItem={handleToggleItem} handleDeleteItems={handleDeleteItems} items={items} />
        <Stats items={items} />
      </div>
    </Fragment>
  );
};

export default App;
