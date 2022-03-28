import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState(["Mustafa", "Ihsan", "Kabakcili"]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div className="App">
      <ToastContainer />
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
