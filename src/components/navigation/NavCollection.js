import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ItemContainer from '../ItemContainer' 

function NavCollection() {

    const url = 'http://localhost:3000/api/v1/products'

    const [products, setProducts] = useState([]);

    useEffect( async() => {
        //fetch data
        const response = await fetch(url);
        const data = await response.json();

        //send data to state
        setProducts(data)
    }, [])

    const renderProducts = () => {
        if (products.length === 0) {
            return (
                <p>Products Loading</p>
            )
        }
        else {
            return (
                <div className="collectionContainer">
                    {
                        products.map( (product) => {
                            return (
                                <>
                                    <p>item should go here</p>
                                    <ItemContainer
                                        key={product.id}
                                        prod_name={product.name}
                                    />
                                </>
                            )
                        })
                    }
                </div>  
            )
        }
    }

    return (
        <>
            <Header/>
            {renderProducts()}
            <Footer/>
        </>
    )
}

export default NavCollection
