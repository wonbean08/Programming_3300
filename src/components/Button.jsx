export default function Button(props){
    //children <= props.children rest <= props.type, props.classname
    const {children, ...rest}=props;
    return(
        <button {...rest}>{children}</button>
    )
}