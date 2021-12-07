import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'

function NavLoginContent() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //test
    const [dadata, setDadata] = useState(["blank"])

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const handleSubmitGet = (event) => {

        const posturl2 = 'http://localhost:3000/api/v1/login';

        const requestOptions2 = {
            method: 'GET', 
            url: posturl2,
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ 
                user: {
                    email: {email},
                    password: {password}
                }
            })
        };

        fetch(posturl2, requestOptions2)
            .then(response => response.json())
            .then(data2 => {
                console.log("did this work??")
                setDadata(data2)})

        
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
            .then(response => {
                return response.json()
                // console.log("Response:", response)
            })
            .then(
                data => {
                //  setDadata(data)
                //  alert("It woooooooorked!")
                 console.log(data)
                 localStorage.setItem("jwt", data.jwt)
                })
       
    }

    

    return (
        <>
            <Header/>
            <h1> Nav Login Content Content Page</h1>
            <h2> Data: {dadata} </h2>
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
            <Footer/>
        </>
    )
}

export default NavLoginContent
