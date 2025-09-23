import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {

    const [todo,setTodo]=useState("") // State for Individual todo
  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()
    if(!todo) return
    
     // todo is a single object contains all 3 key value pair.
    // todo:todo --> when key and value both are same then we can write single time only. 
    addTodo({todo, completed:false}) // Passing object as objs are there inside array. Look at addTodo array and obj spreading in todos.jsx file.
    setTodo("") // to clear the input field after adding todo  
}
  
    return (
    <div>
         <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // wiring of state to input field
                onChange={(e)=>{
                    setTodo(e.target.value )
                }}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    </div>
  )
}

export default TodoForm