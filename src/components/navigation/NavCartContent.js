import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useSelector } from 'react-redux'
import ItemContainer from '../ItemContainer'
import CartPrice from '../CartPrice'


function NavCartContent() {


    const cart = useSelector(state => state.cart)

    const cartItems = () => {
        if (cart.length === 0) {
            return (
                <p>Nothing in cart</p>
            )
        }
        else {
            let peeps = []
            for (let item of cart) {             
                peeps.push(
                    <ItemContainer
                        key={item.id}
                        prod = {item}
                    />
                ) 
            }
            return peeps
        }
    }

    return (
        <div>
            <Header/>
            <h1>Cart</h1>
            <div className="cartContainerContainer">
                <div className="cartContainer">
                    <div className="cartContainer__items">
                        {cartItems()}
                    </div>
                    <div className="cartContainer__total">
                        <CartPrice/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NavCartContent
