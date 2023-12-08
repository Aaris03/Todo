import "./CreateTodoButton.css"

function CreateTodoButton (){
    return(
      <button type="button" onClick={(e) => {console.log(e)}}>
        <p>+</p>
      </button>
    );
}

export { CreateTodoButton };