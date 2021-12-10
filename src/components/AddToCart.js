import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart } from './actions/actionCreator'

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
        }
        else {

            setAdd(true)
        }
    }

    return (
        <a className="addToCartButton" onClick={() => dispatch(add_to_cart(item))}>
            ADD TO CART Addstate:{add}
        </a>
    )
}

// {() => dispatch(add_to_cart(item))}

export default AddToCart
