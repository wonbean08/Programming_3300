import './todoList.css'

import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoList from './components/TodoList.jsx'
import { useState } from 'react';

class Todo{
    constructor(text, isCompleted){
        this.id=Date.now();
        this.text=text;
        this.isCompleted=isCompleted;
    }
}

function TodoListApp() {

    const [todos, setTodos]=useState([]);
    const addTodo = (text) => setTodos((todos) => [
        ...todos,new Todo(text)
    ])

    return (
        <div className="todo">
            <TodoHeader/>
            <TodoAdder/>
            <TodoList/>
        </div>
    );
}

export default TodoListApp;