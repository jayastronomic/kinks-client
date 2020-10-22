import React, { Component } from 'react'

const API = 'http://localhost:3001/api/v1/login'


export default class LoginForm extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let user = {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }

        const payload = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            credentials: 'include'
        }

        fetch(API, payload)
        .then(resp => resp.json())
        .then(obj => {
            if (obj.logged_in) {
                this.props.handleLogin(obj)
                this.redirect()
            }
        })
    }


    redirect = () => {
        this.props.history.push('/home')
    }


    render(){
        return(
            <div className="mt-10 ">
                <form onSubmit={this.handleSubmit} className="flex space-x-6">
                    <input className="outline-none border-b-2 rounded focus:border-red-500 text-red-500" placeholder="email..." type="text" name="email" value={this.state.email}  onChange={this.handleChange}/>
                    <input className="outline-none border-b-2 rounded focus:border-red-500 text-red-500" placeholder="password..." type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
                    <input className=" outline-none shadow border-none hover:bg-red-300 bg-red-400 rounded-full px-4 font-bold text-white" type="submit" value="Log in"/>
                </form>
            </div>
        )
    }




}