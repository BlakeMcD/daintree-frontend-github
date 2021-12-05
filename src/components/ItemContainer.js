import React from 'react'
import AddToCart from './AddToCart'

function ItemContainer(props) {

    //give price decimal point and dollar sign
    const priceWithoutFormatting = String(props.prod_price);
    const priceWithFormatting = "$"+priceWithoutFormatting.substring(0, priceWithoutFormatting.length - 2) +"."+priceWithoutFormatting.substring(priceWithoutFormatting.length - 2);

    return (
        <div className="item">

            <div className="item__images">
                <img className="item__images__itemImage" src={props.prod_images[0].img_url} alt="Item Image"/>
                <img className="item__images__itemStoreLogo" src={props.prod_store_logo}  alt="Store Logo"/>
            </div>
            <p className="item__title">{props.prod_name}</p>
            <p className="item__price">{priceWithFormatting}</p>
            <p className="item__stocks">{props.prod_stocks[0].size}</p>
            <AddToCart/> 
        </div>
    )
}

export default ItemContainer
