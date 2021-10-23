import React from "react"
import {Link} from "react-router-dom"
import './style/home.css'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Shop</Link>
            <Link to="/posts">Cart</Link>
            <Link to= "/login">Login</Link>
            <Link to= "/register">Register</Link>
        </div>
       

    )
}

export default Navbar