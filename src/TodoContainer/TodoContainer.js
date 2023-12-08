import "./TodoContainer.css"

function TodoContainer(props){
    return(
        <div className="mainContainer">
            {props.children}
        </div>
    )
}

export {TodoContainer}