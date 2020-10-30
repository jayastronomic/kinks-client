import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// connects to redux store
import { connect } from 'react-redux'

//action creators
import { fetchAuthUserSuccess } from './actions/userActions'
import { isLoggedIn } from './actions/userActions'
import { removeAuthUser } from './actions/userActions'

// components
import Login from './components/registrations/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import PostModal from './components/PostModal';

const API = 'http://localhost:3001/api/v1/logged_in'

class App extends Component {
 
  handleLogin = (obj) => {
    this.props.fetchAuthUserSuccess(obj.user)
    this.props.isLoggedIn(obj.logged_in)
  }
  handleLogout = (obj) => {
    this.props.removeAuthUser(obj.user)
    this.props.isLoggedIn(obj.logged_in)
  }

  loginStatus = () => {
    fetch(API, {credentials: "include"})
    .then(resp => resp.json())
    .then(obj => {
      if (obj.logged_in) {
        this.handleLogin(obj)
      } else {
        this.handleLogout(obj)
      }
    })
    .catch(err => console.log('api errors:', err ))
  }

  componentDidMount(){
    this.loginStatus()
  }



  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/home" render={ (props) => <Home {...props} {...this.props.authUser}  /> } />
          <Route exact path="/" render={(props) => <Login {...props}  handleLogin={this.handleLogin} />  } />
          <Route exact path="/profile" render={(props) => <Profile {...props } /> } />
          <Route path="/compose/kink" render={ () => <PostModal />}/>
        </Switch>
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
  isLoggedIn,
  removeAuthUser
}


export default connect(mapStateToProps, mapDispatchToProps)(App);


