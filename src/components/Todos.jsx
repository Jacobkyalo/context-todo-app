import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Todo } from "./Todo";

export const Todos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.length > 0 && (
        <div className="w-[350px] bg-slate-600 p-4 mt-5 rounded-md">
          <ul className="list-none">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
