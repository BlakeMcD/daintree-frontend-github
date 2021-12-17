import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Auth0LoginButton from '../Auth0LoginButton'
import Auth0LogoutButton from '../Auth0LogoutButton'
import Auth0Profile from '../Auth0Profile'
import { useNavigate } from "react-router-dom"

function NavCreateUserContent() {

    // User.create(first_name: 'Blake', last_name: 'McDeezy', password: '12345', email: 'blake@mcdeezy.com', phone: '0412000000', system_admin: true)

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleChangeLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangePhone = (event) => {
        setPhone(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const posturl = 'http://localhost:3000/api/v1/login';

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                accept: 'application/json'
                }, 
            body: JSON.stringify({ 
                user: {
                    email,
                    password
                }
            })
        };

        fetch(posturl, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                 console.log(data)
                 localStorage.setItem("jwt", data.jwt)
                //  localStorage.removeItem("jwt")
                }
            )
            navigate('/', {replace: true})
    }


    return (
        <>
            <Header/>
            <h1>Login</h1>
            <div className="loginContainer">
                <div className="loginContainer__email">
                    <h3 className="loginContainer__header">Login with your email</h3>
                    <div className="emailLogin">
                        <form onSubmit={handleSubmit}>
                            <label>
                                First Name:
                                <input type="text" value={firstName} onChange={handleChangeFirstName}/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                Last Name:
                                <input type="text" value={lastName} onChange={handleChangeLastName}/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                Email Address:
                                <input type="text" value={email} onChange={handleChangeEmail}/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                Phone Number:
                                <input type="text" value={phone} onChange={handleChangePhone}/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                Password:
                                <input type="password" value={password} onChange={handleChangePassword}/>
                            </label>
                            <br/>
                            <br/>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <Footer/>
        </>
    )
}

export default NavCreateUserContent
