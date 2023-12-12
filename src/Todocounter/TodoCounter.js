import { TodoContext } from "../TodoContext";
import "./TodoCounter.css"
import React from "react";

function TodoCounter (){

  const {
    loading,
    todoCompleted,
    todoTotal
  } = React.useContext(TodoContext)

  return(
    <>
      <h1>Todo List</h1>
      {loading ? 
        <h2>Estamos Cargando...</h2> : 
        <h2>Has completado <br></br><b>{todoCompleted}</b> de <b>{todoTotal}</b> TODOs</h2>}
    </>
  );
}

export { TodoCounter };