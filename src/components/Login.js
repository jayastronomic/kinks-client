import React, { Component } from 'react'
import Footer from './Footer'
import LoginForm from '../partials/LoginForm'
import logo from '../styles/Kinks3.png'


export default class Login extends Component {







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
                        <button className="rounded-full bg-red-300 border-red-300 border-2 py-2 px-32 text-white font-bold">sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}