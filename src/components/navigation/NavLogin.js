import React, { useState } from 'react'
import UserSigninWhite from '../../images/UserSigninWhite.png'
import UserSigninTan from '../../images/UserSigninTan.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './../actions/actionCreator'

function NavLogin() {

    const loggedIn = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()

    const [img, setImg] = useState(UserSigninWhite)
    const [text, setText] = useState("white")

    const checkLoggedIn = () => {
        if (loggedIn) {
            return "LOGOUT"
        }
        else {
            return "LOGIN"
        }
    }

    const logout = () => {
        dispatch(logout())
    }

    const buttonAction = () => {
        if (!loggedIn) {
            return (
                <>
                    <Link to={"/login"}>
                        <>
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
                            <span style={{color:text}} 
                                    onMouseEnter={() => {
                                    setImg(UserSigninTan)
                                    setText("#F0EACE")
                                }}
                                onMouseOut={() => {
                                    setImg(UserSigninWhite)
                                    setText("white")
                                }}>{checkLoggedIn()}
                            </span>
                            {/* <p>LoggedIn Status: {checkLoggedIn()}</p> */}
                        </>
                    </Link>
                </>
            )
        }
        else {
            return (
                <>
                    <Link to={"/logout"}>
                        <>
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
                            <span style={{color:text}} 
                                    onMouseEnter={() => {
                                    setImg(UserSigninTan)
                                    setText("#F0EACE")
                                }}
                                onMouseOut={() => {
                                    setImg(UserSigninWhite)
                                    setText("white")
                                }}>{checkLoggedIn()}
                            </span>
                            {/* <p>LoggedIn Status: {checkLoggedIn()}</p> */}
                        </>
                    </Link>
                </>
            )
        }
    }

    return (
        buttonAction()
    )
}

export default NavLogin
