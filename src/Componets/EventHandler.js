import { useCallback } from "react";

function useEventHandler({ todos, setTodos, setEditingId }) {
  //--deleteTodo-----------------------------------
  const deleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos, setTodos]
  );

  //--editTodo--------------------
  const startEditTodo = (id) => {
    setEditingId(id); // 👈 Set editing ID to trigger edit mode in UI
  };

  // ---------------------toggle--------------
  function toggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  
  return { deleteTodo, startEditTodo , toggleComplete};
}

export default useEventHandler;
