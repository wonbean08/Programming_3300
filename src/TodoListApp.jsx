function TodoListApp() {
    return (
        <div>
            <h1>T^T</h1>
            <form>
                <input type="text" placeholder="할 일을 입력하세요" />
                <button type="submit">add</button>
            </form>

            <ul>
                <li>
                    <input type="checkbox" name="" id="chk-1" />
                    <label htmlFor="chk-1"></label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </ul>
        </div>
    );
}

export default TodoListApp;