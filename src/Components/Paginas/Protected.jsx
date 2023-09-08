import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = ({
    active,
    redirectPath='/'
}) => {
    if(active){
        return<Navigate to={redirectPath} replace/>
    }
  return (
    <Outlet/>
  )
}

export default Protected