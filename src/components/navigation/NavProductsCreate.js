import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useParams, useNavigate } from "react-router-dom"
import jwtDecode from 'jwt-decode'



function NavProductsCreate() {

    const { name } = useParams();
    const navigate = useNavigate();
    //product
    const [productUid, setProductUid] = useState("")
    const [productName, setProductName] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productSubCategory, setProductSubCategory] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productGender, setProductGender] = useState("")
    const [productAgeGroup, setProductAgeGroup] = useState("")
    const [productColour, setProductColour] = useState("")
    const [productSize, setProductSize] = useState("")
    const [productStock, setProductStock] = useState(0)
    const [productPriceCents, setProductPriceCents] = useState(0)
    const [productImageUrl, setProductImageUrl] = useState("")
    const [productStoreId, setProductStoreId] = useState(1)

    //admin permissions
    useEffect( () => {
        const stores = jwtDecode(localStorage.getItem('jwt')).stores

        const check_admin = stores.some(store => name.toLowerCase() === store.toLowerCase())

        if (check_admin === false) {
            navigate('/', {replace: true})
        } 
    },[])


    //product
    const handleChangeUid = (event) => {
        setProductUid(event.target.value)
    }
    const handleChangeName = (event) => {
        setProductName(event.target.value)
    } 
    const handleChangeCategory = (event) => {
        setProductCategory(event.target.value)
    }
    const handleChangeSubCategory = (event) => {
        setProductSubCategory(event.target.value)
    }
    const handleChangeDescription = (event) => {
        setProductDescription(event.target.value)
    }
    const handleChangeGender = (event) => {
        setProductGender(event.target.value)
    }
    const handleChangeAgeGroup = (event) => {
        setProductAgeGroup(event.target.value)
    }
    const handleChangeColour = (event) => {
        setProductColour(event.target.value)
    }
    const handleChangeSize = (event) => {
        setProductSize(event.target.value)
    }
    const handleChangeStock = (event) => {
        setProductStock(event.target.value)
    }
    const handleChangePriceCents = (event) => {
        setProductPriceCents(event.target.value)
    }
    const handleChangeImageUrl = (event) => {
        setProductImageUrl(event.target.value)
    }
    const handleChangeStoreId = (event) => {
        setProductStoreId(event.target.value)
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log("All good so far!")

        const posturl = 'http://localhost:3000/api/v1/products/create';

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                accept: 'application/json'
                }, 
            body: JSON.stringify({ 
                product: {
                    uid:productUid,
                    name:productName,
                    category:productCategory,
                    sub_category:productSubCategory, 
                    description:productDescription, 
                    gender:productGender,
                    age_group:productAgeGroup,

                    colour: productColour,
                    size: productSize, 
                    stock: parseInt(productStock,10),
                    price_cents: parseInt(productPriceCents,10),
                    image_url: productImageUrl,

                    store_id:productStoreId     
                }
                // user: {
                //     email,
                //     password
                // }
            })
        };

        fetch(posturl, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                 console.log(data)
                //  localStorage.setItem("jwt", data.jwt)
                }
            )
            .then (navigate('/collection', {replace: true}))
    }

    return (
        <>
            <Header/>
            <div className="newProductContainerContainer">
                <div className="newStoreContainerSpacer"/>
                <div className="newProductContainer">
                    <h1>Add a New Product for {name}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="newProductSubContainer">
                            <div className="newProductSubContainer__one">
                                <h3>Label</h3>
                                <label>
                                    UID:
                                    <input type="text" value={productUid} onChange={handleChangeUid}/>
                                </label>
                                <br/><br/>
                                <label>
                                    Product Name:
                                    <input type="text" value={productName} onChange={handleChangeName}/>
                                </label>
                                <br/><br/>
                                <label>
                                    Category:
                                    <select onChange={handleChangeCategory}>
                                        <option selected value="clothing">Clothing</option>
                                    </select>
                                </label>
                                <br/><br/>
                                <label>
                                    Sub Category:
                                    <select onChange={handleChangeCategory}>
                                        <option selected value="blank"></option>
                                        <option selected value="jeans">Jeans</option>
                                        <option selected value="shirt">Shirt</option>
                                        <option selected value="jacket">Jacket</option>
                                    </select>
                                </label>
                                <br/><br/>
                                <label>
                                    Description:
                                    <input type="text" value={productDescription} onChange={handleChangeDescription}/>
                                </label>
                                <br/><br/>
                            </div>
                            <div className="newProductSubContainer__two">
                                <h3>Specifications</h3>

                            {/* <select onChange={(event) => {sendStoreToParent(event.target.value)}}>
                                <option selected value="blank"></option>
                                <option value="Pact">Pact</option>
                                <option value="Patagonia">Patagonia</option>
                                <option value="Quince">Quince</option>
                                <option value="Reformation">Reformation</option>
                                <option value="Vetta">Vetta</option>
                                <option value="Tentree">Tentree</option>
                                <option value="Boden">Boden</option>
                                <option value="Summersalt">Summersalt</option>
                                <option value="Outerknown">Outerknown</option>
                            </select> */}



                                <label>
                                    Gender:
                                    <select onChange={handleChangeGender}>
                                        <option selected value="blank"></option>
                                        <option value="f">Female</option>
                                        <option value="m">Male</option>
                                    </select>
                                </label>
                                <br/><br/>
                                <label>
                                    Age Group:
                                    <select onChange={handleChangeAgeGroup}>
                                        <option selected value="blank"></option>
                                        <option value="adult">adult</option>
                                        <option value="teen">teen</option>
                                        <option value="child">child</option>
                                        <option value="baby">baby</option>
                                        <option value="foetus">foetus</option>
                                    </select>
                                </label>
                                <br/><br/>
                                <label>
                                    Colour:
                                    <input type="text" value={productColour} onChange={handleChangeColour}/>
                                </label>
                                <br/><br/>
                                <label>
                                    Size:
                                    <select onChange={handleChangeSize}>
                                        <option selected value="blank"></option>
                                        <option value="s">Small</option>
                                        <option value="m">Medium</option>
                                        <option value="l">Large</option>
                                    </select>
                                </label>
                                <br/><br/>
                                <label>
                                    Stock:
                                    <input type="number" value={productStock} onChange={handleChangeStock}/>
                                </label>
                                <br/><br/>
                                <label>
                                    Price (in cents):
                                    <input type="number" value={productPriceCents} onChange={handleChangePriceCents}/>
                                </label>
                                <br/><br/>
                                <label>
                                    Image URL:
                                    <input type="text" value={productImageUrl} onChange={handleChangeImageUrl}/>
                                </label>
                            </div>
                        </div>
                        <br/><br/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="newStoreContainerSpacer"/>
            </div>
            <div className="spacer"/>
            <Footer/>
        </>
    )
}

export default NavProductsCreate
