import "./TodoSearch.css"

function TodoSearch ({
  searchValue, 
  setSearchValue,
  loading
  }){
  return(
    <input 
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