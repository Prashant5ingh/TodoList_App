import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import { Outlet } from 'react-router-dom'

// This whole work can be done in app.jsx file but we are doing it here to keep the code clean and organized.
// Outlet is used to render the child components of the current route.
// Outlet will keep on changing as the route changes.
// This is the layout component which will be used to wrap the whole application.
function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout