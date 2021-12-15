import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function CartPrice() {

    const cart = useSelector(state => state.cart)

    const [total, setTotal] = useState([]);

    let priceTotal = 0;

    //give price decimal point and dollar sign
    const priceFormatting = (item) => {
        const priceWithoutFormatting = String(item.price_cents);
        const priceWithFormatting = "$"+priceWithoutFormatting.substring(0, priceWithoutFormatting.length - 2) +"."+priceWithoutFormatting.substring(priceWithoutFormatting.length - 2);
        // priceTotal += parseInt(item.price_cents,10)
        return priceWithFormatting
    }

    const priceFormattingTotal = (item) => {
        const priceWithoutFormatting = String(priceTotal);
        const priceWithFormatting = "$"+priceWithoutFormatting.substring(0, priceWithoutFormatting.length - 2) +"."+priceWithoutFormatting.substring(priceWithoutFormatting.length - 2);
        // priceTotal += parseInt(item.price_cents,10)
        return priceWithFormatting
    }

    const cartItems = () => {
        if (cart.length === 0) {
            return (
                <p>Nothing in cart</p>
            )
        }
        else {
            let peeps = []
            for (let item of cart) {    
                priceTotal += item.price_cents;  
                console.log("priceTotal"+priceTotal)       
                peeps.push(
                    <>
                        <p>{item.name}: {priceFormatting(item)}</p>
                    </>
                ) 
            }
            return peeps
        }
    }

    console.log("Total State"+total)
    console.log("priceTotal"+priceTotal)
    return (
        <div>
            {cartItems()}
            <p>Total State: {total}</p>
            <p>Total: {priceFormattingTotal(priceTotal)}</p>
        </div>
    )
}

export default CartPrice
