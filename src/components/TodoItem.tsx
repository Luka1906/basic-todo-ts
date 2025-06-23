import classes from "./TodoItem.module.css";

type ItemProps = {
  text: string;
  id: string;
  onDelete: (id: string) => void;
};
const TodoItem = ({ text, id, onDelete }: ItemProps) => {
  return (
    <li onClick={() => onDelete(id)} className={classes.item}>
      {text}
    </li>
  );
};

export default TodoItem;
