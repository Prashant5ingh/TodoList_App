import React,{useState, useContext} from 'react'
import UserContext from '../UserContext'

function Profile() {

const {user} = useContext(UserContext) // Destructuring the user object from the context to access the user state in the provider. 
console.log(user);
  if(!user || user.name=="") return (<>Please Login !!!</>)
    return(
        <>
        <h1>Profile Component</h1>
        Welcome {user.name} !!!
        </>)
    
}

export default Profile