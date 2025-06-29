//ToDoList.jsx => UI for add/edit forms Render todo list
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useRef } from "react"; // 👈 added useEffect and useRef
import TodoItem from "./TodoItem";

function ToDoList({
  todos,
  setTodos,
  deleteTodo,
  startEditTodo,
  editingId,
  setEditingId,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef(null); // 👈 for focusing input

  // 👇 Autofill input fields when editing
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

  // 👇 Unified handler for add & update
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
      // 👇 Update mode
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
      <div>
        <input
          ref={inputRef} // 👈 Focus input when editing
          type="text"
          onChange={(e) => {
            setTitle(e.target.value.trim());
          }}
          value={title}
          placeholder="add title"
        />
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value.trim());
          }}
          value={description}
          placeholder="add  description"
        />
        <button onClick={addTodo}>
          {editingId ? "Update" : "Add"} {/* 👈 Toggle button text */}
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            startEditTodo={startEditTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
