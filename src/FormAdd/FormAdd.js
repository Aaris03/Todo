import "./FormAdd.css"
import { TodoContext } from "../TodoContext";
import React, { useState } from "react";

function FormAdd(){

    const {
        addTodo,
        openModalNow,
      } = React.useContext(TodoContext);

    const [newTodoValue, setnewTodoValue] = useState("");

    const newTodoText = (e) => {
        setnewTodoValue(e.target.value)
    }
    
    const todoSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        openModalNow();
    }

    return(
        <form className="add-todo" onSubmit={todoSubmit}>
            <strong>Escribe tu nuevo TODO</strong>
            <textarea 
                placeholder="¡Escribelo aqui!"
                value={newTodoValue}
                onChange={newTodoText}
            ></textarea>
            <div className="row-modal">
                <button className="cancel-btn" type="button" onClick={openModalNow}>
                    <strong>Cancelar</strong>
                </button>
                <button 
                className="submit-btn" 
                type="submit"
                disabled={newTodoValue==="" && true}
                >
                    <strong>Añadir</strong>
                </button>
            </div>
        </form>
    )
}

export {FormAdd}