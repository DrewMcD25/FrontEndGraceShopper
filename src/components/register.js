import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';


const Register = () => {
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(event) {
        if(username.length <1 ){
            alert('username is required to register')
            return 
        }
        else if(password.length <1 ){
            alert('password is required to register')
            return 
        }
        else if(username.length <3){
            alert('username must be longer than 3 characters')
            return 
        }
        else if(password.length <3){
            alert('password must be longer than 3 characters')
            return 
        }
        event.preventDefault()
        let failed = false
        await fetch('https://serene-stream-31668.herokuapp.com/api/users/register', {
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
                throw new Error(result.message)
            }
            else{
                alert("You're signed up!")
            }
            localStorage.setItem("token", result.token)
            console.log(result);
        })
        .catch(alert);
               
        
 
    }

    return (
        <div id="register">
            <h1 class="titles">REGISTER</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event) => setUsername(event.target.value)} value={username} required name="username" placeholder="username"></input>
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} required name="password" placeholder="password"></input>
                <button>Register</button>
            </form>
            <h2>Already a member? Head over to the <a href="./lilo.js">Login page</a> and get signed in!</h2>
        </div>
    )
}

export default Register