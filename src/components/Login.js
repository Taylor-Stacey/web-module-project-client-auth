import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const { push } = useHistory();

    const [cred, setCred] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/login')
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            push('/friends');
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (<div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label>
                <input onChange={handleChange} name='username' id='username' />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input onChange={handleChange} name='password' type='password' id='password' />
            </div>
            <button>Submit</button>
        </form>
    </div>)
}


export default Login;