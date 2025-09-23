import React, { useEffect, useState } from 'react'
import { Todoprovider } from './contexts'
import { TodoForm, TodoItem } from './components'

function Todos() {

    const [todos, setTodos] = useState([]) // empty array needed while using loop
  
    const addTodo = (todo) => {

        // id:date.now()
        setTodos((prev) => [{id: Math.random(), ...todo},...prev]) // to store the old or all previous value along with latest value in array.
    } // to add individual todos
  
   const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
   }

   const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
   }

   const toggleComplete = (id) => {
    setTodos((prev) => 
        prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
   }


   // Local storage values can be fetched by useEffect() when page is loaded 1st time or everytime. Use to fill the LS data in todo or table whenever page is loaded.
   useEffect(() => {
    
    const todos = localStorage.getItem("todos") // 1st we need to getItems is neccesary. JSON.parse convert string into js
    if (todos && todos !== 'undefined') {
      if (JSON.parse(todos) && JSON.parse(todos).length > 0) { // if todos array have any element or not
        setTodos(JSON.parse(todos))
      }
    }
    // if(localTodo && localTodo.length > 0) // if todos array have any element or not
    //   {
    //     setTodos(localTodo)
    //   }

}, [])


// application can have more than 1 useEffect() and here we are adding values to the localstorage as todos values reflected from provider to todos var
useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todos)) // array to string
},[todos])


    return (
    <Todoprovider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm></TodoForm>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* curly braces needs return keyword instead use () --> auto return */}
                        {todos.map((todo) => ( // avoid giving index value "todo" as key in div
                            // key is use to make every div unique 
                            <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                            </div>
                        ))}  
                    </div>
                </div>
            </div>
  
  </Todoprovider>
  )
}

export default Todos