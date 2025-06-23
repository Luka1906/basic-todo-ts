import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

type TodoProps = {
  items: Todo[],
  onDeleteToDo: (id:string) => void


};
const Todos = ({ items, onDeleteToDo }: TodoProps) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} id={item.id} onDelete={onDeleteToDo} />
      ))}
    </ul>
  );
};

export default Todos;
