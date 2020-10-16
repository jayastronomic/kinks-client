import React, { Component } from 'react'


export default class LoginForm extends Component {








    render(){
        return(
            <div className="mt-10 ">
                <form className="flex space-x-6">
                    <input className="outline-none border-b-2 rounded" placeholder="email..." type="text" />
                    <input className="outline-none border-b-2 rounded" placeholder="password..." type="password"  />
                    <input className="border-red-100 hover:bg-red-300 border-2 bg-red-200 rounded-full px-4 font-bold text-white" type="submit" value="Log in"/>
                </form>
            </div>
        )
    }




}