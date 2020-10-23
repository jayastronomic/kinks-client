import React, { Component } from 'react'
import KinksContainer from '../containers/KinksContainer.js'
import Logout from './Logout'
import Left from './home/Left'
import Feed from './home/Feed'
import Right from './home/Right'



export default class Home extends Component {







    render(){ 
        return(
            
            <div className="h-screen flex">
                <Left history={this.props.history} />
                <Feed />
                <Right user={this.props.username}/>
            </div>
        )
    }
}