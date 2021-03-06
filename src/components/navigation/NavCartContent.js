import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useSelector } from 'react-redux'
import ItemContainerCart from '../ItemContainerCart'
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
                    <ItemContainerCart
                        key={item.id}
                        prod = {item}
                    />
                ) 
            }
            return peeps
        }
    }

    const renderCart = () => {
        if (cart.length === 0) {
            return (
                <h1>Your cart is empty!</h1>
            )
        }
        else {
            return(
                <>
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
                </>
            )
        }
    }

    return (
        <div>
            <Header/>
                {renderCart()}
            <Footer/>
        </div>
    )
}

export default NavCartContent
