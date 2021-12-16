import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from "react-router-dom"
import jwtDecode from 'jwt-decode'

function NavStoresCreate() {

    //admin permissions
    const navigate = useNavigate();

    useEffect( () => {
        const system_admin = jwtDecode(localStorage.getItem('jwt')).system_admin

        if (!system_admin) {
            navigate('/', {replace: true})
        } 
    },[])

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

        console.log("All good so far!")

        const posturl = 'http://localhost:3000/api/v1/stores/create';

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                accept: 'application/json'
                }, 
            body: JSON.stringify({ 
                store: {
                    name:storeName,
                    description:storeDescription,
                    logo_url_square:storeUrlSquare,
                    logo_url_landscape:storeUrlLandscape
                }
            })
        };

        //(:name, :description, :logo_url_square, :logo_url_landscape)

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
            <div className="newStoreContainerContainer">
                <div className="newStoreContainerSpacer"/>
                <div className="newStoreContainer">
                    <h1>Add a New Store</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={storeName} onChange={handleChangeName}/>
                        </label>
                        <br/><br/>
                        <label>
                            Description:
                            <input type="text" value={storeDescription} onChange={handleChangeDescription}/>
                        </label>
                        <br/><br/>
                        <label>
                            Logo Square URL:
                            <input type="text" value={storeUrlSquare} onChange={handleChangeUrlSquare}/>
                        </label>
                        <br/><br/>
                        <label>
                            Logo Square Landscape:
                            <input type="text" value={storeUrlLandscape} onChange={handleChangeUrlLandscape}/>
                        </label>
                        <br/><br/>
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

export default NavStoresCreate
