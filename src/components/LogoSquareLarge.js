import React from 'react'

function LogoSquareLarge(props) {
    return (
        <>
            <p>LogoImage</p>
            <img className="logo_square_large" src={props.imageSource} alt={props.imageAlt}></img>
        </>
    )
}

export default LogoSquareLarge
