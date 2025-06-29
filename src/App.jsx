import { useState } from "react";
import ToDoList from "./Componets/ToDoList";
import useEventHandler from "./Componets/EventHandler";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  //custom hook for handle functions
  const eventFunctions = useEventHandler({
    todos,
    setTodos,
    editingId,
    setEditingId,
  });
  return (
    <>
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        editingId={editingId}
        setEditingId={setEditingId}
        {...eventFunctions}
      />
    </>
  );
}

export default App;
