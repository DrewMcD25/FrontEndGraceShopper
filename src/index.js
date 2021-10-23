import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Login from './components/lilo';
import Home from './components/home'
import Shop from './components/shop'
import Cart from './components/cart'
import Navbar from './components/navbar';
import Register from './components/register'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import './components/style/home.css'


const App = () => {
    const [isNewUser, setIsNewUser] = useState(true)
    const renderAuthForm = (e) => {
        if (isNewUser) {
            return <Login toggleNewUser={setIsNewUser} />
        } else {
            return <Register toggleNewUser />
        }

    }

    return (
        <>
            <Router>
                <div id="navbar">
                    <Navbar />
                </div>
                <main>
                    <Switch>
                        <div>
                            <Route exact path="/login"><Login /></Route>
                            <Route exact path="/shop"><Shop/></Route>
                            <Route exact path="/cart"><Cart/></Route>
                            <Route exact path="/register"><Register /></Route>
                            <Route exact path="/"><Home /></Route>
                        </div>
                    </Switch>
                </main>
            </Router>



        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));