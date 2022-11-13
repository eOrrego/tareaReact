import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error404 from '../paginas/Error404'
import Home from '../paginas/Home'

const RutasPrivadas = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/home" replace={true} /> } />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default RutasPrivadas