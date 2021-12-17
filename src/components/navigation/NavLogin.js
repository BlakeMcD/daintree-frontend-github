import React, { useState } from 'react'
import UserSigninWhite from '../../images/UserSigninWhite.png'
import UserSigninTan from '../../images/UserSigninTan.png'
import { Link } from 'react-router-dom'

function NavLogin() {

    const [img, setImg] = useState(UserSigninWhite)
    const [text, setText] = useState("white")

    return (
        <>
            <Link to={"/login"}>
                    <img 
                        alt="Sign In"
                        src={img} 
                        onMouseEnter={() => {
                            setImg(UserSigninTan)
                            setText("#F0EACE")
                        }}
                        onMouseOut={() => {
                            setImg(UserSigninWhite)
                            setText("white")
                        }}
                    ></img>
                    <span style={{color:text}}>LOGIN</span>
            </Link>
        </>
    )
}

export default NavLogin
