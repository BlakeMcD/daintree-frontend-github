import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart, remove_from_cart } from './actions/actionCreator'

function AddToCart(props) {

    // STATES
    const [add, setAdd] = useState(true);

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const alertTest = () => {
        alert("button clicked")
    }

    const fakeItem = {
        name: "testName"
    }

    const item = props.prod;

    const addOrRemove = () => {
        if (add === true) {

            setAdd(false)
            dispatch(add_to_cart(item))

        }
        else {

            setAdd(true)
            dispatch(remove_from_cart(item))
        }
    }

    const displayAdd = () => {

        return (
            <>
                <a className="addToCartButton" onClick={() => addOrRemove()}>
                    ADD TO CART
                </a>
        </>
        )
    }

    const displayRemove = () => {
        return (
            <>
                <a className="addToCartButton" onClick={() => addOrRemove()}>
                    REMOVE FROM CART
                </a>
        </>
        )
    }

    return (
        <>
            {
                add
                ? displayAdd()
                : displayRemove()
            }
        </>
    )
}

// {() => dispatch(add_to_cart(item))}

export default AddToCart
