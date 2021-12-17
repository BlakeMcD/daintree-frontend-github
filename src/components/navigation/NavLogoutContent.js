import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, logout } from './../actions/actionCreator'

function NavLogoutContent() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signout = () => {
        dispatch(logout())
        localStorage.removeItem("jwt")
        navigate("/", {replace: true})

    }

    return (
        <>
            <Header/>
            <h1>Are you sure you want to logout?</h1>
            <div className="logoutButtonParent">
                <button className="button logoutButton" onClick={() => signout()}>Logout</button>
            </div>
            <div className="spacer"/>
            <Footer/>
        </>
        
    )
}

export default NavLogoutContent
