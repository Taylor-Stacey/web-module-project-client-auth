import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const AddFriend = () => {
    const {push} = useHistory();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost3000/api/friends', form, {
            headers:  {
                authorizaton: token
            }
        })
        .then(res =>{
            push('/friends')
        })
        .catch(err=> {
            console.log(error)
        })
    }

    return (<div>
            <h2>AddFriend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input onChange={handleChange} name="name" id="username"/>
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input onChange={handleChange} name="age" id="age"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} name="email" id="email"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;