//ToDoItem.jsx => Display single todo Call handlers on action

function TodoItem({ todo, startEditTodo, deleteTodo, toggleComplete }) {
  return (
    <>
      <li
        onClick={() => toggleComplete(todo.id)} // toggle completion when li clicked
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 border-b bg-white rounded-md shadow w-full cursor-pointer"
      >
        {/* Checkbox with title */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            onClick={(e) => e.stopPropagation()} // prevent double toggle on checkbox click
          />
          <h1
            className={`text-lg font-semibold ${todo.completed ? "line-through text-gray-400" : ""
              }`}
          >
            {todo.title}
          </h1>
        </div>

        {/* Description */}
        <p className={`text-gray-700 ${todo.completed ? "line-through" : ""}`}>
          {todo.description}
        </p>

        {/* Buttons in one row taking half width each */}
        <div className="flex gap-2 w-full">
          {/* Edit buttton */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent toggle when clicking edit
              startEditTodo(todo.id);
            }}
            className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md transition duration-150"
          >
            Edit
          </button>
          {/* delet button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent toggle when clicking delete
              deleteTodo(todo.id);
            }}
            className="w-1/2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow-md transition duration-150"
          >
            Delet
          </button>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
