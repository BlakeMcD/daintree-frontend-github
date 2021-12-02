import React from 'react'
import DaintreeLandscapeFinalTan from '../../images/DaintreeLandscapeFinalWhite.png'
import { Link } from 'react-router-dom'

function NavLogo() {
    return (
        <>
            <Link to="./">
                <img className="Header_Logo" src={DaintreeLandscapeFinalTan} alt="Daintree Logo homepage link"></img>
            </Link>
        </>
    )
}

export default NavLogo
