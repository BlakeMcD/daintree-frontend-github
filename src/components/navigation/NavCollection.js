import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ItemContainer from '../ItemContainer' 
import Filter from '../Filter'

function NavCollection() {


    // STATES
    const [products, setProducts] = useState([]);
    const [subcat, setSubcat] = useState("blank")
    const [gen, setGen] = useState("blank")

    // VARIABLES
    let filteredProductsCategory = "blank"

    let filteredProducts = products;

    //FUNCTIONS

    const filterTheProducts = () => {
        let catFilter = "meh"
        let genFilter = "meh"

        if (subcat.event === "blank") {
            catFilter = products
        }
        else {
            console.log(subcat)
            catFilter = products.filter(product => product.sub_category == subcat.event)
        }

        if (gen === "blank") {
            genFilter = catFilter
        }
        else {
            genFilter = catFilter.filter(product => product.gender === "f")
        }

        filteredProducts = genFilter
        return filteredProducts

    }

    const sendCategoryToParent = (event) => {
        // console.log(subcat)
        setSubcat({event})
    }

    const sendGenderToParent = (event) => {
        // console.log(subcat)
        setGen({event})
    }

    const sendButtonSubmitToParent = () => {
        console.log(subcat)
        console.log("sendButtonSubmitToParent Runs")
    }

    //PRODUCT API REQUEST
    const url_products = 'http://localhost:3000/api/v1/products'

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

            //the filter chain
            // const filteredProductsStore = products.filter(product => product.store.name === "Patagonia")

            filteredProductsCategory === "blank" ? (filteredProductsCategory = products) : filteredProductsCategory = products.filter(product => product.sub_category === "subcat")
            
            // const filteredProductsCategory = products.filter(product => product.sub_category === "jeans")
            
            const filteredProductsGender = filteredProductsCategory.filter(product => product.gender === "m")
            const filteredProductsSize = filteredProductsGender.filter(product => product.stocks[0].size === "m")

            filterTheProducts();


            return (
                <div className="collectionContainer">
                    {
                
                        filterTheProducts().map( (product) => {
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
            <div className ="filterAndContainer">
                <div className="filter">
                    <Filter sendCategoryToParent={sendCategoryToParent} sendGenderToParent={sendGenderToParent} sendButtonSubmitToParent={sendButtonSubmitToParent}/>
                </div>
                {renderProducts()}
            </div>
            <div className="spacer"/>
            <Footer/>
        </>
    )
}

export default NavCollection
