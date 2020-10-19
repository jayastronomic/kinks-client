import React from 'react';
import NavBar from './components/NavBar'
import { NavItem } from './components/NavBar'
import { Menu } from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Login from './components/registrations/Login'
import Home from './components/Home'

export default function App(){


  return (
    <Router>

      <Route exact path="/home">
      <NavBar>
        <NavItem icon={<i className="fas fa-bars"></i>}>
          <Menu/>
        </NavItem>
      </NavBar>
      <Home />
      </Route>

      <Route exact path="/" render={() => < Login />  }/>
    </Router>
  );
}


