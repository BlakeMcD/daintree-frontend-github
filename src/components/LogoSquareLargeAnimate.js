import React from 'react'
import { NavLink } from 'react-router-dom'

function LogoSquareLargeAnimate(props) {
    return (
        <>
            <NavLink to={`/stores/${props.brandName}`}>
                <img className="logoSquareLarge" src={props.imageSource} alt={props.imageAlt}></img>
            </NavLink>
        </>
    )
}

export default LogoSquareLargeAnimate