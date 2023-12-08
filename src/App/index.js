import React from 'react';
import { useLocalStorage } from './UseLocalStorage';
import { AppUI } from './AppUI';

function App() {

  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage("TODO_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  let todoCompleted = todos.filter(
    todo => !!todo.completed).length;
  let todoTotal = todos.length;

  const searchTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)

    todoTotal = newTodos.length;
    todoCompleted = newTodos.filter(todo => todo.completed).length;
  }

  return(
    <AppUI
      todoCompleted={todoCompleted}
      todoTotal={todoTotal}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
