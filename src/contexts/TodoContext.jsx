import { createContext, useReducer } from "react";

const reducerFun = (todos, action) => {
  switch (action.type) {
    case "addTodo": {
      return [
        {
          id: action.id,
          text: action.text,
        },
        ...todos,
      ];
    }

    case "deleteTodo": {
      return todos.filter((todo) => todo.id !== action.id);
    }

    default: {
      return todos;
    }
  }
};

const initialState = {
  todos: [],
};

export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducerFun, initialState.todos);

  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};
