import Button from "./Button"


export default function TodoAdder() {
    return (
        <>
            <form className="todo_form">
                <input type="text" placeholder="할일입력" className="todo_input" />
                <Button className="todo_button todo_button--add" type="submit">add</Button>
            </form>

        </>
    )
}