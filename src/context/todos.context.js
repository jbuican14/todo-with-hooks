// todos and all methods 
import React, { createContext } from 'react';
import { useLocalStorageStateReducer } from '../reducers/useLocalStorage.reducer';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  {id:1, task: "clean up and tidy up"},
  {id:2, task: "study and be positive"}
]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {

  // const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(defaultTodos)
  // const todosStuff = useTodoState(defaultTodos)
  const [todos, dispatch ] = useLocalStorageStateReducer("todos", defaultTodos, todoReducer)

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}