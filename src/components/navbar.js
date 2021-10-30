import React from "react"
import {Link, useHistory} from "react-router-dom"
import './style/home.css'

const Navbar = ({username}) => {
//     const history = useHistory();

//  function logout(e){
//      e.prevent.default();
//      localStorage.removeItem('token')
//      setLogIn(null);
//      history.push('/')

// }

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to= "/login">Login</Link>
            <Link to= "/register">Register</Link>
        </div>
       

    )
}

export default Navbar