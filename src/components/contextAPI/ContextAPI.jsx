import React from 'react'
import UserContextProvider from './UserContextProvider'
import Login from './childcomponents/Login'
import Profile from './childcomponents/Profile'
function ContextAPI() {
  return (

    // We can directly use <UserContext.Provider value={{}}> here but to keep the code clean we are using a separate component as a wrapper.
    <UserContextProvider>
    <div>
      <h1>ContextAPI Page</h1>
      <Login />
      <Profile />
    </div>
    </UserContextProvider>
  )
}

export default ContextAPI