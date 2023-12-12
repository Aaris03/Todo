import "./CreateTodoButton.css"
import React from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton (){

  const {
    openModalNow,
    openModal
  } = React.useContext(TodoContext);

  return(
    <button className={`add-todo-btn ${openModal && "btn-add-shadow"}`} type="button" onClick={openModalNow}>
      <p>+</p>
    </button>
  );
}

export { CreateTodoButton };