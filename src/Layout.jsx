import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'

const Layout = () => {
  return (
    <>
     <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
