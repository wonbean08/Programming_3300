import TodoItemEmpty from "./TodoItemEmpty"
import TodoItem from "./TodoItem"

export default function TodoList() {
    return (
        <>
            <ul className="todo_list">
                <TodoItemEmpty />
                <TodoItem />
            </ul>
        </>
    )
}