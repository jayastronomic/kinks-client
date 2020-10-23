import React, { Component } from 'react'
import KinksContainer from '../containers/KinksContainer.js'
import arr from '../data'
import Logout from './Logout'
import Left from './home/Left'
import Feed from './home/Feed'
import Right from './home/Right'



export default class Home extends Component {







    render(){ 
        return(
            
            <div className="overscroll-none h-screen flex ">

                {/* sidebar left */}
                <Left history={this.props.history} handleLogout={this.props.handleLogout} loggedInStatus={this.props.loggedInStatus} />

                {/* Feed */}
                <Feed />
    
                {/* sidebar right */}
                <Right />
            </div>
        )
    }
}