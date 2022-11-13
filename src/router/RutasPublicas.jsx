import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../paginas/Error404'
import Home from '../paginas/Home'
import Login from '../paginas/Login'

const RutasPublicas = () => {
  return (
    <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="*" element={<Error404 /> } />
        <Route path="/home" element={ <Home /> } />
    </Routes>
  )
}

export default RutasPublicas