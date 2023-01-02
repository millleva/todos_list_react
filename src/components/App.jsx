import React, { useState } from "react";

// components
import TodoItem from "./TodoItem";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Clean hands", desc: "go to vanna", completed: false },
    { id: 2, title: "Wash dishes", desc: "go to kitchen", completed: false },
    { id: 3, title: "Do homework", desc: "go to lounge", completed: false },
  ]);

  return (
    <div className="App">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default App;
