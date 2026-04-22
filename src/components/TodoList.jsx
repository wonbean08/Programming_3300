import TodoItemEmpty from "./TodoItemEmpty"
import TodoItem from "./TodoItem"

export default function TodoList({todos}) {
    return (
        <>
            <ul className="todo_list">
                {/* {todosㅇ 값이 없으며 todoItemEmpty} */}
                {todos.length===0 &&<TodoItemEmpty />}

                {/* {todosㅇ 값이 잇으면 todoItem에 todo를 넣음} */}
                {todos.length>0 &&  
                    todos.map( (todo) =>
                        <TodoItem key={todo.id} todo={todo}/>
                    )
                    
                }
            </ul>
        </>
    )
}