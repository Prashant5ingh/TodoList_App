import React, {useState, useContext} from 'react'
import UserContext from '../UserContext.js'


function Login() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    // setUser will update the setName in the provider component and store it globally.
    const {setuser} = useContext(UserContext) // Destructuring the setUser function from the context to update the user state in the provider. setUser stores the variables globally then use it or update anywhere in the app.
    
    const handleSubmit = (e) => {
        e.preventDefault() // Prevents the default action of the form submission which is to refresh the page.
        setuser({
            name, // Shorthand for name: name
            password // Shorthand for password: password
        })
        

    }
  return (
    <div>
        <h2>Login Component</h2>
        <input type="text"
        value={name} 
        onChange={(e) => setName(e.target.value) }
        placeholder='Enter Name' />
        {"        "}
        <input type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value) }
        placeholder='Enter Password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )

}

export default Login