import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type TodoProps = {
  items: Todo[];
};
const Todos = ({ items }: TodoProps) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
