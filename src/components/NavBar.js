import React from 'react';
import { useState } from 'react'
import logo from '../styles/Kinks2.png'





const NavBar = (props) => {
    return (
        <nav className="navbar border-b-2 border-red-200 border-solid bg-red-400 sticky top-0 ">
            <img className=" h-10 logo" src={logo}/>
            <ul className="max-w-full h-full flex justify-end">{ props.children }</ul>
        </nav>
    )

}

export const NavItem = (props) => {

    const [open, setOpen] = useState(false)
    return(
        <li className="nav-item flex items-center justify-center">
            <a href="#" className="icon-button rounded-full flex items-center justify-center bg-red-200" onFocus={() => setOpen(!open)} onBlur={() => setOpen(!open)}>{ props.icon }</a>

            {open && props.children}
        </li>
    )
}

export const Menu = () => {

    const MenuItem = (props) => {
        return(
            <a className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children} 
            </a>
        )
    }

    return (
        <div className=" border-2 border-solid border-red-200 dropdown">
            <MenuItem leftIcon={<i className="fas fa-sign-in-alt"></i>}>Log In</MenuItem>
        </div>
    )
}

export default NavBar;