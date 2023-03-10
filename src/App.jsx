import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <div className="w-full py-8 h-[100%] overflow-x-hidden flex justify-start items-center flex-col">
        <Header title="Context Todo Application" />
        <Form />
        <Todos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
