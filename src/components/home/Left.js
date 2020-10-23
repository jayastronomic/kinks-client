import React from 'react'

const API = 'http://localhost:3001/api/v1/logout'

const Left = (props) => {

    const handleClick = () => {
        fetch(API, {method: 'DELETE', credentials: 'include'} )
        .then(resp => resp.json())
        .then(obj => {
            props.handleLogout();
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }



    return (
        <div className="overflow-hidden max-w-24 w-3/12 h-screen bg-red-300 " >
            <div className="space-y-3 ml-32 mt-32 ">
                <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Home</button></div>
                <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400" >Notifications</button></div>
                <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Messages</button></div>
                <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Favorites</button></div>
                <div><button className="font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Profile</button></div>
                {props.loggedInStatus && <div><button className="object-bottom ml-32 font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400" onClick={() => handleClick()}>Log out</button></div>}
            </div>
        </div> 
    )
}

export default Left