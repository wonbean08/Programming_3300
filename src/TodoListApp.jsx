import './todoList.css'

function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo_title">T^T</h1>
            <form className="todo_form">
                <input type="text" placeholder="할일입력" className="todo_input"/>
                <button className="todo_button todo_button--add" type="submit">add</button>
            </form>

            <ul className="todo_list">
                <li className='todo_item todo_form'>
                    <p>할일없음</p>
                </li>
                <li className="todo_item">
                    <input type="checkbox" name="" id="chk-1" className="todo_check"/>
                    <label htmlFor="chk-1" className="todo_label">check</label>
                    <button className="todo_button todo_button--edit">✏️</button>
                    <button className="todo_button todo_button--delete">❌</button>
                </li>
            </ul>
        </div>
    );
}

export default TodoListApp;