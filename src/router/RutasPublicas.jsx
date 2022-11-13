import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormLogin from '../componentes/FormLogin'
import FormRegister from '../componentes/FormRegister'
import Error404 from '../paginas/Error404'

const RutasPublicas = () => {
  return (
    <Routes>
        <Route path="/" element={<FormLogin /> } />
        <Route path="/FormRegister" element={<FormRegister /> } />
        <Route path="*" element={<Error404 /> } />
    </Routes>
  )
}

export default RutasPublicas