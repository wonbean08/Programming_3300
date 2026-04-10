export default function Checkbox(props) {
    const {id, ...rest}=props;
    return (
        <>
            <input type="checkbox" name="" id={`chk-${id}`} className="todo_check" />
            <label htmlFor={`chk-${id}`} className="todo_label">생각</label>
        </>
    )
}