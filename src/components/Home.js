import React, { Component } from 'react'
import KinksContainer from '../containers/KinksContainer.js'
import arr from '../data'


export default class Home extends Component {




    render(){
        return(
            
            <div className="">
                {/* sidebar */}
                <div className="bg-red-300 h-screen w-3/12 fixed">
                    <div className="space-y-3 w-1/2 ml-32 mt-32 ">
                        <div className="font-bold text-white text-2xl">Home</div>
                        <div className="font-bold text-white text-2xl">Notifications</div>
                        <div className="font-bold text-white text-2xl">Messages</div>
                        <div className="font-bold text-white text-2xl">Favorites</div>
                        <div className="font-bold text-white text-2xl">Profile</div>
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