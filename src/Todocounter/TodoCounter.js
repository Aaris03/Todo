import "./TodoCounter.css"

function TodoCounter ({
  total, 
  completed,
  loading
}){
    return(
      <>
        <h1>Todo List</h1>
        {loading ? 
          <h2>Estamos Cargando...</h2> : 
          <h2>Has completado <br></br><b>{completed}</b> de <b>{total}</b> TODOs</h2>}
      </>
    );
}

export { TodoCounter };