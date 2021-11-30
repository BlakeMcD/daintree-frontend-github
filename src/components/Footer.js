import React from 'react'
import CreditCardWhite from '../images/CreditCardWhite.png'
import BoomerangWhite from '../images/BoomerangWhite.png'
import DeliveryWhite from '../images/DeliveryWhite.png'
import BagWhite from '../images/BagWhite.png'

// /home/blake/Development/code/Phase-5/daintree-frontend/src/images/CreditCardWhite.png

function Footer() {
    return (
        <footer>
            <div className="footer_icon_container">
                <img className="footer_icon" src={DeliveryWhite} alt="Free Delivery"/>
                <p className="footer_text">FREE DELIVERY</p>
            </div>
            <div className="footer_icon_container">
                <img className="footer_icon" src={CreditCardWhite} alt="Buy Now Pay Later"/>
                <p className="footer_text">BUY NOW PAY LATER</p>
            </div>
            <div className="footer_icon_container">
                <img className="footer_icon" src={BoomerangWhite} alt="Free Returns"/>
                <p className="footer_text">FREE RETURNS</p>
            </div>
            <div className="footer_icon_container">
                <img className="footer_icon" src={BagWhite} alt="Click and Collect"/>
                <p className="footer_text">CLICK & COLLECT</p>
            </div>
        </footer>
    )
}

export default Footer
