import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {NavLink, Redirect} from 'react-router-dom'

export default function MainNavbar(props) {

  const auth = props.auth;

  return (
    <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
      <Navbar.Brand>ReactRouterApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" exact activeClassName="active" to="/" >Home</NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/contactus" >ContactUs</NavLink>
          {auth ?
          <>
            <NavLink className="nav-link" activeClassName="active" to="/dashboard" >Dashboard</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/profile" >Profile</NavLink>
            <NavLink className="nav-link" exact to="/" onClick={()=><Redirect to="/" />} >Logout</NavLink>
          </>
          :
          <>
            <NavLink className="nav-link" activeClassName="active" to="/register" >Register</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/login" >Login</NavLink>
          </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
