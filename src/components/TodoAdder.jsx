import { useState } from "react"
import Button from "./Button"


export default function TodoAdder({addTodo}) {
    const [inputTodo, setInputTodo]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!inputTodo) return;
        addTodo(inputTodo.trim());
        setInputTodo("");
    }
    return (
        <>
            <form className="todo_form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="할일입력" 
                className="todo_input" 
                onChange={(event) => setInputTodo(event.target.value)}
                />
                <Button className="todo_button todo_button--add" type="submit">add</Button>
            </form>

        </>
    )
}