import React from 'react'
import { Navigate } from 'react-router-dom'

function Authorization ({children}) {
    if(localStorage.getItem('profile')) {
      const id = JSON.parse(localStorage.getItem('profile'))._id;
        return <Navigate to={`/profile/${id}`} replace />

    }
  return children
}

export default Authorization