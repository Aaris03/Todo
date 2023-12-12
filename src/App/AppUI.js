import { TodoCounter } from '../Todocounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContainer } from '../TodoContainer/TodoContainer';
import { TodoLoading } from '../TodoLoadings/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { FormAdd } from '../FormAdd/FormAdd';
import React from 'react';

function AppUI (){
  const {
    todos,
    searchTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoContainer>
        <TodoList>
          {loading && <TodoLoading/>}
          {error && <TodoError/>}
          {(!loading && todos.length === 0) && <p>Crea tu primer TO DO</p>}
          {(!loading && searchTodos.length === 0 && todos.length > 0) && <p>No existe coincidencia</p>}

          {searchTodos.map(todo => (
            <TodoItem 
              key={todo.id} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </TodoContainer>
      
      <CreateTodoButton/>
      {openModal && 
        <Modal>
          <FormAdd></FormAdd>
        </Modal>
      }
    </>
  );
}

export {AppUI};