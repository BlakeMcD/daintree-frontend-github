import React from 'react'
import AddToCart from './AddToCart'

function MostWantedItem() {
    return (
        <div className="item">

            <div className="item__images">
                <img className="item__images__itemImage" src="https://connor.imgix.net/Connor/Products/C18DE105_DEN_1.png" alt="Item Image"/>
                <img className="item__images__itemStoreLogo" src="https://schimiggy.com/wp-content/uploads/2020/04/pact-apparel-logo-square.jpg"  alt="Store Logo"/>
            </div>
            <p className="item__title">Item Title</p>
            <p className="item__price">Item Price</p>
            <AddToCart/>
        </div>
    )
}

export default MostWantedItem
