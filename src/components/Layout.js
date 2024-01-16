import React from 'react'
import Navbar from './Navbar.js'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
<>

    <Navbar />
    <Outlet />
    </>
  )
}
