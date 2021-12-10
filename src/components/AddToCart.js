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
    const addOrRemove = () => {
        if (inCart === true) {

            setInCart(false)

            dispatch(remove_from_cart(item))
            

        }
        else {

            setInCart(true)
            
            dispatch(add_to_cart(item))
        }
    }

    const displayAdd = () => {

        return (
            <>
                <a className="addToCartButton" onClick={() => addOrRemove()}>
                    ADD TO CART
                    {inCart ? <p>inCart is true</p> : <p>inCart is false</p>}
                    {cart.length > 0 ? <p>cart has stuff in it </p> : <p>cart is empty</p>}
                    {checkInCart() ? <p>this is in cart </p> : <p>this is not in cart</p>}
                    {item.name}
                </a>
        </>
        )
    }

    const displayRemove = () => {
        return (
            <>
                <a className="addToCartButton" onClick={() => addOrRemove()}>
                    REMOVE FROM CART
                    {inCart ? <p>inCart is true</p> : <p>inCart is false</p>}
                    {cart.length > 0  ? <p>cart has stuff in it </p> : <p>cart is empty</p>}
                    {checkInCart() ? <p>this is in cart </p> : <p>this is not in cart</p>}
                    {item.name}
                </a>
        </>
        )
    }

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

// {() => dispatch(add_to_cart(item))}

export default AddToCart
