import React from 'react'
import CreditCardWhite from '../images/CreditCardWhite.png'
import BoomerangWhite from '../images/BoomerangWhite.png'
import DeliveryWhite from '../images/DeliveryWhite.png'
import BagWhite from '../images/BagWhite.png'

// /home/blake/Development/code/Phase-5/daintree-frontend/src/images/CreditCardWhite.png

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <img className="footerContainer__icon" src={DeliveryWhite} alt="Free Delivery"/>
                <p className="footerContainer__text">FREE DELIVERY</p>
            </div>
            <div className="footerContainer">
                <img className="footerContainer__icon" src={CreditCardWhite} alt="Buy Now Pay Later"/>
                <p className="footerContainer__text">BUY NOW PAY LATER</p>
            </div>
            <div className="footerContainer">
                <img className="footerContainer__icon" src={BoomerangWhite} alt="Free Returns"/>
                <p className="footerContainer__text">FREE RETURNS</p>
            </div>
            <div className="footerContainer">
                <img className="footerContainer__icon" src={BagWhite} alt="Click and Collect"/>
                <p className="footerContainer__text">CLICK & COLLECT</p>
            </div>
        </footer>
    )
}

export default Footer
