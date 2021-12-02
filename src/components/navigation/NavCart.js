import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartWhite from '../../images/ShoppingCartWhite.png'

function NavCart() {
    return (
        <Link to={"./cart"}>
            <img src={ShoppingCartWhite} alt="Sign In"></img>
        </Link>
    )
}

export default NavCart
