import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgChange from './components/bgchange.jsx'

import PasswordGen from './components/passwordGen.jsx'

import Currency from './components/currency_conv_proj/currency.jsx'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/react_router/Layout.jsx'
import Home from './components/react_router/Home/Home.jsx'
import About from './components/react_router/About/About.jsx'
import Contact from './components/react_router/Contact/Contact.jsx'
import User from './components/react_router/User/User.jsx'
import Github, { githubInfoLoader } from './components/react_router/Github/Github.jsx'
import NotFound from './components/react_router/Home/NotFound.jsx'
import ContextAPI from './components/contextAPI/ContextAPI.jsx'
import ThemeContextAPI from './components/contextAPI/contextAPI_Project/ThemeContextAPI.jsx'
// import Todos from './components/Todos_ContextAPI/Todos.jsx'
import AddTodo from './components/Redux-toolkit/main_react-redux/AddTodo.jsx'
import Todos from './components/Redux-toolkit/main_react-redux/Todos.jsx'


function App() {

  // Complex way of creating router
  // const router = createBrowserRouter([ // only 2 parameters are required, path and element but we can also add children to the route. 
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children:[
  //       {
  //         path:"",
  //         element: <Home />
  //       },
  //       {
  //         path:"about",
  //         element: <About />
  //       },
  //       {
  //         path:"contact",
  //         element: <Contact />
  //       }

  //     ]
  //   }

  // ])

  // Easy way of creating router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>

        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* url is sending back the id as a parameter and we are using useParams to get that id */}
        <Route path="users/:id" element={<User />} />

        <Route
          loader={githubInfoLoader} // loader is used to fetch the data before the component is rendered, it will be called before the component is mounted.
          path="github" element={<Github />} />


        {/* NotFound component is not created yet, so it will throw an error if we try to access it */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )


  return (
    <>
      {/* <BgChange /> */}
      {/* <PasswordGen /> */}
      {/* <Currency />  */}
      {/* <ContextAPI /> */}
      {/* <ThemeContextAPI/> */}
      {/* <Todos /> */}

      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />

      {/* <RouterProvider router={router} />  */}
    </>
  )
}

export default App
