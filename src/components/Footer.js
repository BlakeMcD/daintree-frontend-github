import React from 'react'
import CreditCardWhite from '../images/CreditCardWhite.png'

// /home/blake/Development/code/Phase-5/daintree-frontend/src/images/CreditCardWhite.png

function Footer() {
    return (
        <footer>
            <p>FOOTER</p>
            <img className="footer_icon" src={CreditCardWhite} alt="Footer Icon"/>
        </footer>
    )
}

export default Footer
