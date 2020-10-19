import React, { Component } from 'react'
import logo from '../../styles/Kinks.png'


export default class Modal extends Component {




    render(){
        if (!this.props.show){
            return null
        }
    return(
        <div className="bg-black bg-opacity-50 absolute inset-0 flex  justify-center items-center">
            <div className=" bg-red-200 flex flex-col rounded items-center w-4/12">

                <div>
                    <img alt="" src={logo}/>
                </div>

                <div className="p-10">
                    <form className="space-y-4">
                        <div>
                            <h4 className="text-red-400 font-bold text-2xl">Create your account</h4>
                        </div>
                        <div className="flex flex-col">
                            <label  className="font-bold text-red-400 text-sm " htmlFor="username" >Username:</label>
                            <input placeholder="Username..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" id="username"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="firstName" >First Name:</label>
                            <input placeholder="First Name..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" id="firstName"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="lastName" >Last Name:</label>
                            <input placeholder="Last Name..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" id="lastName"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="email" >Email:</label>
                            <input placeholder="Email..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" id="email"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="password" >Password:</label>
                            <input placeholder="Password..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" id="password"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="password" >Confirm Password:</label>
                            <input placeholder="Password..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" id="password"/>
                        </div>
                        <div>
                            <input placeholder="" className="border-none shadow outline-none hover:bg-red-400 border-2 bg-red-300 rounded-full px-4 font-bold text-white" type="submit" value="Create Account"></input>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
    }

}