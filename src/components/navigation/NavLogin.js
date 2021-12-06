import React, { useState } from 'react'
import UserSigninWhite from '../../images/UserSigninWhite.png'
import UserSigninTan from '../../images/UserSigninTan.png'
import { Link } from 'react-router-dom'

function NavLogin() {

    const [img, setImg] = useState(UserSigninWhite)

    return (
        <>
            <Link to={"/login"}>
                <img 
                    alt="Sign In"
                    src={img} 
                    onMouseEnter={() => {
                        setImg(UserSigninTan)
                    }}
                    onMouseOut={() => {
                        setImg(UserSigninWhite)
                    }}
                ></img>
            </Link>
        </>
    )
}

export default NavLogin
