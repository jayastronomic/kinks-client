import React, { Component } from 'react'
import Footer from '../Footer'
import LoginForm from '../../partials/LoginForm'
import Modal from '../modal/Modal'
import logo from '../../styles/Kinks3.png'



export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }



    showModal = () => {
        this.setState({
            showModal: true
        })
    }


    closeModal = () => {
        this.setState({
            showModal: false
        })
    }


    render(){
        return(
            <div className="flex bg-red-200 h-full over overflow-y-hidden">
                <div className="w-2/4 h-screen login-background bg-no-repeat bg-cover mr-48">
                </div>
                <div className="w-1/4 h-screen">
                    <LoginForm />
                    <div className="wax-w-full mt-20 mb-10">
                        <img alt="" src={logo}/>
                    </div>
                    <div className="text-red-400 font-extrabold text-2xl font-sans georgia">
                        <p>Connect and share your hairstyles.</p>
                        <p>Inspire others.</p>
                    </div>
                    <div className="mt-20">
                        <p className="text-red-400 font-bold">Join Kinks today.</p>
                        <button onClick={this.showModal} className="focus:outline-none rounded-full bg-red-300 border-none border-2 py-2 px-32 text-white font-bold hover:bg-red-400 shadow">sign up</button>
                    </div>
                    <Modal show={this.state.showModal} close={this.closeModal}/>
                </div>
            </div>
        )
    }
}