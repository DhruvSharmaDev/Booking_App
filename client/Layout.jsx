import React from 'react'
import  Header  from './src/components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen max-w-4xl mx-auto">
      <div>
    <Header />
    <Outlet />
    </div>
  </div>
  )
}

export default Layout