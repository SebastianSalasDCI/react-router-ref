import React from 'react'
import {Route,Redirect} from 'react-router-dom'

export default function PrivateRoute({path, component:Component,auth,...rest}) {

  const login = auth;

  return (
    <Route  path={path} {...rest} >
      { login ?
        <Component />
        : <Redirect to="/login" />
      }
    </Route>
  )
}
