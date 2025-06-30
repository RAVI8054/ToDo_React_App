//ToDoList.jsx => UI for add/edit forms Render todo list

import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useRef } from "react"; // added useEffect and useRef
import TodoItem from "./ToDoItem";

function ToDoList({
  todos,
  setTodos,
  deleteTodo,
  startEditTodo,
  editingId,
  setEditingId,
  toggleComplete,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef(null); //  for focusing input

  //  Autofill input fields when editing
  useEffect(() => {
    if (editingId) {
      const todoToEdit = todos.find((todo) => todo.id === editingId);
      if (todoToEdit) {
        setTitle(todoToEdit.title);
        setDescription(todoToEdit.description);
        inputRef.current?.focus();
      }
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingId, todos]);

  //  Unified handler for add & update
  function addTodo() {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }
    if (!description.trim()) {
      alert("Description is required");
      return;
    }

    if (editingId) {
      // Update mode
      setTodos(
        todos.map((todo) =>
          todo.id === editingId
            ? { ...todo, title: title.trim(), description: description.trim() }
            : todo
        )
      );
      setEditingId(null);
    } else {
      // 👇 Add mode
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: title.trim(),
          description: description.trim(),
          completed: false,
        },
      ]);
    }

    setTitle("");
    setDescription("");
  }

  return (
    <>
      {/* Grid layout for inputs */}
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 items-start">
        <input
          className="border border-teal-300 rounded-md
 text-gray-700 bg-gray-50 focus:ring-2 focus:ring-teal-500 px-2 py-1 w-full"
          ref={inputRef} //  Focus input when editing
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="add title"
        />
        <input
          className="border border-teal-300 rounded-md
 text-gray-700 bg-gray-50 focus:ring-2 focus:ring-teal-500 px-2 py-1 w-full"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="add description"
        />
        {editingId ? (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md shadow transition duration-150 w-full"
            onClick={addTodo}
          >
            Update
          </button>
        ) : (
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded shadow-md transition duration-150 w-full"
            onClick={addTodo}
          >
            Add
          </button>
        )}
      </div>

      {/* Render todo list in same 3-column grid */}
      <ul className="w-10/12 mx-auto">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            startEditTodo={startEditTodo}
            toggleComplete={toggleComplete} // pass toggleComplete here
          />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
