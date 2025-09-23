import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => { 
// children is just a placeholder. Can give any name.
//children is a special prop, it is used to pass the components which are wrapped inside the provider. It is used to access the children components inside the provider component.
  
  const [user, setuser] = React.useState(null)
  return (
    // value is also a prop of the provider, passing object with different values.
    <UserContext.Provider value={{user, setuser}}>
    {children} 
     {/* children components will be rendered here    */}
    </UserContext.Provider>


// Provider wrapper
//  <userContext>  
//    <Card/>  {/*  Card component and all its children can access the data provided by the context as global data.     */}
// </userContext>
  )
}

export default UserContextProvider