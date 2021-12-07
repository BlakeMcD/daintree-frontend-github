import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Auth0LoginButton from '../Auth0LoginButton'
import Auth0LogoutButton from '../Auth0LogoutButton'
import Auth0Profile from '../Auth0Profile'

function NavLoginContent() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
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
                }
            )
    }


    return (
        <>
            <Header/>
            <h1> Nav Login Content Content Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email Address:
                    <input type="text" value={email} onChange={handleChangeEmail}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handleChangePassword}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h2>Auth0</h2>
            <Auth0LoginButton/>
            <Auth0LogoutButton/>
            <Auth0Profile/>
            <Footer/>
        </>
    )
}

export default NavLoginContent
