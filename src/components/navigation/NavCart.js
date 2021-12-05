import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartWhite from '../../images/ShoppingCartWhite.png'
import ShoppingCartTan from '../../images/ShoppingCartTan.png'

function NavCart() {
    const [img, setImg] = useState(ShoppingCartWhite)

    return (
        <Link to={"/cart"}>
            <img 
                alt="Cart"
                src={img} 
                onMouseEnter={() => {
                    setImg(ShoppingCartTan)
                }}
                onMouseOut={() => {
                    setImg(ShoppingCartWhite)
                }}
            ></img>
        </Link>
    )
}

export default NavCart
