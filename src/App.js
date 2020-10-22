import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { NavItem } from './components/NavBar'
import { Menu } from './components/NavBar'
import { BrowserRouter as Router, Route} from 'react-router-dom'


import Login from './components/registrations/Login'
import Home from './components/Home'

const API = 'http://localhost:3001/api/v1/logged_in'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  handleLogin = (obj) => {
    this.setState({
      isLoggedIn: true,
      user: obj.user
    })
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  loginStatus = () => {
    fetch(API, {credentials: "include"})
    .then(resp => resp.json())
    .then(obj => {
      if (obj.logged_in) {
        this.handleLogin(obj)
      } else {
        this.handleLogout()
      }
    })
    .catch(err => console.log('api errors:', err ))
  }

  componentDidMount(){
    this.loginStatus()
  }



  render(props){
    console.log(this.state)
    return (
      <Router>
  
        <Route exact path="/home">
        {/* <NavBar>
          <NavItem icon={<i className="fas fa-bars"></i>}>
            <Menu/>
          </NavItem>
        </NavBar> */}
            <Route render={ (props) => <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>} />
        </Route>
  
        <Route exact path="/" render={(props) => < Login {...props} loggedInStatus={this.state.isLoggedIn} handleLogin={this.handleLogin} />  }/>
      </Router>
    );
  }
}


