import React, { Component } from 'react'


export default class LoginForm extends Component {








    render(){
        return(
            <div className="mt-10 ">
                <form className="flex space-x-6">
                    <input className="outline-none border-b-2 rounded focus:border-red-500 text-red-500" placeholder="email..." type="text" />
                    <input className="outline-none border-b-2 rounded focus:border-red-500 text-red-500" placeholder="password..." type="password"  />
                    <input className=" shadow border-none hover:bg-red-400 border-2 bg-red-300 rounded-full px-4 font-bold text-white" type="submit" value="Log in"/>
                </form>
            </div>
        )
    }




}