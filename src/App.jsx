import { useState } from "react";
import ToDoList from "./Componets/ToDoList";
import useEventHandler from "./Componets/EventHandler";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // custom hook for handle functions
  const eventFunctions = useEventHandler({
    todos,
    setTodos,
    editingId,
    setEditingId,
  });

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Header />
      <div className="flex-grow">
        <ToDoList
          todos={todos}
          setTodos={setTodos}
          editingId={editingId}
          setEditingId={setEditingId}
          {...eventFunctions}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
