import React from 'react'
import { connect } from 'react-redux'
import {Navigate,Outlet} from 'react-router-dom'
function AuthProtect({ user: { token } }) {
  const jwtToken = localStorage.getItem('jwt') || token
    if (!jwtToken) {
        return <Navigate to={"/login"} />
    }
  return (
      <>
        <Outlet />
      </>
  )
}

export default connect((state) => ({
    user:state.user
}))(AuthProtect)