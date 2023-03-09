import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoMdAdd } from "react-icons/io";
import { TodoContext } from "../contexts/TodoContext";

export const Form = ({ addTodo }) => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!text || text.length < 4) return;
    dispatch({
      type: "addTodo",
      id: uuidv4(),
      text: text,
    });
    setText("");
  };
  return (
    <>
      <form
        onSubmit={handleAddTodo}
        className="w-[300px] border-2 border-green-400 rounded-lg p-6"
      >
        <div className="flex justify-center items-center">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-[85%] p-2 rounded-sm bg-slate-600 outline-none text-white"
          />
          <button
            type="submit"
            className="w-[15%] p-3 ml-4 transition-all duration-500 outline-none ease-in bg-green-400 hover:bg-green-300 flex justify-center items-center rounded-sm text-base"
          >
            <IoMdAdd color="#000" />
          </button>
        </div>
      </form>
    </>
  );
};
