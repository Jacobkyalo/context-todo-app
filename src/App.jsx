import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <div className="w-full pt-8 h-[100vh] bg-slate-800 overflow-hidden flex justify-start items-center flex-col">
        <Header title="Context Todo Application" />
        <Form />
        <Todos />
      </div>
    </TodoContextProvider>
  );
}

export default App;
