import React from "react";

import "../../styles/todos/TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <h3 className="TodoItem__title">Title of TO-DO item</h3>
      <p className="TodoItem__desc">Description of item</p>
      <p className="TodoItem__state">State: </p>
    </div>
  );
};

export default TodoItem;
