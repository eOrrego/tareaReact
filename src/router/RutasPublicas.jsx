import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../paginas/Error404'
import Login from '../paginas/Login'

const RutasPublicas = () => {
  return (
    <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="*" element={<Error404 /> } />
    </Routes>
  )
}

export default RutasPublicas