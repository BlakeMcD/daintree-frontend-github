import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import LogoSquareLarge from '../LogoSquareLarge';


function NavStores() {

    const url = 'http://localhost:3000/api/v1/stores'

    const [brands, setBrands] = useState([]);

    useEffect( async() => {
        //fetch data
        const response = await fetch(url);
        const data = await response.json();

        //send data to state
        setBrands(data)
    }, [])

    const renderBrands = () => {
        if (brands.length === 0) {
            return (
                <p>Brands Loading</p>
            )
        }
        else {
            console.log(brands)
            return (
                <div className="brandsContainer">
                    {
                        brands.map( (brand) => {
                            return (
                                <>
                                    <LogoSquareLarge imageSource={brand.logo_url_square} imageAlt={brand.name}/>
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
            {renderBrands()}
            <div className="spacer"/>
            <Footer/>
        </>
    )
}

export default NavStores
