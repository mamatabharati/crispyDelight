import React from 'react'
import {Navigate,Outlet} from 'react-router-dom';

export default function ProtectedRouting(){

    const isAuth=window.localStorage.getItem("TokenValue");

    return(
        isAuth?<Outlet/>:<Navigate to='/linkAccount'/>
    )
}