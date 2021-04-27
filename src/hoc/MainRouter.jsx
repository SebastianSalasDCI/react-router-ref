import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom';
import Navbar from '../component/Navbar';
import ContactUs from '../views/ContactUs/ContactUs';
import Dashboard from '../views/Dashboard/Dashboard';
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
import Profile from '../views/Profile/Profile';
import Register from '../views/Register/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export default function MainRouter() {

  //for testing being logged in
  const auth = true;
  
  // for testing not being logged in
  // const auth = false;

  return (
    <BrowserRouter>
        <Navbar auth={auth} />
        <div className="swicthCont">
          <Switch>
          <PublicRoute auth={auth} exact path="/" component={Home} />
          <PublicRoute auth={auth} restricted path="/login" component={Login} />
          <PublicRoute auth={auth} restricted path="/register" component={Register} />
          <PublicRoute auth={auth} path="/contactus" component={ContactUs} />
          <PrivateRoute auth={auth} path="/dashboard" component={Dashboard} />
          <PrivateRoute auth={auth} path="/profile" component={Profile} />
        </Switch>
        </div>
    </BrowserRouter>
  )
}
