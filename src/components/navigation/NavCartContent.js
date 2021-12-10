import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useSelector } from 'react-redux'


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
                peeps.push(item.name) 
            }
            return peeps
        }
    }

    return (
        <div>
            <Header/>
            <h1>Nav Cart Content Page</h1>
            {cartItems()}
            <Footer/>
        </div>
    )
}

export default NavCartContent
