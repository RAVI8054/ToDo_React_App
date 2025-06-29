//ToDoItem.jsx	=> Display single todo Call handlers on action
import React from "react";

function TodoItem({ todo, startEditTodo, deleteTodo }) {
  return (
    <>
      <li>
        <h1> {todo.title}:</h1>
        <p>{todo.description}</p>
        <button
          onClick={() => {
            startEditTodo(todo.id);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delet
        </button>
      </li>
    </>
  );
}

export default TodoItem;
