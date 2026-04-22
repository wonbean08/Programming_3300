import Checkbox from "./Checkbox"
import Button from "./Button"

export default function TodoItem({todo}) {
    return (
        <>
            <li className={`todo_item${todo.isCompleted ? "todo_item--complete" : ""}`}>
                <Checkbox id={todo.id}>{todo.text}</Checkbox>
                <Button className="todo_button todo_button--edit">✏️</Button>
                <Button className="todo_button todo_button--delete">❌</Button>
            </li>
        </>
    )
};