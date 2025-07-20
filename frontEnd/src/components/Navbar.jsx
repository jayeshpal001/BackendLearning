import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className='bg-black text-white flex p-3 justify-around'>
          <NavLink to="/"><h1 className='cursor-pointer hover:text-pink-400'>Home</h1> </NavLink>  
            <NavLink to="/login"> <h1 className='cursor-pointer hover:text-pink-400'>Login</h1></NavLink>
             <NavLink to="/register"><h1 className='cursor-pointer hover:text-pink-400'>Register</h1></NavLink>
             <NavLink to="/profile"><h1 className='cursor-pointer hover:text-pink-400'>Profile</h1></NavLink>
        </nav>
    </div>
  )
}
