import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Buscador from '../componentes/Buscador'
import NavBar from '../componentes/NavBar'
import Details from '../paginas/Details'
import Error404 from '../paginas/Error404'
import Home from '../paginas/Home'

const RutasPrivadas = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search/:query" element={<Buscador />} />
      </Routes>
    </>
  )
}

export default RutasPrivadas