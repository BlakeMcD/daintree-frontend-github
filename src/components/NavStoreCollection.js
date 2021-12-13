import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams } from "react-router-dom"
import ItemContainer from './ItemContainer'

function NavStoreCollection() {

    //STATE
    const [products, setProducts] = useState([]);

    const { name } = useParams();

    //PRODUCT API REQUEST
    const url_products = 'http://localhost:3000/api/v1/products'

    useEffect( async() => {
        //fetch data
        const response = await fetch(url_products);
        const data = await response.json();

        
        //send data to state
        const store_products = data.filter(product => {
            // console.log(product.store.name)
            // console.log(name)
            return product.store.name == name
        })
        setProducts(store_products)
        console.log(store_products)
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
                                        prod_stock={product.stock}
                                        prod_image={product.image_url}
                                        prod_size={product.size}
                                        prod_store_logo={product.store.logo_url_square}
                                        prod = {product}
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
        <p>This is the store page for {name}</p>
        {renderProducts()}
        
        <Footer/>
    </>
    )


//     // STATES
//     const [products, setProducts] = useState([]);
//     const [subcat, setSubcat] = useState("blank");
//     const [gen, setGen] = useState("blank");
//     const [sto, setSto] = useState("blank");
//     const [siz, setSiz] = useState("blank");

//     // VARIABLES
//     let filteredProducts = products;

//     //FUNCTIONS

//     const filterTheProducts = () => {
//         let catFilter = "empty"
//         let genFilter = "empty"
//         let stoFilter = "empty"
//         let sizFilter = "empty"

//         //category
//         if (subcat.event === "blank" || subcat === "blank") {
//             catFilter = products
//             console.log("line 31 ran")
//         }  
//         else {
//             console.log(subcat)
//             catFilter = products.filter(product => product.sub_category == subcat.event)
//             console.log("line 36 ran")
//         }
//         //gender
//         if (gen.event === "blank" || gen === "blank") {
//             genFilter = catFilter
//             console.log("line 41 ran")
//         }
//         else {
//             genFilter = catFilter.filter(product => product.gender === gen.event)
//             console.log("line 45 ran")
//         }
//         //store
//         if (sto.event === "blank" || sto === "blank") {
//             stoFilter = genFilter
//             console.log("line 50 ran")
//         }
//         else {
//             stoFilter = genFilter.filter(product => product.store.name === sto.event)
//             console.log("line 54 ran")
//         }
//         //size
//         if (siz.event === "blank" || siz === "blank") {
//             sizFilter = stoFilter
//             console.log("line 50 ran")
//         }
//         else {
//             sizFilter = stoFilter.filter(product => product.size === siz.event)
//             console.log("line 54 ran")
//         }

//         filteredProducts = sizFilter
//         return filteredProducts

//     }

//     //Callback Functions passed down as props
//     const sendStoreToParent = (event) => {
//         setSto({event})
//     }
//     const sendCategoryToParent = (event) => {
//         setSubcat({event})
//     }
//     const sendGenderToParent = (event) => {
//         setGen({event})
//     }
//     const sendSizeToParent = (event) => {
//         setSiz({event})
//     }

//     //PRODUCT API REQUEST
//     const url_products = 'http://localhost:3000/api/v1/products'

//     useEffect( async() => {
//         //fetch data
//         const response = await fetch(url_products);
//         const data = await response.json();

//         //send data to state
//         setProducts(data)
//     }, [])

//     // RENDER PRODUCTS
//     const renderProducts = () => {
//         if (products.length === 0) {
//             return (
//                 <p>Products Loading</p>
//             )
//         }
//         else {

//             filterTheProducts();
        
//             return (
//                 <div className="collectionContainer">
//                     {
//                         filterTheProducts().map( (product) => {
//                             return (
//                                 <>
//                                     <ItemContainer
//                                         key={product.id}
//                                         prod_name={product.name}
//                                         prod_price={product.price_cents}
//                                         prod_stock={product.stock}
//                                         prod_image={product.image_url}
//                                         prod_size={product.size}
//                                         prod_store_logo={product.store.logo_url_square}
//                                         prod = {product}
//                                     />
//                                 </>
//                             )
//                         })
//                     }
//                 </div>  
//             )
//         }
//     }

//     return (
//         <>
//             <Header/>
//             <div className="spacer"/>
//             <div className ="filterAndContainer">
//                 <div className="filter">
//                     <Filter sendStoreToParent={sendStoreToParent} sendCategoryToParent={sendCategoryToParent} sendGenderToParent={sendGenderToParent} sendSizeToParent={sendSizeToParent}/>
//                 </div>
//                 {renderProducts()}
//             </div>
//             <div className="spacer"/>
//             <Footer/>
//         </>
//     )
// }

}
export default NavStoreCollection
