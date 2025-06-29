import { useCallback } from "react";

function useEventHandler({ todos, setTodos, editingId, setEditingId }) {
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

  return { deleteTodo, startEditTodo };
}

export default useEventHandler;
