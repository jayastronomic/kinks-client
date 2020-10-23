import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import { connect } from 'react-redux'

//action creators
import { fetchAuthUserSuccess } from './actions/userActions'
import { isLoggedIn } from './actions/userActions'


import Login from './components/registrations/Login'
import Home from './components/Home'

const API = 'http://localhost:3001/api/v1/logged_in'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  handleLogin = (obj) => {
    if (obj) {
      const bool = true
      this.props.isLoggedIn(bool)
      this.props.fetchAuthUserSuccess(obj.user)
    }
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



  render(){
    console.log(this.props)
    return (
      <Router>
  
        <Route exact path="/home">
            <Route render={ (props) => <Home {...props} {...this.props.authUser} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>} />
        </Route>
  
        <Route exact path="/" render={(props) => < Login {...props} loggedInStatus={this.state.isLoggedIn} handleLogin={this.handleLogin} />  }/>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    loggedInStatus: state.loggedInStatus
  }
}

const mapDispatchToProps = {
  fetchAuthUserSuccess,
  isLoggedIn
}


export default connect(mapStateToProps, mapDispatchToProps)(App);


