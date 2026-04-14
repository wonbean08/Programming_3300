import Checkbox from "./Checkbox"
import Button from "./Button"

export default function TodoItem() {
    return (
        <>
            <li className="todo_item">
                <Checkbox id="1" />
                <Button className="todo_button todo_button--edit">✏️</Button>
                <Button className="todo_button todo_button--delete">❌</Button>
            </li>
        </>
    )
};