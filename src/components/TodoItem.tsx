import classes from  "./TodoItem.module.css"

const TodoItem: React.FC<{ text: string; onRemoveTodo: (event: React.MouseEvent) => void  }>= (props) => {
    return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
}
export default TodoItem;