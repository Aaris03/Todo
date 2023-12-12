import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
      } = useLocalStorage("TODO_V1", []);
      
      const [searchValue, setSearchValue] = React.useState("");

      const [openModal, setOpenModal] = React.useState(false);
    
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

      const addTodo = (text) => {
        let newId;
        const newTodos = [...todos]
        
        if (newTodos.length !== 0) {
          const lastTodoId = newTodos.slice(-1)
          newId = (lastTodoId[0].id)+1
        } else {
          newId = 1
        }
      
        newTodos.push({
          text,
          completed:false,
          id: newId
        }) 
        saveTodos(newTodos);
      }
    
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

      const openModalNow = () => {
        setOpenModal(!openModal)
      }

    return(
        <TodoContext.Provider value={{
            todos,
            todoCompleted,
            todoTotal,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            openModalNow,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>  
    );
}

export {TodoContext, TodoProvider};