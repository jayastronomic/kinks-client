import React, { Component } from 'react'
import logo from '../../../styles/Kinks.png'


const API = 'http://localhost:3001/api/v1/users'

export default class Modal extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const user = { 
            user: {
                username: this.state.username,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.passwordConfirmation
            }
        }

        const payload = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }

        fetch(API, payload)
        .then(resp => resp.json())
        .then(obj => {
            if (obj.status === "COMPLETED") {
                console.log(obj)
                this.props.handleLogin(obj)
                this.redirect()
            } else {
                console.log(obj.errors)
            }
        })

    }

    redirect = () => {
        this.props.history.push('/home')
    }


    render(){
        if (!this.props.show){
            return null
        }
        console.log(this.state.password)
    return(
        <div className="bg-black bg-opacity-75 absolute inset-0 flex  justify-center items-center">
            <div className=" bg-red-200 flex flex-col rounded items-center w-4/12">

                <div>
                    <img alt="" src={logo}/>
                </div>

                <div className="p-10">
                    <form onSubmit={this.handleSubmit} className="space-y-4">
                        <div>
                            <h4 className="text-red-400 font-bold text-2xl">Create your account</h4>
                        </div>
                        <div className="flex flex-col">
                            <label  className="font-bold text-red-400 text-sm " htmlFor="username" >Username:</label>
                            <input id='username' placeholder="Username..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500"  onChange={this.handleChange} name="username" value={this.state.username} />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="firstName" >First Name:</label>
                            <input id='firstName' placeholder="First Name..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" onChange={this.handleChange} name="firstName" value={this.state.firstName} />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="lastName" >Last Name:</label>
                            <input id='lastName' placeholder="Last Name..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" onChange={this.handleChange} name="lastName" value={this.state.lastName} />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="email" >Email:</label>
                            <input id='email' placeholder="Email..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" onChange={this.handleChange} name="email" value={this.state.email} />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="password" >Password:</label>
                            <input id='password' type="password" placeholder="Password..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" onChange={this.handleChange} name="password" value={this.state.password} />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold text-red-400 text-sm" htmlFor="passwordConfirmation" >Confirm Password:</label>
                            <input id='passwordConfirmation' type="password" placeholder="Password..." className="text-red-500 bg-red-100 outline-none border-b-2 focus:border-red-500" onChange={this.handleChange} name="passwordConfirmation" value={this.state.passwordConfirmation} />
                        </div>
                        <div>
                            <input  placeholder="" className="border-none shadow outline-none hover:bg-red-400 border-2 bg-red-300 rounded-full px-4 font-bold text-white" type="submit" onChange={this.handleChange} name="" value="Create Account"></input>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
    }

}