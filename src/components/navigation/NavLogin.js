import React from 'react'
import UserSigninWhite from '../../images/UserSigninWhite.png'
import { Link } from 'react-router-dom'

function NavLogin() {
    return (
        <Link to={"/login"}>
            <img src={UserSigninWhite} alt="Sign In"></img>
        </Link>
    )
}

export default NavLogin
