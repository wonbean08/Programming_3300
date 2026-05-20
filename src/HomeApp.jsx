import { useState } from "react"
import CounterApp from './CounterApp'
import TodoListApp from "./TodoListApp"

function ButtonPageApp({ setPage }) {
    return (
        <>
            <h1>App목록</h1>
            <ul>
                {/* <div style={{width:'100px', fontSize:'1.5rem'}} 경우처럼 중괄호 두개면 json취급함. 그래서 원래는 width:100px이나 width:'100px'꼴로 따움표로 묶어줘야함. +카멜케이스 사용, ,로 끝냄*/}
                <li>
                    <button style={{ width: '200px', height: '200px', fontSize: '1.5rem' }}
                        onClick={() => setPage('counterapp')}>CounterApp</button></li>
                <li>
                    <button style={{ width: '200px', height: '200px', fontSize: '1.5rem' }}
                        onClick={() => setPage('todolistapp')}>TodoListApp</button></li>
            </ul>
        </>
    )
}

export default function HomeApp() {
    const [page, setPage] = useState('counterapp');

    return (
        <>
            {page === 'home' && <ButtonPageApp setPage={setPage} />}

            {/* page가 홈이 아니면, 즉 홈이 아닌 다른 곳에 잇을때 다시 홈으로 가기 위함. */}
            {page !== 'home' &&
                <button
                    onClick={() => setPage('home')}
                    style={{
                        position:"fixed",
                        left:"10px",
                        bottom:"10px",
                        cursor:"pointer",
                        borderRadius:"8px",
                        border:"none",
                        backgroundColor:"#eee",
                        padding:"6px"
                    }}
                >home sweet home</button>
            }

            {page === 'counterapp' && <CounterApp />}
            {page === 'todolistapp' && <TodoListApp />}
            {/*  */}
        </>
    )
}