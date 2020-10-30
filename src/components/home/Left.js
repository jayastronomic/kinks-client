import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from '../../actions/userActions'
import { removeAuthUser } from '../../actions/userActions'

import { toggleModal } from '../../actions/homeActions'

import PostModal from '../PostModal'


const API = 'http://localhost:3001/api/v1/logout'

const Left = (props) => {

    const handleClick = () => {
        fetch(API, {method: 'DELETE', credentials: 'include'} )
        .then(resp => resp.json())
        .then(obj => {
            if (obj.logged_in === false) {
                props.removeAuthUser(obj.user)
                props.isLoggedIn(obj.logged_in)
                props.history.push('/')
                
            }
        })
        .catch(err => console.log(err))
    }

    const renderProfile = () => {
        props.history.push('/profile')
    }

    const renderHome = () => {
        props.history.push('/home')
    }

    


    return (
        <div className="overflow-hidden w-3/12 h-screen bg-red-300 " >
            <div className="flex justify-center mt-10" >
                <i className="fas fa-user-circle fa-5x text-gray-200"></i>
            </div>
            <div className="space-y-3 ml-32 mt-10 ">
                <div><button className="transition duration-200 hover:shadow font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400" onClick={() => renderHome()}>Home</button></div>
                {/* <div><button className="transition duration-200 hover:shadow font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400" >Notifications</button></div>
                <div><button className="transition duration-200 hover:shadow font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Messages</button></div>
                <div><button className="transition duration-200 hover:shadow font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400">Favorites</button></div> */}
                <div><button className="transition duration-200 hover:shadow font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400" onClick={() => renderProfile()}>Profile</button></div>
                {props.loggedInStatus && <div><button className="transition duration-200 hover:shadow font-bold text-white text-2xl rounded-full focus:outline-none hover:bg-red-200 py-2 px-4 hover:text-red-400" onClick={() => handleClick()}>Log out</button></div>}
                <div><button onClick={() => props.toggleModal()} className="border-b-4 border-red-700 transition hover:opacity-75 duration-300 shadow font-bold text-white text-m rounded-full focus:outline-none bg-red-500 py-2 px-20">Post</button></div>
            </div>
            <PostModal show={props.showPostModal} toggleModal={props.toggleModal}/>
        </div> 
    )
}


const mapStateToProps = (state) => {
    return {
        loggedInStatus: state.loggedInStatus,
        showPostModal: state.showPostModal
    }
}


const mapDispatchToProps = {
    removeAuthUser,
    isLoggedIn, 
    toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Left)