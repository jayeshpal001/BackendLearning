import React from 'react'
import { LoginPage } from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Navbar } from './components/Navbar'
import { Profile } from './pages/Profile'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App