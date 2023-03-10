import { useContext } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { IoMdAdd } from "react-icons/io";
import { TodoContext } from "../contexts/TodoContext";

export const Form = () => {
  const { dispatch } = useContext(TodoContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "",
    },
  });
  const onSubmit = (data) => {
    dispatch({ type: "addTodo", id: uuidv4(), text: data.text });
    data.text = "";
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[300px] border-2 border-green-400 rounded-lg p-6"
      >
        <div className="flex justify-center items-center">
          <input
            type="text"
            {...register("text", {
              required: true,
              minLength: 4,
            })}
            className="w-[85%] p-2 rounded-sm bg-slate-600 outline-none text-white"
          />

          <button
            type="submit"
            className="w-[15%] p-3 ml-4 transition-all duration-500 outline-none ease-in bg-green-400 hover:bg-green-300 flex justify-center items-center rounded-sm text-base"
          >
            <IoMdAdd color="#000" />
          </button>
        </div>
        {errors.text && (
          <p className="text-red-600">Enter a valid text or todo</p>
        )}
      </form>
    </>
  );
};
