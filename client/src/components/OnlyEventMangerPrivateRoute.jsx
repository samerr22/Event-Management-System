import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function OnlyEventMangerPrivateRoute() {

    const { currentUser } = useSelector((state) => state.user);
    return currentUser &&  currentUser.isEventManger ? <Outlet/> : <Navigate to='/sign-in'/>
  
}
 