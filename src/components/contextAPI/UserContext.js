import React from 'react'

// function userContext() {
//   return (
//     <div>userContext</div>
//   )
// }
let UserContext = React.createContext() // Create a context object --> It will be used to pass data through the component tree without having to pass props down manually at every level
// Context is a provider which provides variables to the components which are wrapped inside the provider
// It is used when some data needs to be accessible by many components at different nesting levels.

// It can be used to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.
// It is used to avoid prop drilling, which is the process of passing data through many levels of components.

export default UserContext;

