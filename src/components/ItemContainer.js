import React from 'react'
import AddToCart from './AddToCart'

function ItemContainer(props) {
    return (
        <div className="item">

            <div className="item__images">
                <img className="item__images__itemImage" src={props.prod_images[0].img_url} alt="Item Image"/>
                <img className="item__images__itemStoreLogo" src={props.prod_store_logo}  alt="Store Logo"/>
            </div>
            <p className="item__title">{props.prod_name}</p>
            <p className="item__price">{props.prod_price}</p>
            <p className="item__stocks">{props.prod_stocks[0].size}</p>
            <AddToCart/> 
        </div>
    )
}

export default ItemContainer
