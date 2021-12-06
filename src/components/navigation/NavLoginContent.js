import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'

function NavLoginContent() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <>
            <Header/>
            <h1> Nav Login Content Content Page</h1>
            <form>
                <label>
                    Email Address:
                    <input type="text" value={email} onChange={handleChangeEmail}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handleChangePassword}/>
                </label>
            </form>
            <Footer/>
        </>
    )
}

export default NavLoginContent
