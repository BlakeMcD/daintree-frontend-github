import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart } from './actions/actionCreator'

function AddToCart(props) {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const alertTest = () => {
        alert("button clicked")
    }

    const fakeItem = {
        name: "testName"
    }

    const item = props.prod;

    return (
        <a className="addToCartButton" onClick={() => dispatch(add_to_cart(item))
        } >ADD TO CART</a>
    )
}

// () => dispatch(add_to_cart(props.prod))

export default AddToCart
