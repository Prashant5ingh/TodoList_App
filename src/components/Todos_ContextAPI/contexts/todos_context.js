import { createContext, useContext  } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "Todo Msg",
            completed: false,
        } // Every todo will be an object
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    // All these method functionality will be defined in the Todos.jsx file where the state is defined.  
})


export const useTodo = () =>{
    return useContext(TodoContext) // useContext needs to give a context object
}

export const Todoprovider = TodoContext.Provider