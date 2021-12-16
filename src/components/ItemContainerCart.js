import React from 'react'
import AddToCart from './AddToCart'

function ItemContainerCart(props) {

    //give price decimal point and dollar sign
    const priceWithoutFormatting = String(props.prod.price_cents);
    const priceWithFormatting = "$"+priceWithoutFormatting.substring(0, priceWithoutFormatting.length - 2) +"."+priceWithoutFormatting.substring(priceWithoutFormatting.length - 2);

    return (
        <div className="item--cart">

            <div className="item__images--cart">
                <img className="item__images__itemImage--cart" src={props.prod.image_url}/>
                <img className="item__images__itemStoreLogo--cart" src={props.prod.store.logo_url_square}  alt="Store Logo"/>
            </div>
            <div className="item__info--cart">
                <p className="item__title--cart">{props.prod.name}</p>
                <p className="item__price--cart">{priceWithFormatting}</p>
                {/* <p className="item__stocks">{props.prod.size}</p> */}
                <AddToCart prod={props.prod}/> 
            </div>
        </div>
    )
}

export default ItemContainerCart
