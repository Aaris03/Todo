import "./TodoSearch.css"
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch (){

  const {
    searchValue, 
    setSearchValue,
    loading
  } = React.useContext(TodoContext)  

  return(
    <input 
      className="searching-input"
      placeholder="Busca una tarea"
      disabled={loading}
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value)
      }}
    />
  );
}

export { TodoSearch };