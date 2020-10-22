import React, { Component } from 'react'
import KinksContainer from '../containers/KinksContainer.js'
import arr from '../data'
import Logout from './Logout'

const API = 'http://localhost:3001/api/v1/logout'

export default class Home extends Component {



    handleClick = () => {
        fetch(API, {method: 'DELETE', credentials: 'include'} )
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
            this.props.handleLogout();
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }



    render(){ 
        return(
            
            <div className="">
                {/* sidebar */}
                <div className="bg-red-300 h-screen w-3/12 fixed">
                    <div className="space-y-3 w-1/2 ml-32 mt-32 ">
                        <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Home</button></div>
                        <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400" >Notifications</button></div>
                        <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Messages</button></div>
                        <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Favorites</button></div>
                        <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Profile</button></div>
                    </div>
                    <div className="border-2 border-black border-solid">
                        {/* {showLogout && <Logout />} */}
        {this.props.loggedInStatus && <button className="object-bottom ml-32 font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400" onClick={this.handleClick}>Log out</button>}
                    </div>
                </div> 
                {/* Feed */}
                <div className="feed">
                    <KinksContainer kinks={arr} />
                </div>
            </div>
        )
    }
}