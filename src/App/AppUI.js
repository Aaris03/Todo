import { TodoCounter } from '../Todocounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContainer } from '../TodoContainer/TodoContainer';
import { TodoLoading } from '../TodoLoadings/TodoLoading';
import { TodoError } from '../TodoError/TodoError';

function AppUI ({
    todoCompleted,
    todoTotal,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo,
    loading,
    error
}){
    return (
        <>
          <TodoCounter 
            completed={todoCompleted} 
            total={todoTotal} 
            loading={loading}/>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
          />
          <TodoContainer>
            <TodoList>
              {loading && <TodoLoading/>}
              {error && <TodoError/>}
              {(!loading && searchTodos.length == 0) && <p>Crea tu primer to do</p>}

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
    
        </>
    );
}

export {AppUI};