import React from 'react'
import { useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
function AddTodo() {  // using usedispatch

  const [input, setInput] = React.useState('')
  const dispatch = useDispatch() // adds or changes value to the store using reducers
  // useDispatch and useSelector are use to connect react with redux store (wiring between react and redux)

  const addTodoHandler = (e) => {
    e.preventDefault();
     if(input === '') return;
    dispatch(addTodo(input))
    setInput('') // to clear input field after adding a todo
  }
  return (
     <form onSubmit={addTodoHandler} className="space-x-3 mt-16">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo