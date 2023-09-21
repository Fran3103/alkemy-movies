import React from 'react'
import {  Outlet } from 'react-router-dom'

const Protected = ({
    active,
    redirectPath='/'
}) => {
  
  return (
    <Outlet/>
  )
}

export default Protected