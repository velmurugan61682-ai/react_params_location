import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <>
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">VEL APP</h1>

        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-cyan-400 rounded p-1">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 rounded p-1">About</Link>
        </div>
      </div>
    </nav>
  

    </>
  )
}

export default Nav