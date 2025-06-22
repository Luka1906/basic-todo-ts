type ItemProps = {
    text: string,
}
const TodoItem = ({text}:ItemProps) => {
  return <li>{text}</li>;
};

export default TodoItem
