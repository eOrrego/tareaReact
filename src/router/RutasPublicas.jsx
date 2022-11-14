import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FormLogin from '../componentes/FormLogin'
import FormRegister from '../componentes/FormRegister'
import Error404 from '../paginas/Error404'

const RutasPublicas = () => {
  return (
    <Routes>
        <Route path="/login" element={<FormLogin /> } />
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/register" element={<FormRegister /> } />
        <Route path="*" element={<Error404 /> } />
    </Routes>
  )
}

export default RutasPublicas