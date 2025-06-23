import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addToDoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(prevTodo => [...prevTodo, newTodo])
  }
 
  const deleteToDoHandler = (id:string) => {
    setTodos((prevTodos => prevTodos.filter(todo => todo.id !== id)))
  }
  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler}/>
      <Todos items={todos} onDeleteToDo = {deleteToDoHandler} />

    </div>
  );
}

export default App;
