import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, userHistory } from 'react-router-dom';

const Login = ({ userToken }) => {
    let history = useHistory();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    async function saveToken(event) {
        if(user!= user){
            alert('invalid username or password')
        }
        event.preventDefault()
        let failed = 500
        await fetch('https://serene-stream-31668.herokuapp.com/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                    username: event.target.username.value,
                    password: event.target.password.value
                
            })
        }).then(response => { 
            console.log(response)
            failed = !response.ok
            return response.json()
        })
            .then(result => {
                if (failed){
                    alert (result.message)
                }
                localStorage.setItem("token", result.token)
                console.log(result);
                history.push('/');
            })
            .catch(console.error);
               
        
    }



    return (
        <div id="lilo">
            <h1 class="titles">LOGIN</h1>
            <form id="form" onSubmit={saveToken}>
                <input type="text" onChange={(event) => setUser(event.target.value)} value={user} required name="username" placeholder="username"></input>
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} required name="password" placeholder="password"></input>
                <button>Log In</button>
            </form>
            <h2> Not a member? <a href="./register.js">Click here</a> to create an account! Otherwise, login above with existing account.</h2>

        </div>
    )


}


export default Login;


