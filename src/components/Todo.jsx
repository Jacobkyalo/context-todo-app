import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoContext } from "../contexts/TodoContext";

export const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const upperCaseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <li className="flex justify-between items-center mb-3 bg-slate-700 p-2 rounded-lg">
        <p className="text-base text-white">
          {upperCaseFirstLetter(todo.text)}
        </p>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "deleteTodo",
              id: todo.id,
            })
          }
        >
          <MdDeleteForever color="#dc2626" size={30} />
        </button>
      </li>
    </>
  );
};
