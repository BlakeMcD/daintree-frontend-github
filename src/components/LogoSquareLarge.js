import React from 'react'

function LogoSquareLarge(props) {
    return (
        <>
            <img className="logoSquareLarge" src={props.imageSource} alt={props.imageAlt}></img>
        </>
    )
}

export default LogoSquareLarge
