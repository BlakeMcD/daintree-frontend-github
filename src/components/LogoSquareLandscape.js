import React from 'react'
import { NavLink } from 'react-router-dom'

function LogoSquareLandscape(props) {
    return (
        <>
            <NavLink to={`/stores/${props.brandName}`}>
                <img className="logoSquareLandscape" src={props.imageSource} alt={props.imageAlt}></img>
            </NavLink>
        </>
    )
}

export default LogoSquareLandscape