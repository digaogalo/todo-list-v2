
import React, { useState } from "react";
import List from "./components/List";

function Todo() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(e) {
    e.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setItemsList("");
  }

  return (
    <div className="todo-wrapper">
      <h1>Todo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Add a task"
          onChange={handleChangeInput}
          value={task}
        />
        <button type="submit">Add</button>
      </form>

      <List itemsList={itemsList} />
    </div>
  );
}

export default Todo;
