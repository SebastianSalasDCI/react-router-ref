import React from 'react'
import {Route,Redirect} from 'react-router-dom'

export default function PublicRoute({path, component:Component, restricted, auth ,...rest}) {
  
  const login = auth;

  return (
    <Route  path={path} {...rest} >
      { login && restricted ?
        <Redirect to="/dashboard" />
        : <Component />
      }
    </Route>
  )
}
