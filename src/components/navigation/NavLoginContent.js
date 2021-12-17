import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Auth0LoginButton from '../Auth0LoginButton'
import Auth0LogoutButton from '../Auth0LogoutButton'
import Auth0Profile from '../Auth0Profile'
import { useNavigate } from "react-router-dom"
import jwtDecode from 'jwt-decode'

function NavLoginContent() {

    const navigate = useNavigate();

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
                //  localStorage.removeItem("jwt")
                }
            )
            navigate('/', {replace: true})
    }

    const logout = (event) => {
        try {
        console.log("is this working???")
        jwtDecode(localStorage.removeItem("jwt"))
        }
        catch(error) {
            alert("You've been logged out")
            navigate('/login', {replace: true})
        }

        // try {
        //     const system_admin = jwtDecode(localStorage.getItem('jwt')).system_admin
        //     if (!system_admin) {
        //         navigate('/', {replace: true})
        //     } 
        // }
        // catch(error) {
        //     alert("You're not logged in foo!")
        //     navigate('/login', {replace: true})
        // }
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
                                Email Address:
                                <input type="text" value={email} onChange={handleChangeEmail}/>
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
                        <br/><br/>
                        <span><b><i>Don't have an account? </i></b></span>
                        <a href="/users/new">Sign up</a>
                    </div>
                </div>
                <div className="loginContainer__auth0">
                    <h3 className="loginContainer__header">Login with your social account</h3>
                    <Auth0LoginButton/>
                    <br/>
                    <br/>
                    <Auth0LogoutButton/>
                    <Auth0Profile/>
                </div>
            </div>
            <button onClick={() => logout()}>Logout</button>
            <div className="spacer"/>
            <Footer/>
        </>
    )
}

export default NavLoginContent
