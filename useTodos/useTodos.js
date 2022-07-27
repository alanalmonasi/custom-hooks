import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || []; //Comes from de useReducer, its how pur app init
}

export const useTodos = (initial = []) => {
   
   const [todos, dispatch] = useReducer(todoReducer, initial, init);

   useEffect(() => { //Set localstorage everytime todos change
      localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])

   const handleNewTodo = (todo) => { 
      dispatch({
         type: 'Add todo',
         payload: todo
      })
   }

   const handleDeleteTodo = (id) => {
      dispatch({
         type: 'Remove todo',
         payload: id,
      });
   }

   const handleToggleTodo = (id) => {
      dispatch({
         type: 'Toggle todo',
         payload: id,
      });
   }

   return {
      todos,
      handleDeleteTodo,
      handleNewTodo,
      handleToggleTodo,
      todosCount: todos.length,
      pendingTodos: todos.filter(todo => { return !todo.done}).length
   }
}
