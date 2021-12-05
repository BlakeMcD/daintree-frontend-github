import React, { useState } from 'react'
import DaintreeLandscapeFinalWhite from '../../images/DaintreeLandscapeFinalWhite.png'
import DaintreeLandscapeFinalTan from '../../images/DaintreeLandscapeFinalTan.png'
import { Link } from 'react-router-dom'

function NavLogo() {

    const [img, setImg] = useState(DaintreeLandscapeFinalWhite)

    return (
        <>
            <Link to="/">
                <img className="Header_Logo" 
                alt="Daintree Logo homepage link"
                src={img} 
                onMouseEnter={() => {
                    setImg(DaintreeLandscapeFinalTan)
                }}
                onMouseOut={() => {
                    setImg(DaintreeLandscapeFinalWhite)
                }}
                ></img>
            </Link>
        </>
    )
}

export default NavLogo
