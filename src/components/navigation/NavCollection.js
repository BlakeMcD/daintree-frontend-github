import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ItemContainer from '../ItemContainer' 

function NavCollection() {

    //PRODUCT API REQUEST
    const url_products = 'http://localhost:3000/api/v1/products'

    const [products, setProducts] = useState([]);

    useEffect( async() => {
        //fetch data
        const response = await fetch(url_products);
        const data = await response.json();

        //send data to state
        setProducts(data)
    }, [])

    // RENDER PRODUCTS
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
                                    <ItemContainer
                                        key={product.id}
                                        prod_name={product.name}
                                        prod_price={product.price_cents}
                                        prod_stocks={product.stocks}
                                        prod_images={product.images}
                                        prod_store_logo={product.store.logo_url_square}
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
            <div className="spacer"/>
            {renderProducts()}
            <div className="spacer"/>
            <Footer/>
        </>
    )
}

export default NavCollection
