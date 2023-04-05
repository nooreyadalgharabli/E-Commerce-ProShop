import React from 'react'
import { Navigate } from 'react-router-dom'

function NotAuthorize({children}) {
    if(!localStorage.getItem('profile')) {
        return <Navigate to='/login' replace />
    }
  return children
}

export default NotAuthorize