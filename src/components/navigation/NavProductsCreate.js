import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'



function NavProductsCreate() {

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
    }

    return (
        <>
            <Header/>
            <h1>Add a New Product</h1>
            <form onSubmit={handleSubmit}>
                <h2>PRODUCT INFO</h2>
                <label>
                    UID:
                    <input type="text" value={productUid} onChange={handleChangeUid}/>
                </label>
                <label>
                    Product Name:
                    <input type="text" value={productName} onChange={handleChangeName}/>
                </label>
                <label>
                    Category:
                    <input type="text" value={productCategory} onChange={handleChangeCategory}/>
                </label>
                <label>
                    Sub Category:
                    <input type="text" value={productSubCategory} onChange={handleChangeSubCategory}/>
                </label>
                <label>
                    Description:
                    <input type="text" value={productDescription} onChange={handleChangeDescription}/>
                </label>
                <label>
                    Gender:
                    <input type="text" value={productGender} onChange={handleChangeGender}/>
                </label>
                <label>
                    Age Group:
                    <input type="text" value={productAgeGroup} onChange={handleChangeAgeGroup}/>
                </label>
                <label>
                    Colour:
                    <input type="text" value={productColour} onChange={handleChangeColour}/>
                </label>
                <label>
                    Size:
                    <input type="text" value={productSize} onChange={handleChangeSize}/>
                </label>
                <label>
                    Stock:
                    <input type="number" value={productStock} onChange={handleChangeStock}/>
                </label>
                <label>
                    Price (in cents):
                    <input type="number" value={productPriceCents} onChange={handleChangePriceCents}/>
                </label>
                <label>
                    Image URL:
                    <input type="text" value={productImageUrl} onChange={handleChangeImageUrl}/>
                </label>
                
                <input type="submit" value="Submit" />
            </form>
            <Footer/>
        </>
    )
}

export default NavProductsCreate
