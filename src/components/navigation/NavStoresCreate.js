import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'



function NavStoresCreate() {

    const [storeName, setStoreName] = useState("")
    const [storeDescription, setStoreDescription] = useState("")
    const [storeUrlSquare, setStoreUrlSquare] = useState("")
    const [storeUrlLandscape, setStoreUrlLandscape] = useState("")

    const handleChangeName = (event) => {
        setStoreName(event.target.value)
    }
    const handleChangeDescription = (event) => {
        setStoreDescription(event.target.value)
    }
    const handleChangeUrlSquare = (event) => {
        setStoreUrlSquare(event.target.value)
    }
    const handleChangeUrlLandscape = (event) => {
        setStoreUrlLandscape(event.target.value)
    }

    const handleSubmit = (event) => {
            event.preventDefault();

            alert("All good so far!")
    }

    return (
        <>
            <Header/>
            <h1>Add a New Store</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={storeName} onChange={handleChangeName}/>
                </label>
                <label>
                    Description:
                    <input type="text" value={storeDescription} onChange={handleChangeDescription}/>
                </label>
                <label>
                    Logo Square URL:
                    <input type="text" value={storeUrlSquare} onChange={handleChangeUrlSquare}/>
                </label>
                <label>
                    Logo Square Landscape:
                    <input type="text" value={storeUrlLandscape} onChange={handleChangeUrlLandscape}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <Footer/>
        </>
    )
}

export default NavStoresCreate
