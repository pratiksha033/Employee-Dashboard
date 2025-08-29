import React from 'react'
import { useAuth } from '../context/AuthContext';

import {Navigate} from 'react-router-dom'
const PrivateRoute = () => {
    const {user, loading} = useAuth()

    if(loading){
        <div>Loading....</div>
    }

  return user ? children : <Navigate to= "/login" />
}

export default PrivateRoute
