import React from 'react'
import AddToCart from './AddToCart'

function ItemContainer(props) {

    //give price decimal point and dollar sign
    const priceWithoutFormatting = String(props.prod.price_cents);
    const priceWithFormatting = "$"+priceWithoutFormatting.substring(0, priceWithoutFormatting.length - 2) +"."+priceWithoutFormatting.substring(priceWithoutFormatting.length - 2);

    return (
        <div className="item">

            <div className="item__images">
                <img className="item__images__itemImage" src={props.prod.image_url}/>
                <img className="item__images__itemStoreLogo" src={props.prod.store.logo_url_square}  alt="Store Logo"/>
            </div>
            <p className="item__title">{props.prod.name}</p>
            <p className="item__price">{priceWithFormatting}</p>
            <p className="item__stocks">{props.prod.size}</p>
            <AddToCart prod={props.prod}/> 
        </div>
    )
}

export default ItemContainer
