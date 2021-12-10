import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart, remove_from_cart } from './actions/actionCreator'

function AddToCart(props) {

    // STATES

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    //iterate through cart to see if this item is already there, and set state accordingly
    const item = props.prod;

    const checkInCart = () => {
        const result = cart.filter(product => product.name === item.name)
        if (result.length === 1) {  
            return true
        } else {
            return false
        }
    }

    const [inCart, setInCart] = useState(checkInCart());


    //FUNCTIONS
    const addToCart = () => {
        dispatch(add_to_cart(item))
        setInCart(true)
    }

    const removeFromCart = () => {
        dispatch(remove_from_cart(item))
        setInCart(false)
    }

    const displayAdd = () => {
        return (
            <>
                <a className="addToCartButton" onClick={() => addToCart()}>
                    ADD TO CART
                    {/* {inCart ? <p>inCart is true</p> : <p>inCart is false</p>}
                    {cart.length > 0 ? <p>cart has stuff in it </p> : <p>cart is empty</p>}
                    {checkInCart() ? <p>this is in cart </p> : <p>this is not in cart</p>} */}
                </a>
        </>
        )
    }

    const displayRemove = () => {
        return (
            <>
                <a className="removeFromCartButton" onClick={() => removeFromCart()}>
                    REMOVE FROM CART
                    {/* {inCart ? <p>inCart is true</p> : <p>inCart is false</p>}
                    {cart.length > 0  ? <p>cart has stuff in it </p> : <p>cart is empty</p>}
                    {checkInCart() ? <p>this is in cart </p> : <p>this is not in cart</p>} */}
                </a>
        </>
        )
    }

    //RETURN
    return (
        <>
            {
                inCart
                ? displayRemove()
                : displayAdd()
            }
        </>
    )
}

export default AddToCart
