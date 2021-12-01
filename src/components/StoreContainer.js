import React from 'react'
import LogoSquareLarge from './LogoSquareLarge'

function StoreContainer() {
    return (
        <>
            <div className="homepageStoreContainer">
                <LogoSquareLarge imageSource={'https://schimiggy.com/wp-content/uploads/2020/04/pact-apparel-logo-square.jpg'} imageAlt="Pact Logo and Link"/>
                <LogoSquareLarge imageSource={'https://www.charlespost.com/wp-content/uploads/2020/08/Patagonia-Logo-Square.png'}/>
                <LogoSquareLarge imageSource={'https://fashionhedge.com/wp-content/uploads/2019/05/ezgif.com-webp-to-jpg.jpg'} imageAlt="Kotn Logo and Link"/>
                <LogoSquareLarge imageSource={'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/kpxee8cvpgjkrmea05v3'} imageAlt="Quince Logo and Link"/>
            </div>
        </>
    )
}

export default StoreContainer
