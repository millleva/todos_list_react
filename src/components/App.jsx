import React, { useState } from "react";

// components
import TodoItem from "./todos/TodoItem";

// styles
import "../styles/App.css";
import TodoHeading from "./todos/TodoHeading";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Clean hands", desc: "go to vanna", state: false },
    { id: 2, title: "Wash dishes", desc: "go to kitchen", state: false },
    { id: 3, title: "Do homework", desc: "go to lounge", state: false },
  ]);

  return (
    <div className="App">
      <TodoHeading />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default App;
