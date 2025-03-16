import React from 'react'
import Dashboard from './pages/Dashboard'
import {  Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import { Over } from './pages/Over'

const App = () => {
  return (
    // <Dashboard/>

  
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/overview' element={<Over/>}/>
    </Routes>

  )
}

export default App